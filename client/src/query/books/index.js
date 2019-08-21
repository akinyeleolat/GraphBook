import gql from 'graphql-tag';

export const getAllBooksQuery = gql`{
    books{
        id
        name
        dateCreated
      author{
           name
         }
       }
     }`;
export const getSingleBooksQuery = {};
