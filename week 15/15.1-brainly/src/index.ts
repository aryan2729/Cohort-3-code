// we never publish the .ts files instead we publish .js & .d.ts file only 
// full procedure -> npm init -y , npm install -d typescript , npx tsc --init , npm install express , npm install -D @types/express , npm install mongoose , npm install jsonwebtoken , npm install -D @types/jsonwebtoken
import express from "express";
import jwt from "jsonwebtoken";
import z, { string } from "zod";
import { ContentModel, UserModel } from "./db";
import { error } from "console";
import {JWT_SECRET } from "./config";
import { userMiddleware } from "./middleware";


const app = express();

app.use(express.json());        // always add | Middleware to parse JSON request bodies.



// use async await in every mongodb thing or while you use it
app.post("/api/v1/signup", async function(req , res ){                // arrow function used | or function(req,res){code }

   const requireBody = z.object({
    username : z.string().min(4,"Username must be at least 4 characters  ").max(20 ),
    password : z.string().min(4 , "Passowrd must be at least 4 characters ").max(20)

   })

   const parsedDataWithSuccess = requireBody.safeParse(req.body);           

   if(!parsedDataWithSuccess.success){
    
        res.json({
            message : "Incorrect Format",
            error : parsedDataWithSuccess.error
        })
        return ;          // return exit 
   }

    const username = req.body.username;
    const password = req.body.password;

    try {
            
        await UserModel.create({
        username:username,
        password:password
        })

        res.json({
            message:"User signed up"
        })

    } catch (error) {
        res.json({
            message: "Username already exists , kindly use different username"
        
        }) 
    }

    
})

app.post("/api/v1/signin" , async function(req , res){

    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){

        const token = jwt.sign({
            id : existingUser._id

        } , JWT_SECRET);         // here jwt secret 
        
        res.json({
            token
        })
    }
    else{
        res.status(403).json({           
            message : "Incorrect Credentials"
        })
    }
})

app.post("/api/v1/content" , userMiddleware , async function(req , res){

    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({
        title,
        link , 
        type ,
        //@ts-ignore
        userId : req.userId,
        tags: []
    })

    res.json({
        message :"Content added"
    })


})

app.get("/api/v1/content" ,userMiddleware ,async (req , res) =>{

    //@ts-ignore
    const userId = req.userId;
    
    const content = await ContentModel.find({
        
        userId : userId

    }).populate("userId","username")        // here .populate take userId of that person who created and after that select thing means whom made this content username will show | like if want to know whom created this content if we shared our content 

    res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware ,async (req, res)=>{

    const contentId = req.body.contentId;

    await ContentModel.deleteMany({              // Delete content based on contentId and userId.
        contentId,
        //@ts-ignore
        userId : req.userId
    })

    res.json({
        message :"Content deleted"
    })
    

})

app.post("api/v1/brain/share" , async (req , res) =>{

    

    

})

app.get("api/v1/brain/:sharelink",(req , res) =>{

})


app.listen(3000);