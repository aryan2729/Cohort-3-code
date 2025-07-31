import express from "express";
import zod from "zod";
import jwt from "jsonwebtoken";

import { User } from "../db";
import { JWT_SECRET } from "../config";
import {authMiddleware} from "../middleware"


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

router.post("/signin", async (req, res) => {
   
    const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})
   
    const { success } = signinBody.safeParse(req.body)
   
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})




router.put("/", authMiddleware, async (req, res) => {

    const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

    const { success } = updateBody.safeParse(req.body)

    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})


router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


module.exports = router;


