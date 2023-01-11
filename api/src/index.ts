import express from "express";
import config from "./config/config";
import mongoose from "mongoose";
import UserRouter from "./routes/user/user.router";
import cors from "cors";
import session from "express-session";
import init from "./database/init";
import initPassportAndSession from "./middlewares/passport.middleware";
const allowedOrigins = ["http://localhost:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials:true
};
const app = express();
const port = 8080;

init();

app.use(cors({
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
  credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initPassportAndSession(app);

// const connection = mongoose.createConnection(DB, {});
app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user? req.user : "no user");
  next();
});
app.use(function (req, res, next)
{
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});
//USER ROUTER
app.use("/api/users", UserRouter);
app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});

app.all("*", (req, res, next) => {
  //console
  res.status(404).json({
    status: "fail",
    message: `Failed to find route ${req.originalUrl}`,
  });
});

//error handler

