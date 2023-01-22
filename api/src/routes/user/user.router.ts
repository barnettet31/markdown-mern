import express from "express";

import { createUser, me } from "../../controllers/user.controller";
import passport from "passport";
const router = express.Router();
router.route("/register").post(createUser);

router.get("/me", me);

router.post("/login", passport.authenticate('local', (req, res, next) =>{
    console.log('in the login route');
    console.log(req.user);
    console.log(req.session.passport?.user);
    console.log(req.isAuthenticated());
    res.status(200).json({ message:'successs', isAuth:req.isAuthenticated()});
})
);
router.post("/logout", function (req, res, next)
{
    req.logout(function (err)
    {
        if (err) return next(err);

        res.status(200).json({ message: 'success' });
    });
});
export default router;
