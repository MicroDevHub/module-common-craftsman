import { NextFunction, Request, Response } from 'express';

import { NotAuthorizedError } from '../api-response-errors/not-authorized-error';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const { currentUser } = req.body;
  if (!currentUser) {
    throw new NotAuthorizedError();
  }
  next();
}