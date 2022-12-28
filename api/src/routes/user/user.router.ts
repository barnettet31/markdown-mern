import express from "express";

import {
  createUser,
  getUser,
  loginUser,
} from "../../controllers/user.controller";
const router = express.Router();

router.route("/signup").post(createUser);

router.route("/get/:id").get(getUser);

router.route("/login").post(loginUser);
export default router;
