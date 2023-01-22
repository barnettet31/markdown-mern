import express from "express";
import UserRouter from "./routes/user/user.router";
import DocumentRouter from './routes/documents/documents.router';
import cors from "cors";
import init from "./database/init";
import initPassportAndSession from "./middlewares/passport.middleware";
import cookieParser from 'cookie-parser';
const allowedOrigins = ["http://localhost:5173"];

const app = express();
const port = 8080;

init();

app.use(cors({
  origin: function (origin, callback)
  {
    console.log(origin);
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1)
    {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initPassportAndSession(app);

// const connection = mongoose.createConnection(DB, {});

app.use(function (req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });
  //USER ROUTER
  app.use("/api/users", UserRouter);
  app.use("/api/documents", DocumentRouter);
  app.listen(port, () =>
  {
    console.log(`App started at http://localhost:${port}`);
  });

  app.all("*", (req, res, next) =>
  {
    //console
    res.status(404).json({
      status: "fail",
      message: `Failed to find route ${req.originalUrl}`,
    });
  });

//error handler 

