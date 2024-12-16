const { time, log } = require("console");
const express = require("express");

const app = express();


// function middleWare()   we also can define first middleware func then below app.use(middleWare); like this or direct app.use(function(req,res,next){}) middleware create 


// Assignment - need to logs the method , host , url and timestamps 
function loggerMiddleWare(req , res , next){                             // Defined the middleware 

    console.log("Method is "+ req.method) ;
    console.log("Url is "+ req.url);
    console.log("Host is " + req.host);
    console.log(new Date());

    next();                             // don't forgot to call the next() function if u don't then below routes will not work 
}


app.use(loggerMiddleWare);            // used the middleware | and middleWare only run for below points | cuz above u only defined it. 


app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});



app.listen(3000);

