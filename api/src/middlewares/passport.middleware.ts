import passport from "passport";
import express from "express";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user.model";
import session from 'express-session';
import MongoStore from 'connect-mongo';
import config from "../config/config";
import flash from 'connect-flash';
import path from "path";
let uri = config.USER_DATABASE_URL.replace("<PASSWORD>", config.DATABASE_PASSWORD);

export default function initPassportAndSession(app: express.Application) {
  app.use(session({
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
   cookie:{
    httpOnly:true,
   },
    store:MongoStore.create({mongoUrl:uri, collectionName:'session'})
  }));
  // app.use(express.static(path.join(__dirname, 'public')));
  app.use(flash());
  passport.use(new LocalStrategy(User.authenticate()));
  app.use(passport.initialize());
  app.use(passport.session());
  //@ts-ignore
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
 

}