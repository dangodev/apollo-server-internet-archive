const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const CopyrightStatusType = require('./CopyrightStatus');
const DateTimeType = require('./DateTime');
const FileType = require('./File');
const LanguageType = require('./Language');
const YearType = require('./Year');

const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    created: { type: GraphQLInt },
    d1: { type: GraphQLString },
    d2: { type: GraphQLString },
    dir: { type: GraphQLString },
    files: { type: new GraphQLList(FileType) },
    files_count: { type: GraphQLInt },
    item_size: { type: GraphQLInt },
    metadata: {
      type: new GraphQLObjectType({
        name: 'ItemMetadata',
        fields: () => ({
          addeddate: { type: DateTimeType },
          call_number: { type: GraphQLString },
          camera: { type: GraphQLString },
          collection: { type: new GraphQLList(GraphQLString) },
          contributor: { type: GraphQLString },
          creator: { type: new GraphQLList(GraphQLString) },
          curation: { type: GraphQLString },
          date: { type: YearType },
          filesxml: { type: GraphQLString },
          identifier: { type: GraphQLString },
          identifier_access: { type: GraphQLString },
          identifier_ark: { type: GraphQLString },
          imagecount: { type: GraphQLString },
          language: { type: LanguageType },
          mediatype: { type: GraphQLString },
          operator: { type: GraphQLString },
          possible_copyright_status: { type: CopyrightStatusType },
          ppi: { type: GraphQLString },
          publicdate: { type: DateTimeType },
          publisher: { type: GraphQLString },
          repub_state: { type: GraphQLString },
          scandate: { type: DateTimeType },
          scanner: { type: GraphQLString },
          scanningcenter: { type: GraphQLString },
          sponsor: { type: GraphQLString },
          sponsordate: { type: DateTimeType },
          subject: { type: GraphQLString },
          title: { type: GraphQLString },
          updatedate: { type: new GraphQLList(DateTimeType) },
          updater: { type: new GraphQLList(GraphQLString) },
          uploader: { type: GraphQLString },
          year: { type: YearType },
        }),
      }),
      server: { type: GraphQLString },
      uniq: { type: GraphQLInt },
      updated: { type: GraphQLInt },
      workable_servers: { type: new GraphQLList(GraphQLString) },
    },
  }),
});

module.exports = ItemType;
