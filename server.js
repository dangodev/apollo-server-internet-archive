const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const chalk = require('chalk');
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');

const schema = require('./graphql/schema');

const app = new Koa();
const router = new KoaRouter();
const PORT = 3000;

// koaBody is needed just for POST.
router.post('/graphql', koaBody(), graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);

console.log(chalk.green(`✓ Ready on localhost:${PORT}`));
