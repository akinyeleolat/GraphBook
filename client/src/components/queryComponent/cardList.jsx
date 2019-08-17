import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import BookCard from './bookCard';

const CardList = (books) => {
  return (
    <Fragment>
      {books.length < 0 ? ('...loading') : (books.books.map((book, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <BookCard key={book.id} book={book}/>
        </Grid>
      )))}
    </Fragment>
  );
};

export default CardList;
