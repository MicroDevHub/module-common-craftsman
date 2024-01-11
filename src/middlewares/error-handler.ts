import { NextFunction, Request, Response } from 'express';

import { BaseError } from '../api-response-errors/base-error';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).send({
      error: err.serializeErrors(),
    });
  }

  res.status(500).send({
    errors: [
      {
        message: 'Internal Server Error',
      },
    ],
  });
};
