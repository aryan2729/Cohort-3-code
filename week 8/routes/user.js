const { Router } = require("express");          //🔥 This is using to keep all routers in structure way and separate | except doing const express = require("express ")  then cosnt Router = express.Router; we do const { Router } = requrie("express"); it's in one line  

const userRouter = Router();


userRouter.post("/signup",function(req,res){                // use userRouter except app 

    res.json({                                              
        message : "signup endpoint"
    })

})

userRouter.post("/signin",function(req,res){

    res.json({
        message : "signup endpoint"
    })

})

userRouter.get("/purchases",function(req,res){

    res.json({
        message : "signup endpoint"
    })

})


module.exports = {                                 //🚀 exporting 
    userRouter : userRouter 
}