import express from "express";

import { createUser, me } from "../../controllers/user.controller";
import passport from "passport";
const router = express.Router();
router.route("/register").post(createUser);

router.get("/me", me);

router.post("/login", passport.authenticate('local', (req, res, next) =>
{
req.logIn(req.user, function (err:any)
    {
        if (err) { return next(err); }
        return res.status(200).json({ messsage: 'success' });
    });
    res.status(200).json({ message: 'success' });
})
)
router.post("/logout", function(req,res, next){
    req.logout(function(err){
        if(err) return next(err);

        res.status(200).json({message:'success'});
    });
})
export default router;
