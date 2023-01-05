import User from "../models/user.model";
import { NextFunction, Request, RequestHandler, Response } from "express";
import passport from "../middlewares/passport.middleware";
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

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.isAuthenticated(), req.user);
  res.status(200).json({ user: req.user });
  // const { id } = req.params;
  // const myUser = await User.findById(id);
  // if (myUser) {
  //   res.status(200).json({
  //     message: "success",
  //     user: myUser,
  //   });
  // } else {
  //   res.status(404).json({
  //     message: "use not found",
  //   }); //test
  // }
  // res.status(200).json({
  //   message: "good job get",
  //   id: id,
  // });
};

export const loginUser = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    "local",
    { failureMessage: "wrong stuffs" },
    function (err, user, info) {
      if (!user)
        return res
          .status(401)
          .json({ message: "Username or password is not matched" });
      req.login(user, (err) => {
        if (err) throw err;
        res.status(201).json({ user });
      });
    }
  )(req, res, next);
};
