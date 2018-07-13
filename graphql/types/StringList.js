const { GraphQLScalarType } = require('graphql');

const StringList = new GraphQLScalarType({
  name: 'StringList',
  serialize(value) {
    if (typeof value === 'string') {
      return [value];
    }
    return value;
  },
});

module.exports = StringList;
