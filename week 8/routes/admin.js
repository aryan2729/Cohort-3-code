const { Router } = require("express");                  //🔥🔥 This is using to keep all routers in structure way and separate  | except doing const express = require("express ")  then cosnt Router = express.Router; we do const { Router } = requrie("express"); it's in one line 
const { adminModel } = require("../db");                //🍁 importing db file here so you can use adminModel to add data in it 

const adminRouter = Router();


adminRouter.post("/signup",function(req,res){                // use adminRouter except app 

    res.json({                                              
        message : "signup endpoint"
    })

})

adminRouter.post("/signin",function(req,res){

    res.json({
        message : "signup endpoint"
    })

})

adminRouter.post("/",function(req,res){                 // y we not add anything here cuz we've already fixed prefix in index.js which is api/v1/course for this adminRouter
    res.json({                                              
        message : "signup endpoint"
    })

})

adminRouter.put("/",function(req,res){                 // add or change courses put route 

    res.json({
        message : "signup endpoint"
    })

})

adminRouter.get("/bulk", function(req , res){

    res.json({
        message : "course bulk endpoint"
    })
})


module.exports = {
    adminRouter : adminRouter
}