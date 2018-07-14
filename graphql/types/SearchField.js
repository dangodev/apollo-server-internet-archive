const { GraphQLInterfaceType, GraphQLList, GraphQLString } = require('graphql');

const SearchFieldType = new GraphQLInterfaceType({
  name: 'SearchFields',
  fields: {
    collection: { type: new GraphQLList(GraphQLString) },
  },
});

module.exports = SearchFieldType;
