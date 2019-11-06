/* eslint-disable require-jsdoc */

import { GraphQLError } from 'graphql';
// /**
//  * @param {object} errors
//  * @return {object} result
//  */
// export class ValidationError extends GraphQLError {
//   constructor(errors) {
//     super('The request is invalid.');
//     this.state = errors.reduce((result, error) => {
//       if (Object.prototype.hasOwnProperty.call(result, error.key)) {
//         result[error.key].push(error.message);
//       } else {
//         result[error.key] = [error.message];
//       }
//       return result;
//     }, {});
//   }
// }


// export default ValidationError;



/* @flow */

import type { ValidationErrorEntry } from './src/errorTypes.js';

// TODO: Log the error to Google Stackdriver, Rollbar etc.
function report(error: Error) {
  // eslint-disable-next-line no-console
  console.error(error);
}

export class ValidationError extends GraphQLError {
  code = 400;
  state: any;

  constructor(errors: Array<ValidationErrorEntry>) {
    super('The request is invalid.');
    this.state = errors.reduce((result, error) => {
      if (Object.prototype.hasOwnProperty.call(result, error.key)) {
        result[error.key].push(error.message);
      } else {
        Object.defineProperty(result, error.key, {
          value: [error.message],
          enumerable: true,
        });
      }
      return result;
    }, {});
  }
}

export class UnauthorizedError extends Error {
  code = 401;
  message = this.message || 'Anonymous access is denied.';
}

export class ForbiddenError extends Error {
  code = 403;
  message = this.message || 'Access is denied.';
}

export default { report };
