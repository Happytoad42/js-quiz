import { IResolvers } from 'apollo-server-express';
import { questions } from '../questions';

export const resolvers: IResolvers = {
  Query: {
    questions: () => {
      return questions;
    },
  },
  Mutation: {
    deleteQuestion: (_root: undefined, { id }: { id: string }) => {
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].id === id) {
          return questions.splice(i, 1)[0];
        }
      }
      throw new Error('Failed to delete question');
    },
  },
};
