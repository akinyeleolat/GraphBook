import { GraphQLString, GraphQLNonNull } from 'graphql';
import { AuthorType } from '../types';
import { addAuthor } from '../../resolvers/authorResolver';

export const addAuthorMutation = {
  type: AuthorType,
  description: 'Add an author',
  args: {
    name: { type: GraphQLNonNull(GraphQLString) }
  },
  resolve: (parent, args, context) => addAuthor(parent, args, context)
};

export const editAuthorMutation = {};
export const deleteAuthorMutation = {};