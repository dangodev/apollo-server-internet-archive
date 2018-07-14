const { GraphQLScalarType } = require('graphql');

const CreatorType = new GraphQLScalarType({
  name: 'Creator',
  serialize(value) {
    if (typeof value === 'string') {
      return [value];
    }
    return value;
  },
});

module.exports = CreatorType;
