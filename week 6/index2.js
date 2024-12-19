const express = require("express");
const jwt = require("jsonwebtoken");            // using JWTS jsonWebToken library after done npm install jsonwebtoken  | 🚀 jwt.sign({what u need to enocde} , JWT_SECRET )  -> encode your data into token by using JWT_SECRET | jwt.verify(token , JWT_SECRET ) verifying and coverting into username again 
const JWT_SECRET = "randomharkirats";            // created random variable JWT_SECRET 
const app = express();

app.use(express.json());            // Always req when u use .post and wanna pass something in body (.body) 


const users = [];




console.log(users);


app.post("/signup", function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username ,                                      // pushing username & password to  users Array 
        password : password 
    })

    res.json({
        message: "You are signed up "
    })

    console.log(users);
    
})

app.post("/signin", function(req,res){

        const username = req.body.username;
        const password = req.body.password;

        const user = users.find(user => user.username == username && user.password == password);          //🚀 Arrow function also written as function user(){ if(user.usrname == username user.password == passord ){return true }}

        if(user){                                                                                         // it's means if it's true 
            const token = jwt.sign({            //🔥 we passed jwt.sign({ u want to enocde it token } , JWT_SECRET ); by using jwt secret which create token of username 
                username: username
            } , JWT_SECRET );                      // JWT_SECRET will convert username into jwt token 
            
            
            res.json({                                                                                // responding(res)        in post it's .send and in get it's .json 
                token  : token 
            })
        }
        else{
            res.status(403).send({
                Message :"Invalid Username or Password "
            })                      
        } 

        console.log(users);      
})  


app.get("/me" , function(req ,res ){                                       

    const token = req.headers.token ;                
    const decodedInfo = jwt.verify(token , JWT_SECRET );                   //🔥 It will decode token into { username : "harkirat@gmail.com" } 
    const username = decodedInfo.username;                                  // storing that decodedInfor in username varible if it's true then it's stored    
    
    const user = users.find(user => user.username == username );                                                                           //Arrow fun |  checking if user.username  is same as username if it is  then this user condition true and can be used

    if(user){

        res.json({
            username :  user.username ,
            password : user.password 
        })
    }
    else{
        res.json({        
                message : "Token invalid"
        })
    }
})




app.listen(3000);               //✅ while run this in postman first send [POST req of signup] ( body username and password ) and then send [POST req of signin] and then send [ GET req in /me in which change token no. in place of authorization in headers ]