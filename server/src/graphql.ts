import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { questions } from './questions';

const Description = new GraphQLObjectType({
  name: 'Description',
  fields: {
    text: { type: GraphQLNonNull(GraphQLString) },
    code: { type: GraphQLString },
  },
});
const Variant = new GraphQLObjectType({
  name: 'Variant',
  fields: {
    id: { type: GraphQLNonNull(GraphQLString) },
    text: { type: GraphQLNonNull(GraphQLString) },
  },
});

const Question = new GraphQLObjectType({
  name: 'Question',
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    codeExample: { type: GraphQLNonNull(GraphQLString) },
    variants: { type: GraphQLNonNull(GraphQLList(GraphQLNonNull(Variant))) },
    description: {
      type: GraphQLNonNull(Description),
    },
    correctAnswerId: { type: GraphQLNonNull(GraphQLString) },
  },
});

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    questions: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(Question))),
      resolve: () => {
        return questions;
      },
    },
  },
});
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello from the Mutation',
    },
  },
});

export const schema = new GraphQLSchema({ query, mutation });
