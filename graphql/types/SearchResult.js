const {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const SearchFieldType = require('./SearchField');

const SearchResultHeaderType = new GraphQLObjectType({
  name: 'SearchResultHeader',
  fields: () => ({
    fields: { type: GraphQLString, resolve: ({ params }) => params.fields },
    limit: { type: GraphQLInt, resolve: ({ params }) => params.rows },
    json_wrf: {
      type: GraphQLString,
      resolve: ({ params }) => params['json.wrf'],
    },
    qin: { type: GraphQLString, resolve: ({ params }) => params.qin },
    QTime: { type: GraphQLInt },
    query: { type: GraphQLString, resolve: ({ params }) => params.query },
    start: { type: GraphQLInt, resolve: ({ params }) => params.start },
    status: { type: GraphQLInt },
    wt: { type: GraphQLString, resolve: ({ params }) => params.wt },
  }),
});

const SearchResultType = new GraphQLObjectType({
  name: 'SearchResult',
  fields: () => ({
    _meta: {
      type: SearchResultHeaderType,
      resolve: data => data.responseHeader,
    },
    items: {
      type: new GraphQLList(SearchFieldType),
      resolve: ({ response }) => response.docs,
    },
    start: { type: GraphQLInt, resolve: ({ response }) => response.start },
    total: { type: GraphQLInt, resolve: ({ response }) => response.numFound },
  }),
});

module.exports = SearchResultType;
