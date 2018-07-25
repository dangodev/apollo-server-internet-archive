const { gql } = require('apollo-server-koa');

const schema = gql`
  type SearchResult {
    responseHeader: SearchHeader
    response: SearchResponse
  }

  type SearchHeader {
    status: Int
    QTime: Int
    params: SearchParams
  }

  type SearchParams {
    fields: String
    qin: String
    query: String
    rows: Int
    sort: String
    start: Int
    wt: String
  }

  type SearchResponse {
    numFound: Int
    start: Int
    docs: [SearchItem]
  }

  type SearchItem {
    avg_rating: String
    backup_location: String
    btih: String
    call_number: String
    collection: String
    contributor: String
    coverage: String
    creator: [String]
    date: DateTime
    description: [String]
    downloads: Int
    foldoutcount: Int
    format: [String]
    genre: String
    headerImage: String
    identifier: String
    imagecount: Int
    indexflag: [String]
    item_size: Int
    language: Language
    licenseurl: String
    mediatype: String
    members: String
    month: Int
    oai_updatedate: [DateTime]
    publicdate: DateTime
    stripped_tags: [String]
    subject: [String]
    title: String
    week: Int
    year: Year
  }
`;

module.exports = schema;
