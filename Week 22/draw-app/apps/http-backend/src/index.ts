// In packages folder -> backend-commom , common etc are things that we need on two places like http-backend and ws-backend so we added here and export , json etc 
import express from "express";      // pnpm add express @types/express
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {CreateUserSchema , SigninSchema , RoomSchema} from "@repo/common/types"
import { prismaClient } from "@repo/db/client";

const app = express();


app.post("/signup" , ( req , res)=>{

    const parsedData = CreateUserSchema.safeParse(req.body);

    if(!parsedData.success){
        res.json({
            message : "Incorrect inputs"
        })
        return ;
    }


    //db calls 
    prismaClient.user.create({
        data : {
            email : parsedData.data?.username,
            password : parsedData.data.password,
            name : parsedData.data.name
        }
    })



    res.json({
        userId : 123,
    })



})

app.post("/signin", ( req , res)=> {

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET as string)

    res.json({
        token 
    })

})


app.post("/room" ,  middleware ,( req , res) => {

    res.json({
        roomId : 123
    })
})


app.listen(3001);