import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import useStyles from '../../styles';

const BookCard = (book) => {
  const classes = useStyles();
  if (book) {
    const {
      id, name, author, dateCreated,
    } = book.book;
    const bookName = name ? name.toUpperCase() : name;
    const authorName = author ? author.name.toUpperCase() : author;
    const bookDate = dateCreated ? dateCreated.toUpperCase() : dateCreated;
    return (
      <Fragment>
        <Card key={id} className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {bookName}
            </Typography>
            <Typography>
              {authorName}
            </Typography>
            <Typography>
              {bookDate}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
                      View
            </Button>
            <Button size="small" color="primary">
                      Edit
            </Button>
          </CardActions>
        </Card>
      </Fragment>
    );
  }
  return 'No book added';
};

export default BookCard;
