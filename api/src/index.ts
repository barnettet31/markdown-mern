import express from "express";
import config from './config/config'
import mongoose from "mongoose";
import userModel from "./models/user.model";
import UserRouter from "./routes/user/user.router";
const app = express();
const port = 8080;

app.use(express.json());

const DB = config.USER_DATABASE_URL.replace('<PASSWORD>', config.DATABASE_PASSWORD);

mongoose.connect(DB).then((c)=>{
console.log('DB connection successful')
}).catch(e=>{
  console.log(e);
});


app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`)

});

app.use('/api/users', UserRouter);

app.all('*', (req, res, next)=>{
  res.status(404).json({
    status:'fail',
    message:`Failed to find route ${req.originalUrl}`
  })
});
