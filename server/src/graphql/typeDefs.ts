import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Variant {
    id: String!
    text: String!
  }

  type Description {
    text: String!
    code: String
  }

  type Question {
    id: ID!
    title: String!
    codeExample: String!
    variants: [Variant!]!
    description: Description!
    correctAnswerId: String!
  }

  type Query {
    questions: [Question!]!
  }

  type Mutation {
    deleteQuestion(id: ID!): Question!
  }
`;
