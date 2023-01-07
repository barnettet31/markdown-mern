import User from "../models/user.model";
import { NextFunction, Request, Response } from "express";
import passport from "../middlewares/passport.middleware";
export const createUser = async (req: Request, res: Response, next:NextFunction) =>
{
  const { email, password, fullName } = req.body;
  const takenEmail = await User.findOne({ email: email });
  const takenFullName = await User.findOne({ fullName: fullName });
  if (takenEmail || takenFullName)
    return res.status(402).json({ message: "User already exists" });
  const user = await User.create({
    email,
    password,
    fullName,
  });
  res.status(201).json({user})
};


export const me = async (req: Request, res: Response, next: NextFunction) =>
{
  //@ts-ignore
res.status(200).json({ email: req.user.email, documents: req.user.documents, fullName: req.user.fullName });

};

export const loginUser = (req: Request, res: Response, next: NextFunction) =>
{
  passport.authenticate(
    "local",
    function (err, user, info)
    {

      if (!user)
        return res
          .status(401)
          .json({ message: "Username or password is not matched" });
      req.login(user, (err) =>
      {
        if (err) throw err;
        res.status(201).json({ user });
      });
    }
  )(req, res, next);
};
