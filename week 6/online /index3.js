// Building Auth Middleware 
const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "harkirat123random";

const app = express();
app.use(express.json());

const users = []; 



function auth(req, res ,next){     // middleWare
    
    const token = req.headers.token;
    const decodeData = jwt.verify(token , JWT_SECRET);          // verifying 

    if(decodeData.username){
        
        req.username = decodeData.username;
        next();                                                   // this move to another middlware 
    }
    else{

        res.json({
            message :"You are not logged in "
        })
    }

}

// localhost:3000 
app.get("/", function(req , res){
    res.sendFile(__dirname + "/index3.html");                //🚀 __dirname stores your current directory | y we're doing this to avoid the cors week 5 | and we want that our backend conncect with front end so this send file | NOW search localhost:3000 in web 
})


app.post("/signup", function(req , res){

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username ,  
        password
    })
        // we should check if a user with this username already exists 
    
        res.json({
        message : "You are signed in "
    })

})

app.post("/signin", function(req ,  res){

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username == username && user.password == password);

    if(!user){
       
        res.json({
            message : "Credentials incorrect"
        })
    }
    else{

        const token = jwt.sign({
            username : user.username
        } , JWT_SECRET);

        res.json({
            token : token
        })
    }
})

app.get("/me", auth ,  function(req , res){       // 🔥 calling auth middleWare  hereeeeeeeeeee for only one 


        let foundUser = null;

        for(let i = 0; i< users.length ; i++){                              //  u can use index2.js also for this point
            if(users[i].username === req.username){         //🔥 req.username cuz we need to parse the data from middleWare to this post request so we created req.username in middlware which parse the data from there to here 
                foundUser = users[i]
            }
        }
        
        res.json({
            username : foundUser.username , 
            password : foundUser.password
        })                                                                      //🚀so index2.js -> present authorization and else condition in this /me post but here we given that task to autho middlware 
})

app.listen(3000);

// Anyone can decode your JWT but not everyone can verify it like cheque book everyone can see it but can't verify and give u money it's only bank thing 