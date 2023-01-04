import User from "../models/user.model";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import bcrypt from "bcrypt";
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

export const loginUser: RequestHandler = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email }).lean();
  if (!user) return res.json({ message: "Invalid Email or Password" });
  const comparisonCorrect = await bcrypt.compare(password, user.password);
  if (!comparisonCorrect)
    return res.json({ message: "Invalid Email or Password" });
  req.session.regenerate(function (err) {
    req.session.user = { id: user.id };
    req.session.save(function (err) {
      if (err) return next(err);
      res.send({ loggedIn: true, session: req.session.user });
    });
  });
});
