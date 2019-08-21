import React, { Fragment } from 'react';
import { useQuery } from 'react-apollo';
import CardList from './cardList';
import { getAllBooksQuery } from '../../query/books';


const GetAllBooks = () => {
  const { loading, data } = useQuery(getAllBooksQuery);
  const { books } = data;
  return (
    <Fragment>
      {loading ? (<p>{'...loading'}</p>)
        : (
          <CardList books={books}/>

        )}
    </Fragment>);
};

export default GetAllBooks;
