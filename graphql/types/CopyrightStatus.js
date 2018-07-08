const { GraphQLEnumType } = require('graphql');

const CopyrightStatusType = new GraphQLEnumType({
  name: 'CopyrightStatus',
  values: {
    NOT_IN_COPYWRIGHT: { value: 'NOT_IN_COPYWRIGHT' },
  },
});

module.exports = CopyrightStatusType;
