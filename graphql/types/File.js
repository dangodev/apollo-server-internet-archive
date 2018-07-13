const {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const FileType = new GraphQLObjectType({
  name: 'File',
  fields: {
    crc32: { type: GraphQLString },
    format: { type: GraphQLString },
    md5: { type: GraphQLString },
    mtime: { type: GraphQLInt },
    name: { type: GraphQLString },
    original: { type: GraphQLString },
    private: { type: GraphQLBoolean },
    rotation: { type: GraphQLInt },
    sha1: { type: GraphQLString },
    size: { type: GraphQLInt },
    source: { type: GraphQLString },
  },
});

module.exports = FileType;
