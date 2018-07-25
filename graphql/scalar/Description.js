const { GraphQLScalarType } = require('graphql');

const DescriptionType = new GraphQLScalarType({
  name: 'Description',
  serialize(value) {
    if (typeof value === 'string') {
      return [value];
    }
    return value;
  },
});

module.exports = DescriptionType;
