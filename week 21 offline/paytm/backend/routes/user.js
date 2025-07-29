import express from "express";
import zod from "zod";
import jwt from "jsonwebtoken";

import { User } from "../db";
import { JWT_SECRET } from "../config";


const router = express.Router();





router.post("/signup", async (req , res) => {

    const requireBody = zod.object({
        username : zod.string(), 
        password : zod.string(),
        firstName : zod.string(),
        lastName : zod.string()
    })

    const {success} = requireBody.safeParse(req.body);        // { } cuz it returns object 

    if(!success){
        res.json({
            message : "Email already taken / Invalid inputs"
        })
    }

    const existingUser = await User.findOne({   // check if already username take 
        username : body.username
    })

    if(existingUser._id){
        res.json({
            message : "Email already taken/Incorrect inputs"
        })
    }

    const dbUser = await User.create({
        username : req.body.username,
        password : req.body.password , 
        firstName : req.body.firstName , 
        lastName : req.body.lastName
    })


    const token = jwt.sign({

        userId : dbUser._id
    }, JWT_SECRET);


    res.json({
        message : "User created successfully ",
        token : token 
    })

    

})

module.exports = userRouter;



