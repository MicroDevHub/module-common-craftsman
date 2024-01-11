import { BaseError } from './base-error';

export class DatabaseConnectionError extends BaseError {
  statusCode: number;
  reason: string;
  constructor() {
    super('Error connecting to database');
    this.statusCode = 500;
    this.reason = 'Error connecting to database';
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
