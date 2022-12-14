import express from "express";
import config from "./config/config";
import mongoose from "mongoose";
import UserRouter from "./routes/user/user.router";
import cors from "cors";
import session from "express-session";
import init from "./database/init";
import initPassportAndSession from "./middlewares/passport.middleware";
import cookiepParser from 'cookie-parser';
const allowedOrigins = ["http://localhost:5173"];

const app = express();
const port = 8080;

init();

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
  credentials:true
}))
app.use(cookiepParser())
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

