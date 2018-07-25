const Koa = require('koa');
const chalk = require('chalk');
const { ApolloServer } = require('apollo-server-koa');
const { RESTDataSource } = require('apollo-datasource-rest');
const queryString = require('query-string');

const schema = require('./graphql/schema');

const PORT = 4000;

class ArchiveAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://archive.org/';
  }

  async getItem(id) {
    return this.get(`metadata/${id}`);
  }

  async searchItems({ query, fields, limit, start, sort }) {
    const params = queryString.stringify(
      {
        fl: fields,
        page: start,
        q: query,
        rows: limit,
        sort,
      },
      { arrayFormat: 'bracket' }
    );
    return this.get(`advancedsearch.php?${params}&output=json`);
  }
}

const server = new ApolloServer({
  schema,
  dataSources: () => ({ archiveAPI: new ArchiveAPI() }),
});

const app = new Koa();
server.applyMiddleware({ app });
app.listen({ port: PORT }, () =>
  console.log(chalk.green(`✓ Ready on localhost:${PORT}`))
);
