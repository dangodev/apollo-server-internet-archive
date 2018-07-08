const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql');
const axios = require('axios');
const chalk = require('chalk');
const ItemType = require('./types/Item');

const BASE_URL = 'https://archive.org';
const ENDPOINT = {
  ITEM: '/metadata/',
};

const ItemQuery = new GraphQLObjectType({
  name: 'ItemQuery',
  fields: () => ({
    item: {
      type: ItemType,
      args: { id: { type: GraphQLString } },
      resolve: (root, { id }) =>
        axios
          .get(`${BASE_URL}${ENDPOINT.ITEM}${id}`)
          .then(({ config, data, status }) => {
            console.log(`${chalk.bold(status)} ${config.url}`);
            return data;
          }),
    },
  }),
});

module.exports = new GraphQLSchema({ query: ItemQuery });
