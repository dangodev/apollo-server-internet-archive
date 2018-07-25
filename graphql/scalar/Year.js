const { GraphQLScalarType, GraphQLError } = require('graphql');
const { Kind } = require('graphql/language');

const yearToInt = value => {
  const stringVal = value
    .toString()
    .toLowerCase()
    .replace('.', '');
  const suffix = stringVal.match(/(ad|bc|bce|ce)/);
  const year = suffix
    ? parseInt(stringVal.replace(suffix, '').trim(), 10)
    : parseInt(value, 10);
  if (Number.isNaN(year)) return NaN;
  return ['bc', 'bce'].indexOf(suffix) !== -1
    ? -Math.abs(year)
    : Math.abs(year);
};

const Year = new GraphQLScalarType({
  name: 'Year',
  serialize(value) {
    const year = yearToInt(value);
    if (Number.isNaN(year)) {
      throw new TypeError(`Invalid year: ${value}`);
    }
    return year;
  },
  parseValue(value) {
    const year = yearToInt(value);
    if (Number.isNaN(year)) {
      throw new TypeError(`Value is not a valid Year: ${value}`);
    }
    return year;
  },
  parseLiteral(ast) {
    if ([Kind.STRING, Kind.INT].indexOf(ast.kind) === -1) {
      throw new GraphQLError(`Expected String or Int, received ${ast.kind}`);
    }
    const year = yearToInt(ast.value);
    if (Number.isNaN(year)) {
      throw new TypeError(`Value is not a valid Year: ${ast.value}`);
    }
    return year;
  },
});

module.exports = Year;
