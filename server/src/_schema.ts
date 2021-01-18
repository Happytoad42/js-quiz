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
    deleteQuestion: {
      type: GraphQLNonNull(Question),
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: (_root, { id }) => {
        for (let i = 0; i < questions.length; i++) {
          if (questions[i].id === id) {
            return questions.splice(i, 1)[0];
          }
        }
        throw new Error('Failed to delete question');
      },
    },
  },
});

export const schema = new GraphQLSchema({ query, mutation });
