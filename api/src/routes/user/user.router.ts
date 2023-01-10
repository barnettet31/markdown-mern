import express from "express";

import { createUser, me, loginUser } from "../../controllers/user.controller";
import passport from "../../middlewares/passport.middleware";
const router = express.Router();

router.route("/signup").post(createUser);

router.get("/me", passport.authenticate('local'), me);

router.post("/login", loginUser);
export default router;
