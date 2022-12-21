import express from "express";
import config from './config/config'
import mongoose from "mongoose";
const app = express();
const port = 8080;



const DB = config.DATABASE_URL.replace('<PASSWORD>', config.DATABASE_PASSWORD);

mongoose.connect(DB).then(con=>{
  console.log(con.connections);
  console.log('DB connection successful')
}).catch(e=>{
  console.log(e);
});

app.get("/", (req, res) => {
  console.log(DB);
});

app.listen(port, () => {
  console.log('hello world')

});


app.all('*', (req, res, next)=>{
  res.status(404).json({
    status:'fail',
    message:`Failed to find route ${req.originalUrl}`
  })
});
