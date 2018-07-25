const { gql } = require('apollo-server-koa');

const schema = gql`
  type Item {
    created: Int
    d1: String
    d2: String
    dir: String
    files: [File]
    files_count: Int
    item_size: Int
    metadata: ItemMetadata
    server: String
    uniq: Int
    updated: Int
    workable_servers: [String]
    xisbn: xISBN
  }

  type ItemMetadata {
    added_date: DateTime
    backup_location: String
    bookplateleaf: String
    boxid: String
    call_number: String
    camera: String
    city: String
    collection: [String]
    collectionid: String
    color: String
    contributor: String
    country: Country
    creator: Creator
    description: [String]
    donor: String
    filesxml: String
    foldoutcount: Int
    hidden: Int
    identifier: String
    imagecount: Int
    invoice: String
    isbn: [String]
    language: Language
    lccn: String
    licenseurl: String
    mediatype: String
    numeric_id: Int
    oclc_id: [String]
    ocr: String
    openlibrary: String
    openlibrary_edition: String
    openlibrary_work: String
    operator: String
    pick: Int
    possible_copyright_status: CopyrightStatus
    ppi: Int
    proddate: Year
    public: Int
    publicdate: DateTime
    publisher: String
    repub_state: Int
    republisher_date: DateTime
    republisher_operator: String
    republisher_time: String
    runtime: String
    scandate: DateTime
    scanfee: String
    scanner: String
    scanningcenter: String
    shipping_container: String
    shiptracking: String
    shotlist: String
    sound: String
    sponsor: String
    sponsordate: DateTime
    subject: String
    title: String
    updatedate: [DateTime]
    updater: [String]
    uploader: String
    year: Year
  }

  type xISBN {
    author: String
    city: String
    form: [String]
    isbn: [String]
    lang: Language
    lccn: [String]
    oclcnum: [String]
    publisher: String
    title: String
    url: [String]
    year: Year
  }
`;

//   name: 'Item',
//   fields: () => ({
//     metadata: {
//       type: new GraphQLObjectType({
//         name: 'ItemMetadata',
//         fields: () => ({
//           external_identifier: {
//             type: new GraphQLList(GraphQLString),
//             resolve: data => data['external-identifier'],
//           },
//           identifier_access: {
//             type: GraphQLString,
//             resolve: data => data['identifier-access'],
//           },
//           identifier_ark: {
//             type: GraphQLString,
//             resolve: data => data['identifier-access'],
//           },
//           loans_status_last_loan_date: {
//             type: DateTimeType,
//             resolve: data => data.loans__status__last_loan_date,
//           },
//           loans_status_num_loans: {
//             type: GraphQLInt,
//             resolve: data => data.loans_status_num_loans,
//           },
//           loans_status_num_waitlist: {
//             type: GraphQLInt,
//             resolve: data => data.loans_status_num_waitlist,
//           },
//           loans_status_status: {
//             type: GraphQLString,
//             resolve: data => data.loans_status_status,
//           },
//           mediatype: {
//             type: GraphQLString,
//             resolve: ({ mediatype, type }) => mediatype || type,
//           },
//           page_progression: {
//             type: GraphQLString,
//             resolve: data => data['page-progression'],
//           },
//           related_external_id: {
//             type: new GraphQLList(GraphQLString),
//             resolve: data => data['related-external-id'],
//           },
//         }),
//       }),
//     },
//   }),
// });

module.exports = schema;
