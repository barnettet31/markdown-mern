import passport from "passport";
import passportLocal from "passport-local";

import { IUserDocument } from "../interfaces/user.interface";
import User from "../models/user.model";
import { NextFunction, Request, Response } from "express";
import { find } from "lodash";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((req, user, done) => {
  done(undefined, user);
});
passport.deserializeUser((id, done) => {
  User.findById(id, (err: NativeError, user: IUserDocument) => done(err, user));
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne(
      { email: email.toLowerCase() },
      (err: NativeError, user: IUserDocument) => {
        if (err) return done(err);
        if (!user)
          return done(undefined, false, {
            message: `Email ${email} not found.`,
          });
        user.comparePassword(password, (err: Error, isMatch: boolean) => {
          if (err) return done(err);
          if (isMatch) {
            return done(undefined, user);
          }
          return done(undefined, false, {
            message: "Invalid email or password.",
          });
        });
      }
    );
  })
);
