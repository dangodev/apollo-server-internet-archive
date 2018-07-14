const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const CopyrightStatusType = require('./CopyrightStatus');
const CollectionType = require('./Collection');
const CountryType = require('./Country');
const CreatorType = require('./Creator');
const DateTimeType = require('./DateTime');
const DescriptionType = require('./Description');
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
          backup_location: { type: GraphQLString },
          bookplateleaf: { type: GraphQLString },
          boxid: { type: GraphQLString },
          call_number: { type: GraphQLString },
          camera: { type: GraphQLString },
          city: { type: GraphQLString },
          collection: { type: CollectionType },
          collectionid: { type: GraphQLString },
          color: { type: GraphQLString },
          contributor: { type: GraphQLString },
          country: { type: CountryType },
          creator: { type: CreatorType },
          curation: { type: GraphQLString },
          date: { type: YearType },
          description: { type: DescriptionType },
          donor: { type: GraphQLString },
          external_identifier: {
            type: new GraphQLList(GraphQLString),
            resolve: data => data['external-identifier'],
          },
          foldoutcount: { type: GraphQLInt },
          filesxml: { type: GraphQLString },
          hidden: { type: GraphQLInt },
          identifier: { type: GraphQLString },
          identifier_access: {
            type: GraphQLString,
            resolve: data => data['identifier-access'],
          },
          identifier_ark: {
            type: GraphQLString,
            resolve: data => data['identifier-access'],
          },
          imagecount: { type: GraphQLInt },
          invoice: { type: GraphQLString },
          isbn: { type: new GraphQLList(GraphQLString) },
          language: { type: LanguageType },
          licenseurl: { type: GraphQLString },
          lccn: { type: GraphQLString },
          loans_status_last_loan_date: {
            type: DateTimeType,
            resolve: data => data.loans__status__last_loan_date,
          },
          loans_status_num_loans: {
            type: GraphQLInt,
            resolve: data => data.loans_status_num_loans,
          },
          loans_status_num_waitlist: {
            type: GraphQLInt,
            resolve: data => data.loans_status_num_waitlist,
          },
          loans_status_status: {
            type: GraphQLString,
            resolve: data => data.loans_status_status,
          },
          mediatype: {
            type: GraphQLString,
            resolve: ({ mediatype, type }) => mediatype || type,
          },
          numeric_id: { type: GraphQLInt },
          oclc_id: { type: new GraphQLList(GraphQLString) },
          ocr: { type: GraphQLString },
          openlibrary: { type: GraphQLString },
          openlibrary_edition: { type: GraphQLString },
          openlibrary_work: { type: GraphQLString },
          operator: { type: GraphQLString },
          page_progression: {
            type: GraphQLString,
            resolve: data => data['page-progression'],
          },
          pick: { type: GraphQLInt },
          proddate: { type: YearType },
          possible_copyright_status: { type: CopyrightStatusType },
          ppi: { type: GraphQLInt },
          public: { type: GraphQLInt },
          publicdate: { type: DateTimeType },
          publisher: { type: GraphQLString },
          related_external_id: {
            type: new GraphQLList(GraphQLString),
            resolve: data => data['related-external-id'],
          },
          repub_state: { type: GraphQLInt },
          republisher_date: { type: DateTimeType },
          republisher_operator: { type: GraphQLString },
          republisher_time: { type: GraphQLString },
          runtime: { type: GraphQLString },
          scandate: { type: DateTimeType },
          scanfee: { type: GraphQLString },
          scanner: { type: GraphQLString },
          scanningcenter: { type: GraphQLString },
          shotlist: { type: GraphQLString },
          shipping_container: { type: GraphQLString },
          shiptracking: { type: GraphQLString },
          sound: { type: GraphQLString },
          sponsor: { type: GraphQLString },
          sponsordate: { type: DateTimeType },
          subject: { type: GraphQLString },
          title: { type: GraphQLString },
          updatedate: { type: new GraphQLList(DateTimeType) },
          updater: { type: new GraphQLList(GraphQLString) },
          uploader: { type: GraphQLString },
          year: { type: YearType, resolve: ({ date, year }) => year || date },
        }),
      }),
      server: { type: GraphQLString },
      uniq: { type: GraphQLInt },
      updated: { type: GraphQLInt },
      workable_servers: { type: new GraphQLList(GraphQLString) },
      xisbn: new GraphQLObjectType({
        name: 'xISBN',
        fields: () => ({
          stat: { type: GraphQLString },
          list: {
            type: new GraphQLList(
              new GraphQLObjectType({
                author: { type: GraphQLString },
                city: { type: GraphQLString },
                form: { type: new GraphQLList(GraphQLString) },
                isbn: { type: new GraphQLList(GraphQLString) },
                lang: { type: LanguageType },
                lccn: { type: new GraphQLList(GraphQLString) },
                oclcnum: { type: new GraphQLList(GraphQLString) },
                publisher: { type: GraphQLString },
                title: { type: GraphQLString },
                url: { type: new GraphQLList(GraphQLString) },
                year: { type: YearType },
              })
            ),
          },
        }),
      }),
    },
  }),
});

module.exports = ItemType;
