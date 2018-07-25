const { GraphQLScalarType, GraphQLError } = require('graphql');
const { Kind } = require('graphql/language');

/* Constants */
const EN = 'en';

/* Methods */

const parseLang = value => {
  const valLower = value.toLowerCase();
  switch (valLower) {
    case 'eng':
    case 'english':
      return EN;
    default:
      return value;
  }
};

const LanguageType = new GraphQLScalarType({
  name: 'Language',
  serialize(value) {
    if (typeof value !== 'string') {
      throw new TypeError(`Expected String, received ${typeof value}`);
    }
    return parseLang(value);
  },
  parseValue(value) {
    return parseLang(value);
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(`Expected String, received ${ast.kind}`);
    }
    return parseLang(ast.value);
  },
});

module.exports = LanguageType;
