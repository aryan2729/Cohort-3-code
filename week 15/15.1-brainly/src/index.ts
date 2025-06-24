// we never publish the .ts files instead we publish .js & .d.ts file only 
// full procedure -> npm init -y , npm install -d typescript , npx tsc --init , npm install express , npm install -D @types/express , npm install mongoose , npm install jsonwebtoken , npm install -D @types/jsonwebtoken
import express from "express";
import jwt from "jsonwebtoken";
import z, { string } from "zod";
import { ContentModel, LinkModel, UserModel } from "./db";
import {JWT_SECRET } from "./config";
import { userMiddleware } from "./middleware";
import { random } from "./utils";
import cors from "cors";


const app = express();

app.use(express.json());        // always add | Middleware to parse JSON request bodies.
app.use(cors());

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
        type ,
        link , 
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

app.post("/api/v1/brain/share", userMiddleware , async (req , res) => {       // for doing share thing userMiddlewre check pass etc 

    const share = req.body.share;

    
    if(share){
        //first check if already link existed then don't need to create new one 
        const exsistingLink = await LinkModel.findOne({
            //@ts-ignore
            userId : req.userId
        });
        
        if(exsistingLink){

            res.json({
                hash : exsistingLink.hash
            })
            return ;
        }
        
        //otherwise create new link
        const hash = random(8);
        console.log("Generated hash:", hash); // Add this line
        await LinkModel.create({
            //@ts-ignore                        
            userId : req.userId,                     // added ts ignore cuz we're taking userId from userMIddleware 
            hash: hash 
        })

        res.json({
            hash : hash
        })

    }else{
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId,
        })
        res.json({
            message : "Removed Link"
        })
    }
    

})

app.get("/api/v1/brain/:sharelink",async (req , res) =>{     // no need to pass userMiddlware means anyone can acess this with sharelink 

    const hash = req.params.sharelink;

    const link = await LinkModel.findOne({
        hash : hash, 
    })

    if(!link){
        res.status(411).json({
            message : "Sorry incorrect input"
        })
        return ;            // exit 
    }

    //userId
    const content = await ContentModel.find({
        userId : link.userId,
    })

    const user = await UserModel.findOne({
        _id : link.userId               // always in first user that yo defined you can acess that id by only _id cuz it's in mongo | why not userId cuz in other schemas we're using userId from middleware or other schemas but this one is like parent so _id  
    })

    if(!user){
        res.status(411).json({
            message : "User not found , error should ideally not happen"
        })
        return;
    }

    res.json({                             //  return 
        username : user.username,   
        content : content 
    })

})


app.listen(3000);