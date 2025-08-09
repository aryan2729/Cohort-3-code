import express from "express";      // pnpm add express @types/express
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {CreateUserSchema , SigninSchema , RoomSchema} from "@repo/common/types"

const app = express();


app.post("/signup" , ( req , res)=>{

    const data = CreateUserSchema.safeParse(req.body);

    if(!data.success){
        res.json({
            message : "Incorrect inputs"
        })
        return ;
    }

    // db calls
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