import { BaseError } from './base-error';

export class NotFoundRoutingError extends BaseError {
  statusCode: number;
  constructor() {
    super('Route Not Found');
    this.statusCode = 404;
  }

  serializeErrors() {
    return [
      {
        message: 'Route Not Found',
      },
    ];
  }
}
