import { IUser } from "../interfaces/user.interface";
import crypto from "crypto";
import nodemailer from "nodemailer";
import Verification from "../models/verification.model";
export const handleSendVerification = async ({ id }: IUser) => {
  const uuid = crypto.randomUUID();
  const myVerfication = Verification.create({
    userRef: id,
    verifyHash: uuid,
  });

  //this is where I would send the verification with node mailer
};
