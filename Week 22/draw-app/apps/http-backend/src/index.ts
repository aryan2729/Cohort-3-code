// In packages folder -> backend-commom , common etc are things that we need on two places like http-backend and ws-backend so we added here and export , json etc 
import express from "express";      // pnpm add express @types/express
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {CreateUserSchema , SigninSchema , RoomSchema} from "@repo/common/types"
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());



app.post("/signup" ,  async ( req , res)=>{

    const parsedData = CreateUserSchema.safeParse(req.body);

    if(!parsedData.success){
        res.json({
            message : "Incorrect inputs"
        })
        return ;
    }


    try {
        const user  = await prismaClient.user.create({
        data : {
            email : parsedData.data?.username,
            password : parsedData.data.password,        // you should hash your password by bycrypt first 
            name : parsedData.data.name
        }
    })

    res.json({
        userId : user.id,
    })
        
    }catch (error) {

        res.status(403).json({
            message : "User already exists with this username"
        })   
    }
    

})


app.post("/signin", async ( req , res)=> {

    const parsedData = SigninSchema.safeParse(req.body);



    if(!parsedData.success){
        res.json({
            message : "Incorrect inputs"
        })
        return;
    }


    const user = await prismaClient.user.findFirst({
        
        where : {   
            email  : parsedData.data.username ,
            password : parsedData.data.password
        }
    })



    if(!user){
        res.status(403).json({
            message : "Not authorized"
        })
        return ;
    }

    const token = jwt.sign({
        userId : user?.id 
    } , JWT_SECRET as string);


    res.json({
        token
    })

})


app.post("/room" ,  middleware , async ( req  , res) => {

    const parsedData = RoomSchema.safeParse(req.body);

    if(!parsedData.success){
        res.status(403).json({
            message : "Incorrect inputs"
        })
        return ;
    }


    try {
        //@ts-ignore
    const userId = req.userId ;

    const room = await prismaClient.room.create({
        data : {
            slug : parsedData.data.name , 
            userId : userId                     // left userId present in prisma 

        }
    })

    res.json({
        roomId : room.id
    })
        
    } catch (error) {

        res.status(411).json({
            message : "Room already exists with this name "
        })
        
    }
    
})


app.get("/chats/:roomId" , async (req , res )=> {
    const roomId = Number(req.params.roomId);
    
    const messages = await prismaClient.chat.findMany({
        where : {
            roomId : roomId
        },
        orderBy : {                         // desc order 
            roomId : "desc"
        }, 
        take : 50                           // limit 50 messages 
    })

    res.json({
        message : messages
    })
})


app.listen(3001);