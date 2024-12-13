const express = require("express"); 
const app = express();


function isOldEnoughMiddleware(req , res , next ){              // M.I.🔥 Middleware - it takes 3 things request , respond , next 

    const age = req.query.age ;
    if (age >= 14){
            next();                                             // It's means go to next middleware or agree to respond 
    }
    else{
        res.json({
            msg : "Sorry you're not that age yet"                // This will show when age is < 14 and work in ride2 and ride1 both
        })
    }
}

app.use(isOldEnoughMiddleware);                                 // M.I.🔥 (don't forgot to write this before any app.get , app.post etc )  | 🔥 if u don't write this then middleware don't work | this is global middleware used for all below routes 
                                                                
app.get("/ride2" , function ( req , res){

        res.json({
            msg : "You have successfully riden the ride 2 "
        })
})

// app.use(isOldEnoughMiddleware);                              ❌don't write after any app.get etc cuz if u did then for like above /ride2 middleware don't work 

app.get("/ride1" , function ( req , res ){

        res.json({
            msg : "You have successfully riden the ride 1"
        })
}) 

// do cohort 2 middlewares assignment in this part 4 week 3 middleware folder check it's good 

app.listen(3000);