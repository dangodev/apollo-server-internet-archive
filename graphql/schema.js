const { gql, ApolloError } = require('apollo-server-koa');
const { makeExecutableSchema } = require('graphql-tools');

/* Types */
const CopyrightStatus = require('./type/CopyrightStatus');
const File = require('./type/File');
const Item = require('./type/Item');
const SearchResult = require('./type/SearchResult');

/* Scalars */
const Country = require('./scalar/Country');
const Creator = require('./scalar/Creator');
const DateTime = require('./scalar/DateTime');
const Description = require('./scalar/Description');
const Language = require('./scalar/Language');
const Year = require('./scalar/Year');

const SchemaDefinition = gql`
  scalar Country
  scalar Creator
  scalar DateTime
  scalar Description
  scalar Language
  scalar Year

  type RootQuery {
    item(id: String!): Item
    search(query: String!, limit: Int, sort: [String], start: Int): SearchResult
  }

  schema {
    query: RootQuery
  }
`;

const resolvers = {
  RootQuery: {
    item: async (_parent, { id }, { dataSources }) =>
      dataSources.archiveAPI.getItem(id),
    search: async (
      _parent,
      { query, limit, sort, start },
      { dataSources },
      { fieldNodes }
    ) => {
      // Archive.org lets you specify the fields for the JSON data for an efficient response. This auto-pulls them from the GraphQL query.
      const responseQuery = fieldNodes
        .find(({ name: { value } }) => value === 'search')
        .selectionSet.selections.find(
          ({ name: { value } }) => value === 'response'
        );
      if (!responseQuery) {
        return new ApolloError('Must request `search.response` in query.');
      }
      const docsQuery = responseQuery.selectionSet.selections.find(
        ({ name: { value } }) => value === 'docs'
      );
      if (!docsQuery) {
        return new ApolloError('Must request `search.response.docs` in query.');
      }
      const getFieldsFromQuery = docsQuery.selectionSet.selections.map(
        ({ name: { value } }) => value
      );
      return dataSources.archiveAPI.searchItems({
        query,
        fields: getFieldsFromQuery,
        limit,
        sort,
        start,
      });
    },
  },
  Country,
  Creator,
  DateTime,
  Description,
  Language,
  Year,
};

module.exports = makeExecutableSchema({
  typeDefs: [SchemaDefinition, CopyrightStatus, File, Item, SearchResult],
  resolvers,
});
