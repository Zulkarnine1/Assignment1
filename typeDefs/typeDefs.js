const { gql } = require("apollo-server-express");
const countrySchema = require("../schemas/country-schema");

const typeDefs = gql`
  ${countrySchema.type}
  ${countrySchema.queries}
  ${countrySchema.mutations}
`;

module.exports = typeDefs;
