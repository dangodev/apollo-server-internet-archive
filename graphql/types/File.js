const { GraphQLObjectType, GraphQLString } = require('graphql');

const FileType = new GraphQLObjectType({
  name: 'File',
  fields: {
    crc32: { type: GraphQLString },
    format: { type: GraphQLString },
    md5: { type: GraphQLString },
    mtime: { type: GraphQLString },
    name: { type: GraphQLString },
    original: { type: GraphQLString },
    sha1: { type: GraphQLString },
    size: { type: GraphQLString },
    source: { type: GraphQLString },
  },
});

module.exports = FileType;
