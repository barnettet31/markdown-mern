import { ErrorRequestHandler, Response  } from "express";
import AppError from "../utils/appError";
const sendErrorDev = (err:AppError, res:Response)=>{
   res.status(err.statusCode).json({
      status:err.status,
      message:err.message,
      error:err,
      stack:err.stack
     });
}
const sendErrorProd = (err:AppError, res:Response)=>{
   res.status(err.statusCode).json({
      status:err.status,
      message:err.message,
     })
}
export const errorMiddleWare: ErrorRequestHandler = (err:AppError, req, res, next)=>{

   err.statusCode = err.statusCode || 500;
   err.status = err.status || 'error';
   if(process.env.NODE_ENV === 'development') return sendErrorDev(err, res);
   if(process.env.NODE_ENV === 'production') return sendErrorProd(err, res);

   
}