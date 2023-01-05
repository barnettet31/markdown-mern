import passport from "passport";
import passportLocal from "passport-local";

import { IUserDocument } from "../interfaces/user.interface";
import User from "../models/user.model";

const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy(User.authenticate()));

export default passport;
