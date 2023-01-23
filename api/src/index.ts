import express from "express";
import UserRouter from "./routes/user/user.router";
import DocumentRouter from './routes/documents/documents.router';
import cors from "cors";
import init from "./database/init";
import initPassportAndSession from "./middlewares/passport.middleware";

const app = express();
const port = 8080;

init();

app.use(cors({
  origin:"https://www.travreadz.com",
  credentials: true,
}));

app.use(function (req, res, next)
{
  console.log(req.headers.origin);
  res.header("Access-Control-Allow-Origin", "https://www.travreadz.com");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Credentials");
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  console.log("headers set");
  
  next();
});

initPassportAndSession(app);
// const connection = mongoose.createConnection(DB, {});


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

