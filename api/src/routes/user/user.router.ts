import express from "express";

import { createUser, me, loginUser } from "../../controllers/user.controller";
import passport from "passport";
const router = express.Router();

router.route("/signup").post(createUser);

router.get("/me", me);

router.post("/login", (req, res)=>{
    if(!req.body.username || !req.body.password){
        return res.status(400).json({message:'Please fill out all fields'});
    }
    
    passport.authenticate('local', function(err, user, info) {
        if(err) { return res.status(500).json({message:err}); }
        else{
            if(!user) return res.status(401).json({message:'Invalid credentials'});
            res.json({message:'success', user:user})
        }
    })(req, res);
});
export default router;
