const { GraphQLError, GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

// Modified from https://github.com/okgrow/graphql-scalars/
const DateTimeType = new GraphQLScalarType({
  name: 'DateTime',
  serialize(value) {
    if (!(value instanceof Date)) {
      throw new TypeError(`Value is not an instance of Date: ${value}`);
    }
    if (Number.isNaN(value.getTime())) {
      throw new TypeError(`Value is not a valid Date: ${value}`);
    }
    return value.toJSON();
  },
  parseValue(value) {
    const date = new Date.UTC(value);
    if (Number.isNaN(date.getTime())) {
      throw new TypeError(`Invalid Date: ${value}`);
    }
    return date;
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Expected String, received ${ast.kind}`);
    }
    const result = new Date.UTC(ast.value);
    if (Number.isNaN(result.getTime())) {
      throw new GraphQLError(`Invalid Date: ${ast.value}`);
    }
    if (ast.value !== result.toJSON()) {
      throw new GraphQLError(
        `Invalid format (YYYY-MM-DDTHH:MM:SS.SSSZ): ${ast.value}`
      );
    }
    return result;
  },
});

module.exports = DateTimeType;
