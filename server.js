const Koa = require('koa');
const chalk = require('chalk');
const { ApolloServer } = require('apollo-server-koa');
const { RESTDataSource } = require('apollo-datasource-rest');

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
