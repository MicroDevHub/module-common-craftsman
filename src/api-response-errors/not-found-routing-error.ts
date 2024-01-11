import { BaseError } from './base-error';

export class NotFoundRoutingError extends BaseError {
  statusCode: number;
  constructor() {
    super('Route Not Found');
    this.statusCode = 400;
  }

  serializeErrors() {
    return [
      {
        message: 'Route Not Found',
      },
    ];
  }
}
