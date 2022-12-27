import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsync = (fn: RequestHandler): RequestHandler => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => Promise.resolve(fn(req, res, next)).catch(next);
};
//takes in an async route handler, and catches any errors that occur. Sends that on to the centralized error handler in index.js