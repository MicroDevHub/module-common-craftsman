import { BaseError } from './base-error';

export class NotAuthorizedError extends BaseError {
  statusCode: number;

  constructor() {
    super('Not Authorized');
    this.statusCode = 401;
  }

  serializeErrors() {
    return [
      {
        message: 'Not Authorized',
      },
    ];
  }
}
