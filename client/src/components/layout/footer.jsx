import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from '../../styles';


const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
          Abundance Books
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Author: '}
      <Link color="inherit" href="https://material-ui.com/">
          Akinyele Oluwatosin
      </Link>
    </Typography>
  );
};

const Footer = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Abundance Books
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p">
          Something here to give the you a purpose!
        </Typography>
        <Copyright />
      </footer>
    </Fragment>
  );
};

export default Footer;
