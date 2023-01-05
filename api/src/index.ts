import express from "express";
import config from "./config/config";
import mongoose from "mongoose";
import UserRouter from "./routes/user/user.router";
import cors from "cors";
import passport from "./middlewares/passport.middleware";
import sessionMiddleWare from "./middlewares/sesssion.middleware";
const allowedOrigins = ["http://localhost:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const DB = config.USER_DATABASE_URL.replace(
  "<PASSWORD>",
  config.DATABASE_PASSWORD
);

export const clientP = mongoose
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

app.use(sessionMiddleWare);
app.use(passport.initialize());
app.use(passport.session());

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
