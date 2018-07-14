const {
  GraphQLInt,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLFloat,
  GraphQLString,
} = require('graphql');

const CollectionType = require('./Collection');
const CreatorType = require('./Creator');
const DateTimeType = require('./DateTime');
const DescriptionType = require('./Description');
const LanguageType = require('./Language');
const YearType = require('./Year');

const SearchFieldType = new GraphQLInterfaceType({
  name: 'SearchField',
  fields: {
    avg_rating: { type: GraphQLFloat },
    backup_location: { type: GraphQLString },
    btih: { type: GraphQLString },
    collection: { type: CollectionType },
    contributor: { type: GraphQLString },
    creator: { type: CreatorType },
    date: { type: DateTimeType },
    description: { type: DescriptionType },
    downloads: { type: GraphQLInt },
    external_identifier: {
      type: new GraphQLList(GraphQLString),
      resolve: data => data['external-identifier'],
    },
    foldoutcount: { type: GraphQLInt },
    format: { type: new GraphQLList(GraphQLString) },
    identifier: { type: GraphQLString },
    imagecount: { type: GraphQLInt },
    indexflag: { type: new GraphQLList(GraphQLString) },
    itemsize: { type: GraphQLInt },
    language: { type: LanguageType },
    mediatype: { type: GraphQLString },
    month: { type: GraphQLInt },
    num_reviews: { type: GraphQLInt },
    oai_updatedate: { type: new GraphQLList(DateTimeType) },
    publicdate: { type: DateTimeType },
    related_external_id: {
      type: new GraphQLList(GraphQLString),
      resolve: data => data['related-external-id'],
    },
    reviewdate: { type: DateTimeType },
    stripped_tags: { type: new GraphQLList(GraphQLString) },
    subject: { type: GraphQLString },
    title: { type: GraphQLString },
    week: { type: GraphQLInt },
    year: { type: YearType },
  },
});

module.exports = SearchFieldType;
