import passport from "passport";
import express from "express";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user.model";
import cookieSession from 'cookie-session'
import config from "../config/config";
import flash from 'connect-flash';
import path from "path";
import cookieParser from "cookie-parser";

export default function initPassportAndSession(app: express.Application) {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieSession({
    name: 'session',
    keys: [config.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours

  }));
  app.use(function (request, response, next)
  {
    if (request.session && !request.session.regenerate)
    {
      //@ts-ignore
      request.session.regenerate = (cb) =>
      {
        //@ts-ignore
        cb();
      };
    }
    if (request.session && !request.session.save)
    {
      //@ts-ignore
      request.session.save = (cb) =>
      {
        //@ts-ignore
        cb();
      };
    }
    next();
  });
  app.use(flash());
  passport.use(new LocalStrategy(User.authenticate()));

  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

}