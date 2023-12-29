import { ValidationError } from 'express-validator';

import { BaseError } from './base-error';

export class RequestValidationError extends BaseError {
  private errors: ValidationError[];
  statusCode: number;

  constructor(errors: ValidationError[]) {
    super('Missing required information. Please provide all parameters.');
    this.errors = errors;
    this.statusCode = 400;
  }

  serializeErrors() {
    return this.errors.map((err: ValidationError) => {
      return {
        message: err.msg,
      };
    });
  }
}
