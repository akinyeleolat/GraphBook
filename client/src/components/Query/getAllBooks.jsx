import React from 'react';
import {Query} from 'react-apollo';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../styles';
import Button from '@material-ui/core/Button';
import { getAllBooksQuery } from './../../query/books'


const GetAllBooks = () => {
const classes = useStyles();
return(<Query  
query= {getAllBooksQuery}>
        {({data})=>{
            if(data.books===undefined)return 'loading ....';
            const {books}= data;
            return books.map(book => (
              <Grid item key={book.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {book.name.toUpperCase()}
                    </Typography>
                    <Typography>
                    {book.author.name.toUpperCase()}
                    </Typography>
                    <Typography>
                    {book.dateCreated.toUpperCase()}
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
              </Grid>
            ))
          }}
</Query>
)
}
export default GetAllBooks;