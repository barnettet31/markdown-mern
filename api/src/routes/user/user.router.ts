import express from "express";

import { createUser, me, loginUser } from "../../controllers/user.controller";
import passport from "passport";
import config from '../../config/config';
import signature from 'cookie-signature';
const router = express.Router();
router.route("/signup").post(createUser);

router.get("/me", me);

router.post("/login", (req, res) =>
{
    if (!req.body.username || !req.body.password)
    {
        return res.status(400).json({ message: 'Please fill out all fields' });
    }

    passport.authenticate('local', function (err, user, info)
    {
        if (err) { return res.status(500).json({ message: err }); }
        else
        {
            if (!user) return res.status(401).json({ message: 'Invalid credentials' });
            req.logIn(user, function (err){ 
                if (err) { return res.status(500).json({ message: err }); }
                else
                {
                    return res.status(200).json({message:'success'});
                }
            })
        }
        console.log(info);
    })(req, res);
})
// router.post("/logout", function(req,res, next){
//     req.logout(function(err){
//         if(err) return next(err);

//         res.status(200).json({message:'success'});
//     });
// })
export default router;
