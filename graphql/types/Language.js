const { GraphQLEnumType } = require('graphql');

const LanguageType = new GraphQLEnumType({
  name: 'Language',
  values: {
    eng: { value: 'en' },
  },
});

module.exports = LanguageType;
