import express from "express";
import config from "./config/config";
import mongoose from "mongoose";
import UserRouter from "./routes/user/user.router";
import { errorMiddleWare } from "./controllers/error.controller";
import cors from "cors";
import session, { SessionOptions } from "express-session";
import MongoStore from "connect-mongo";
const allowedOrigins = ["http://localhost:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
const app = express();
const port = 8080;

app.use(express.json());

const DB = config.USER_DATABASE_URL.replace(
  "<PASSWORD>",
  config.DATABASE_PASSWORD
);

const clientP = mongoose
  .set("strictQuery", true)
  .connect(DB)
  .then((m) => m.connection.getClient());

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
app.use(cors(options));

//session middleware
type User = {
  id: string;
};

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}

const mySession: SessionOptions = {
  cookie: { secure: true, maxAge: 60000, httpOnly: true },
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    clientPromise: clientP,
    stringify: false,
    autoRemove: "interval",
    autoRemoveInterval: 1,
    dbName: "users",
  }),
};

app.use(session(mySession));

//error middleware
app.use(errorMiddleWare);
//USER ROUTER
app.use("/api/users", UserRouter);
app.all("*", (req, res, next) => {
  //console
  res.status(404).json({
    status: "fail",
    message: `Failed to find route ${req.originalUrl}`,
  });
});

//error handler
