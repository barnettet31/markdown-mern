import User from "../models/user.model";
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import AppError from "../utils/appError";
export const createUser = async (req: Request, res: Response) => {
  console.log(req.params);
  res.status(200).json({
    message: "good job create",
  });
};

export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      message: "good job get",
    });
  }
);
