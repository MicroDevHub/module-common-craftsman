export abstract class BaseError extends Error {
  abstract statusCode: number;
  message: string;

  constructor(message: string) {
    super(message);
    this.message = message;
  }

  abstract serializeErrors(): {
    message: string;
    field?: string;
  }[];
}
