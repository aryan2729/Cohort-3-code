const express = require("express");

const app = express();
app.use(express.json());            // Always req when u use .post and wanna pass something in body (.body) 


const users = [];

function generateToken() {          // Don't worry it just to create random TOKEN 
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

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

        if(user){                                                                                     // it's means if it's true 
            const token = generateToken();
            user.token = token;
            
            res.send({                                                                                // responding(res)        in post it's .send and in get it's .json 
                token 
            })
        }
        else{
            res.status(403).send({
                Message :"Invalid Username or Password "
            })                      
        } 

        console.log(users);      
})  


app.get("/me" , function(req ,res ){                                        //🚀 look - > when we signup in any site then it give user token and when u try to login site check is it same token so for site checking it same token we used .get here for that thing 

    const token = req.headers.token ;             //🚀 In Headers add in key add token in value add token number 

    const user = users.find(user => user.token == token)                    //Arrow fun |  checking if user.token is same as token then this user condition true and can be used

    if(user){

        res.json({
            username :  user.username ,
            password  : user.password
        })
    }
    else{
        res.json({        
                message : "Token invalid"
        })
    }
})




app.listen(3000);               //✅ while run this in postman first send [POST req of signup] ( body username and password ) and then send [POST req of signin] and then send [ GET req in /me in which change token no. in place of authorization in headers ]