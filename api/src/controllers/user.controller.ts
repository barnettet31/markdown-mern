import User from "../models/user.model";
import { Request, Response } from "express";
export const createUser = async(req:Request, res:Response)=>{

}

export const getUser = async (req:Request, res:Response)=>{
    console.log(req.params);
    res.status(200).json({
        message:'good job'
    })
}