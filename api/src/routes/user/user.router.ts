import express from "express";

import { createUser, me, loginUser } from "../../controllers/user.controller";
const router = express.Router();

router.route("/signup").post(createUser);

router.route("/me").get(me);

router.post("/login", loginUser);
export default router;
