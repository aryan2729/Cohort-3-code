const express = require("express");
const bodyParser = require("body-parser");   
const app = express();


// In express ,if u want to send JSON data.
// you need to first parse the json data .

app.use(express.json());                 //🔥 M.I. if u wanna send json data  | first parse json data


app.post("/sum" , function(req,res){
    console.log(req.body);
    const a = parseInt( req.body.a);
    const b = parseInt( req.body.b);

    res.json({
        ans : a + b 
    })
})


app.listen(3000);