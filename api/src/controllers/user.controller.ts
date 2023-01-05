import User from "../models/user.model";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";
import passport from "passport";
import { IUserDocument } from "../interfaces/user.interface";
import { IVerifyOptions } from "passport-local";
export const createUser = async (req: Request, res: Response) => {
  const { email, password, fullName } = req.body;
  const takenEmail = await User.findOne({ email: email });
  const takenFullName = await User.findOne({ fullName: fullName });
  if (takenEmail || takenFullName)
    return res.json({ message: "User already exists" });
  await User.create({
    email,
    password,
    fullName,
  });

  res.json({ message: "success" });
};

export const confirmUser = async (req: Request, res: Response) => {};

export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const myUser = await User.findById(id);
    if (myUser) {
      res.status(200).json({
        message: "success",
        user: myUser,
      });
    } else {
      res.status(404).json({
        message: "use not found",
      }); //test
    }
    res.status(200).json({
      message: "good job get",
      id: id,
    });
  }
);

export const loginUser: RequestHandler = catchAsync(
  async (req, res, next): Promise<void> => {
    await check("email", "Email is not valid").isEmail().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.redirect("/login");
    }
    passport.authenticate(
      "local",
      (err: Error, user: IUserDocument, info: IVerifyOptions) => {
        if (err) return next(err);
        if (!user) {
          res.redirect("/login");
        }
      }
    );
  }
);
