import express from "express";

import { createUser, me } from "../../controllers/user.controller";
import passport from "passport";
import signature from 'cookie-signature'
import config from "../../config/config";
const router = express.Router();
router.route("/register").post(createUser);

router.get("/me", me);

router.post("/login", function (req, res, next)
{
    passport.authenticate('local', function (err, user, info)
    {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }

        // NEED TO CALL req.login()!!!
        req.login(user, next);
    })(req, res, next);
}, function (req, res, next){

    res.cookie('session', 's:' + signature.sign(req.sessionID, config.SESSION_SECRET)).status(200).json({ message: 'success' });
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
