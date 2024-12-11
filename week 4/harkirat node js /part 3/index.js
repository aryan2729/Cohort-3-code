/*🚀 req - all things related to the request
 and res - response like what to send 

Creating an HTTP server 
express - u've to downloade this by npm install express after npm init -y
node default library is fs 

*/

const express = require("express");

const app = express();

function sum(n){
    let ans = 0;
    for (let i =1 ; i<=n; i++){
        ans = ans +i;
    }
    return ans; 
}

app.get("/", function(req , res){        //M/I    | req - requesting and res - responding 
    
    const n = req.query.n;                 // here we request.query.n means n value so localhost:3000/?n=5 this will work 
    const ans = sum(n);
    res.send("Hi your ans is "+ans);
})


app.listen(3000);





//GET - Going for a consultation to get a check up
// POST - Going to get a new kidney inserted
// PUT - Going to get a kidney replaced
// DELETE - Going to get a kidney removed