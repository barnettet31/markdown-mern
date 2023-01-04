import * as dotenv from "dotenv";
dotenv.config();
export default {
  DATABASE_URL: process.env.DATABASE_URL ?? "",
  USER_DATABASE_URL: process.env.USER_DATABASE ?? "",
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD ?? "",
  SESSION_SECRET: process.env.SESSION_SECRET ?? "",
};
