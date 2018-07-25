const { GraphQLError, GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

// Modified from https://github.com/okgrow/graphql-scalars/
const DateTimeType = new GraphQLScalarType({
  name: 'DateTime',
  serialize(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new TypeError(`Value is not a valid Date: ${value}`);
    }
    return date;
  },
  parseValue(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new TypeError(`Invalid Date: ${value}`);
    }
    return date;
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Expected String, received ${ast.kind}`);
    }
    const date = new Date(ast.value);
    if (Number.isNaN(date.getTime())) {
      throw new GraphQLError(`Invalid Date: ${ast.value}`);
    }
    if (ast.value !== date.toJSON()) {
      throw new GraphQLError(
        `Invalid format (YYYY-MM-DDTHH:MM:SS.SSSZ): ${ast.value}`
      );
    }
    return date;
  },
});

module.exports = DateTimeType;
