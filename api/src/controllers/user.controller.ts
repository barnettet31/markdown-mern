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
   User.register(new User({ email, fullName, username:email }), password, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Something went wrong" });
    }
    else{
      req.logIn(user, function(err) {
        if (err) { return res.json({success:false, message:err}); }
        console.log(user);
        return res.status(200).json({success:true, message:'success'});
      });
    }
  });
};


export const me = async (req: Request, res: Response, next: NextFunction) =>
{
req.isAuthenticated() ? res.status(200).json({message:'success', user:req.user}) : res.status(401).json({message:'failure'});

};

export const loginUser = (req: Request, res: Response, next: NextFunction) =>
{
  
  // req.logIn(req.user, function(err) {
  //   if (err) { return next(err); }
  //   return res.status(200).json({ message:'testdata', isAuth:req.isAuthenticated(), user:req.user ? req.user : "dammit"});
  // });
  // res.status(200).json({ message:'testdata', isAuth:req.isAuthenticated(), user:req.user ? req.user : "dammit"});
};
