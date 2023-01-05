import { NextFunction, Request, Response } from "express";
import MongoStore from "connect-mongo";
import session from "express-session";
import config from "../config/config";
import { clientP } from "../index";
const sessionMiddleWare = (req: Request, res: Response, next: NextFunction) => {
  return session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ clientPromise: clientP }),
  })(req, res, next);
};

export default sessionMiddleWare;
