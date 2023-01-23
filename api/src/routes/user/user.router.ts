import express from "express";

import { createUser, me } from "../../controllers/user.controller";
import passport from "passport";
const router = express.Router();
router.route("/register").post(createUser);

router.get("/me", me);

router.post("/login", function (req, res, next)
{
    passport.authenticate('local', function (err, user, info)
    {

        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        console.log(user)
        console.log("information",info);
        // NEED TO CALL req.login()!!!
        req.logIn(user, (err) =>
        {
            if (err) return res.status(500).json({ message: err });
            return res.status(200).json({ message: 'success' });

        });
    })(req, res, next);
}
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
