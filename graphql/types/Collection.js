const { GraphQLList, GraphQLString } = require('graphql');

const CollectionType = new GraphQLList(GraphQLString);

module.exports = CollectionType;
