// first npm init -y then npm install express   | backend code this file

const express = require("express");
const cors = require("cors");          //🚀 adding cors library 

const app = express();




app.use(express.json());    // M.I. for read json data that comes from .post etc 
app.use(cors());              //🚀 if wanna use ( cors )to work backend on different server and appling on differen front end server 



app.post("/sum", function( req , res){

    const a = parseInt( req.body.a);
    const b = parseInt( req.body.b);

    res.json({
        ans : a + b
    })
})

app.listen(3000);