import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import User from "../models/user.model";
import { Request } from "express";
import userModel from "../models/user.model";

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (username: string, password: string, done) => {
      try {
        const user = await User.findOne({ email: username });
        //@ts-ignore
        if (user && (await user.comparePassword(password))) done(null, user);
        else done(null, false);
      } catch (e) {
        console.log(e);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});
passport.deserializeUser(async (req: Request, id: string, done: any) => {
  try {
    const user = await userModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
