import User from "../models/user.model";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config";
export const createUser = async (req: Request, res: Response) => {
  const { email, password, fullName } = req.body;
  const takenUserName = await User.findOne({ email: email });
  if (takenUserName) return res.json({ message: "Email is already in use" });
  const encryptedPassword = await bcrypt.hash(password, 10);
  console.log(req.body);
  // const newUser = User.create({
  //   email,
  //   password: encryptedPassword,
  //   fullName,
  // });

  // res.json({ message: "Success", user: newUser });
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
  const userLoggingIn = req.body;
  const user = await User.findOne({ email: userLoggingIn.email });
  if (!user) return res.json({ message: "Invalid Email or Password" });
  const comparisonCorrect = await bcrypt.compare(
    userLoggingIn.password,
    user.password
  );
  if (!comparisonCorrect)
    return res.json({ message: "Invalid Email or Password" });
  const payload = {
    id: user._id,
    email: user.email,
  };

  jwt.sign(
    payload,
    config.JSON_WEBTOKEN_SECRET,
    { expiresIn: 86400 },
    (err, token) => {
      if (err) return res.json({ message: err });
      return res.json({ message: "Success", token: `Bearer ${token}` });
    }
  );
});
