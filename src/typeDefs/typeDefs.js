import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    hello: String!
    items: [Item!]!
  }

  type Item {
    id: ID!
    name: String!
  }

  input updateItemInput {
    name: String
  }

  type Mutation {
    createItem (name: String): Item!
    deleteItem(id: ID): Boolean
    updateItem (id: ID!, input: updateItemInput!): Item!
  }
`;