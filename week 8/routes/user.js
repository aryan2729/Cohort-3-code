const { error } = require("console");
const { Router } = require("express");          //🔥 This is using to keep all routers in structure way and separate | except doing const express = require("express ")  then cosnt Router = express.Router; we do const { Router } = requrie("express"); it's in one line  
const { z } = require("zod");
const bcrypt = require("bcrypt");
const { userModel, courseModel } = require("../db");         //imported
const jwt = require("jsonwebtoken");
const { JWT_SECRET_USER } = require("../config");   // imported jwt_secret from config file 
const userRouter = Router();
const { userMiddleWare } = require("../middleware/user");       // imported usermiddleware

const { purchaseModel } = require("../db");

userRouter.post("/signup", async function(req,res){                // use userRouter except app 

    const requireBody =  z.object({
        email : z.string().min(5).max(100).email(),
        password : z.string().min(5).max(100),
        firstName : z.string().min(5).max(100),
        lastName : z.string().min(5).max(100)
    });

    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        
        res.json({
            message : "Incorrect format",
            error : parsedDataWithSuccess.error 
        });
        return              // exit current function 
    }
    
    const { email , password , firstName , lastName } = req.body;        //🍁 all four at once  | instead of single req.body.email etc pass this 
    
    let forNoterror = false ;
    try {                                                                           // try catch used cuz if u've added already registered email then it through message and don't turned off server 
    const hashedPassword = await bcrypt.hash(password , 4);                             //🍁 hashed password

    await userModel.create({                                        // await and async always used in bcrypt and db where used 
        email : email , 
        password : hashedPassword , 
        firstName : firstName , 
        lastName : lastName
    });
    } catch (e){
        res.json({
            message : "Email already used"
        })
        forNoterror = true;
    }

    if(!forNoterror){           // means false
        res.json({
            message :"Signed up "
        });   
    }
    });

userRouter.post("/signin",  async function(req,res){

    const { email , password } = req.body;

    // This password is matched with the hashed password in db 
    const response = await userModel.findOne({     // always used findOne
        email : email 
    });

    if(!response){
        res.status(403).json({
            message : "Incorrect credentials"
        });
        return
    }

    const passwordMatch = await bcrypt.compare(password , response.password);        //🍁 await cuz db used |  comparing our password is same as db hashedPassword  if it is then user variable 

    if(passwordMatch){
        const token = jwt.sign({
            id : passwordMatch._id                      // cuz in db id stored in _id 
        }, JWT_SECRET_USER);

        // Do cookie logic (for future )
        res.json({
            token : token 
        })
    }else{
        res.status(403).json({
            message :"Incorrect credentials"
        });
    }
    });

userRouter.get("/purchases", userMiddleWare , async function(req,res){

    const userId = req.userId ;
    
    const purchases = await purchaseModel.find({        // 🍁if you wanna find all things of this userId like purchases etc then use find 
        userId 
    });

    let purchasedCourseId =[];

    for(let i = 0; i<purchases.length; i++){
        purchasedCourseId.push(purchases[i].courseId);
    }
    
    const courseData = await courseModel.find({
        _id: {$in: purchasedCourseId}
    })

    res.json({
        purchases,
        courseData
    })

    
});

module.exports = {                                 //🚀 exporting 
    userRouter : userRouter 
};