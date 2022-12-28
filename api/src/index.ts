import express from "express";
import config from './config/config'
import mongoose from "mongoose";
import UserRouter from "./routes/user/user.router";
import { errorMiddleWare } from "./controllers/error.controller";
const app = express();
const port = 8080;

app.use(express.json());

const DB = config.USER_DATABASE_URL.replace('<PASSWORD>', config.DATABASE_PASSWORD);

mongoose.set('strictQuery', true).connect(DB).then((c)=>{
console.log('DB connection successful')
});


app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`)

});
//USER ROUTER
app.use('/api/users', UserRouter);
app.use(errorMiddleWare);
app.all('*', (req, res, next)=>{
  res.status(404).json({
    status:'fail',
    message:`Failed to find route ${req.originalUrl}`
  })
});

//error handler
