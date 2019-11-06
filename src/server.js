/* eslint-disable no-console */
import express from 'express';
import expressGraphQL from 'express-graphql';
import bodyParser from 'body-parser';
import env from 'dotenv';
import cors from 'cors';
import schema from './schema';
import authMiddleWare from './middlewares/authMiddleware';
import { handleErrorNext } from './helpers/utils';
import errors from './middlewares/errors';


env.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  '/graphql',
  authMiddleWare,
  expressGraphQL(req => (
    {
      schema,
      context: {
        user: req.user
      },
      graphiql: true,
      // customFormatErrorFn: error => ({
      //   message: error.message,
      //   state: error.originalError && error.originalError.state,
      //   locations: error.locations,
      //   path: error.path,
      // }),
      customFormatErrorFn: (error: any) => {
        errors.report(error.originalError || error);
        return {
          message: error.message,
          code: error.originalError && error.originalError.code,
          state: error.originalError && error.originalError.state,
          locations: error.locations,
          path: error.path,
        };
      },
    }))
);

app.use((err, req, res, next) => {
  handleErrorNext(err, req, res, next);
});

app.all('*', (req, res) => res.status(404).send({
  status: 'error',
  message: 'you have entered an incorrect route'
}));

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
