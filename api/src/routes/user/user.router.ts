import express from "express";

import { createUser, me } from "../../controllers/user.controller";
import passport from "passport";
const router = express.Router();
router.route("/register").post(createUser);

router.get("/me", me);

router.post("/login", (req, res) =>
{
    if (!req.body.username || !req.body.password)
    {
        return res.status(400).json({ message: 'Please fill out all fields' });
    }
    passport.authenticate('local',  function (err, user, info)
    {
        if (err) { return res.status(500).json({ message: err }); }
        else
        {
            console.log("user in passport",user);
            if (!user) {
                console.log("there isn't a user but here's some info:", info)
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            req.logIn(user,  function (err){ 
                if (err) { return res.status(500).json({ message: err }); }
                else
                {
                    console.log("user in passport",user);
                    return res.status(200).json({message:'success'});
                }
            })
        }
    })(req, res);
})
router.post("/logout", function(req,res, next){
    req.logout(function(err){
        if(err) return next(err);

        res.status(200).json({message:'success'});
    });
})
export default router;
