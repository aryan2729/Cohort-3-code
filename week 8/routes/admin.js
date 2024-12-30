const { Router } = require("express");                  //🔥🔥 This is using to keep all routers in structure way and separate  | except doing const express = require("express ")  then cosnt Router = express.Router; we do const { Router } = requrie("express"); it's in one line 
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");                //🍁 importing db file here so you can use adminModel to add data in it 
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const { JWT_SECRET_ADMIN } = require("../config");          // importing jwt_secret from config file | // should be different then user cuz if same then it's problem
const { adminMiddleWare } = require("../middleware/admin");
const course = require("./course");



adminRouter.post("/signup",async function(req,res){                // use adminRouter except app 


    const requireBody =  z.object({
        email : z.string().min(5).max(100).email(),
        password : z.string().min(5).max(100),
        firstName : z.string().min(5).max(100),
        lastName : z.string().min(5).max(100)
    })   

    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        
        res.json({
            message : "Incorrect format",
            error : parsedDataWithSuccess.error 
        }) 
        return              // exit current function 
    }
    
    const { email , password , firstName , lastName } = req.body;        //🍁 all four at once  | instead of single req.body.email etc pass this 
    
    let forNoterror = false ;
    try {                                                                           // try catch used cuz if u've added already registered email then it through message and don't turned off server 
    const hashedPassword = await bcrypt.hash(password , 5);                             //🍁 hashed password

    await adminModel.create({                                        // await and async always used in bcrypt and db where used 
        email : email , 
        password : hashedPassword , 
        firstName : firstName , 
        lastName : lastName
    })
    } catch (e){
        res.json({
            message : "Email already used"
        })
        forNoterror = true;
    }

    if(!forNoterror){           // means false
        res.json({
            message :"Signed up "
        })    
    }

})

adminRouter.post("/signin", async function(req,res){

    const { email , password } = req.body;

    // This password is matched with the hashed password in db 
    const response = await adminModel.findOne({     // always used findOne
        email : email
    });

    if(!response){
        res.status(403).json({
            message : "Incorrect credentials"
        })
        return
    }

    const passwordMatch = await bcrypt.compare(password , response.password);        //🍁 await cuz db used |  comparing our password is same as db hashedPassword  if it is then user variable 

    if(passwordMatch){
        const token = jwt.sign({
            id : passwordMatch._id                      // cuz in db id stored in _id 
        }, JWT_SECRET_ADMIN);

        // Do cookie logic (for future )
        res.json({
            token : token 
        })
    }else{
        res.status(403).json({
            message :"Incorrect credentials"
        })
    }

})

adminRouter.post("/course", adminMiddleWare , async function(req,res){                 // y we not add anything here cuz we've already fixed prefix in index.js which is api/v1/course for this adminRouter

    const adminId = req.userId;                                           // req.userId stored in middlware of admin 

    const { title , description , imageUrl , price } = req.body;

    const course =  await courseModel.create({
        title : title , 
        description : description , 
        imageUrl :imageUrl , 
        price : price , 
        creatorId : adminId
    })

    res.json({
        message :"course created",
        courseId : course._id              // it's objectId that's store in db 
    })


})

adminRouter.put("/course", adminMiddleWare , async function(req,res){                 // add or change courses put route 

    const adminId = req.userId;

    const { title , description , price , imageUrl , courseId} = req.body ;
    
    const course = await courseModel.updateOne({             //🍁🍁 updateOne -> takes 2 things the first on for {} filter(check id of admin matching and courseId also ) if it is then at second {} we want to add what we want to update 
        _id : courseId ,                                                     // first filter is it verify 
        creatorId :adminId         
    } , {
        title : title,                                                      // then change 
        description : description , 
        imageUrl : imageUrl , 
        price : price 
    })

    res.json({
        message : "course updated",
        courseId : course.id
    })

})

adminRouter.get("/course/bulk", adminMiddleWare , async function(req , res){

    const adminId = req.userId ;

    const course = await courseModel.find({         // cuz it's find all things in data so after some time we can print that data by res
        creatorId : adminId
    })

    res.json({
        message :"Course updated ",
        course                              // it prints the course if creatorId match with adminId
    })
   
})


module.exports ={
    adminRouter : adminRouter
}