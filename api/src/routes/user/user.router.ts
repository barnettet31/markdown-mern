import express from "express";

import {createUser, getUser} from '../../controllers/user.controller';
const router = express.Router();

router
.route("/create")
.post(createUser);

router
.route('/get')
.get(getUser)

export default router;
