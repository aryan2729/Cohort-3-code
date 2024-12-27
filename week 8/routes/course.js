const { Router } = require("express");        //🔥 This is using to keep all routers in structure way and separate   | except doing const express = require("express ")  then cosnt Router = express.Router; we do const { Router } = requrie("express"); it's in one line 

const courseRouter = Router();     


courseRouter.post("purchase",function(req,res){            // use courseRouter except app 

    res.json({
        message : "Signup endpoint "
    })

})

courseRouter.get("/preview",function(req,res){

    res.json({
        message : "Signup endpoint "
    })

})


module.exports = {                          // exporting 🔥
    courseRouter : courseRouter 
}