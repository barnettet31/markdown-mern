import User, { IUser } from "../models/user.model";
import { NextFunction, Request, Response } from "express";
export const createUser = async (req: Request, res: Response, next:NextFunction) =>
{
  const { email, password, fullName } = req.body;
  try{
    const takenEmail = await User.findOne({ email: email });
    const takenFullName = await User.findOne({ fullName: fullName });
    if (takenEmail || takenFullName) return res.status(402).json({ message: "User already exists" });
    const newUser = new User({ email, fullName, password, username:email });
    User.register(newUser, password, (err, user) => {
      if (err) {
        return res.status(500).json({ message: "Something went wrong" });
      }
      req.logIn(user, function (err){
        if (err) { return res.status(500).json({ message: err }); }
        else
        {
          return res.status(200).json({message:'success'});
        }
      })
      
    });
  }
  catch(e){
    console.log(e);
  }
}

export const me = async (req: Request, res: Response, next: NextFunction) =>
{ 
  if(req.isAuthenticated()){
    const userData = req.user as IUser
    return res.status(200).json({ message:'success', user:userData.email});
  }else{
    console.log('user not authed')
    res.status(404).json({message:'not logged in'});
  }

};

export const loginUser = (req: Request, res: Response, next: NextFunction) =>
{
  
  // req.logIn(req.user, function(err) {
  //   if (err) { return next(err); }
  //   return res.status(200).json({ message:'testdata', isAuth:req.isAuthenticated(), user:req.user ? req.user : "dammit"});
  // });
  // res.status(200).json({ message:'testdata', isAuth:req.isAuthenticated(), user:req.user ? req.user : "dammit"});
};
