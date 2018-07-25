const { gql } = require('apollo-server-koa');

const schema = gql`
  enum CopyrightStatus {
    NOT_IN_COPYWRIGHT
  }
`;

module.exports = schema;
