const { makeExecutableSchema } = require('graphql-tools');

/* Types */
const CopyrightStatus = require('./types/CopyrightStatus');
const File = require('./types/File');
const Item = require('./types/Item');

/* Scalars */
const Country = require('./scalar/Country');
const Creator = require('./scalar/Creator');
const DateTime = require('./scalar/DateTime');
const Description = require('./scalar/Description');
const Language = require('./scalar/Language');
const Year = require('./scalar/Year');

const SchemaDefinition = `
  scalar Country
  scalar Creator
  scalar DateTime
  scalar Description
  scalar Language
  scalar Year

  type RootQuery {
    item(id: String!): Item
  }

  schema {
    query: RootQuery
  }
`;

const resolvers = {
  RootQuery: {
    item: async (_source, { id }, { dataSources }) =>
      dataSources.archiveAPI.getItem(id),
  },
  Country,
  Creator,
  DateTime,
  Description,
  Language,
  Year,
};

module.exports = makeExecutableSchema({
  typeDefs: [SchemaDefinition, CopyrightStatus, File, Item],
  resolvers,
});
