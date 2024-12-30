const { Router } = require("express");        //🔥 This is using to keep all routers in structure way and separate   | except doing const express = require("express ")  then cosnt Router = express.Router; we do const { Router } = requrie("express"); it's in one line 
const courseRouter = Router();     

const { purchaseModel , courseModel } = require("../db");
const { userMiddleWare } = require("../middleware/user");


courseRouter.post("/purchase", userMiddleWare , async function(req,res){            // use courseRouter except app 

    const userId = req.userId;
    const courseId = req.body.courseId;


    // Try to create a new purchase entry in the database with the provided courseId and userId
    await purchaseModel.create({
        courseId: courseId,                          // The ID of the course being purchased
        userId: userId,                              // The ID of the user making the purchase
    });

    res.status(201).json({
        message: "You have successfully bought the course"
    });

})

courseRouter.get("/preview", async function(req,res){     // // no authentication req here cuz we wanna show clients that this courses present that u can buy  

    const courses = await courseModel.find({});         // it shows all courses 

    res.json({
        courses
    })
})


module.exports = {                          // exporting 🔥
    courseRouter : courseRouter 
}