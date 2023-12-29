import { BaseError } from './base-error';

export class NotFoundItemError extends BaseError {
  statusCode: number;
  message: string;
  constructor(message: string) {
    super(message);
    this.message = message;
    this.statusCode = 400;
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
