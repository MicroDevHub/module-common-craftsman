import { BaseError } from './base-error';

export class BadRequestError extends BaseError {
  massage: string;
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.message = message;
    this.statusCode = 400;
  }

  serializeErrors() {
    return [{ message: this.message },
    ];
  }
}
