// npm init -y then npm install express mongoose (library's)

const { z } = require("zod");           // 🍁 for making restriction on email , name and pass so user cannot send anything else except username or limit characters etc 
const bcrypt = require("bcrypt");       //🍁 used for hashing your password in salty way so if your passwords got leaked then the stoler will not find the real password 
const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asfjkjdkjrji3";

const { UserModel , TodoModel } = require("./db");          //🚀 importing 
const  mongoose  = require("mongoose");                     // making varible of mongoose so we can use it for connect with atabse 

mongoose.connect(""); //🔥🔥 M.I. need to connect with mongodb compass dataserver if you don't then it won't store user info or any data  | and also need to add after connect key /todo-harkirat where u want to store your data 

const app = express();
app.use(express.json());                                    // async used for function and await for mongoDb anything wanna do and for bcrypt anything wanna do



function auth(req, res ,next){                           // 🔥auth middlware which verify token and used in /todo and /todos 
    const token = req.headers.token ;

    const decodedData = jwt.verify(token , JWT_SECRET);

    if(decodedData){

        req.userId= decodedData.id;                     // req.userId = decodedData.id which is same token 
        next();
    }
    else {
        res.status(403).json({
            message :"Incorrect credentials"
        })
    }
};


app.post("/signup", async function(req , res){    
    
    const requireBody = z.object({                          //🍁🍁 zod will check if email is string , email format , limit of length etc 
        email : z.string().min(4).max(100).email() ,
        name : z.string().min(3).max(100) , 
        password : z.string().min(5).max(100)
    })

    const parsedDataWithSuccess = requireBody.safeParse(req.body) ;      // 🍁🍁 it's means safeParse ( req.body ) this help you for further with function .success 

    if(!parsedDataWithSuccess.success){                                                 // means if  .success we got error then this will work 
        
        res.json({
            message :"Incorrect format"  ,
            error : parsedDataWithSuccess.error                             // 🍁🍁 this will through error and tell what you need to do to make password correct way like missing of @ etc 
        })                      
        return                                                                                // exit the current function 
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;


    let errorThrow = false ; 
    try {                                                           // try catch -> if  try give error then catch will execute otherwise not 
    const hashedPassword = await bcrypt.hash(password , 5);         //🍁🍁 hash the password 5 times so it's hard to decrypt | 🍁bcrypt is also give promise so use await in it             

    await UserModel.create({                   //🔥🔥 All mongodb should be in (await) for that use async function | -> cuz if email same then no signup possible so it's first check is it unique email or not in database server | cuz it;s returns a promise 
        email : email ,                                 // in acc. to Schema same 
        password : hashedPassword ,                 // here adding that hash password 
        name : name 
    });

    }catch(e){
        res.json({
            message: "Already user existed in data"
            
        })
        errorThrow = true ;
    }

    if(!errorThrow){    // false                    // cuz two res.json not work in one route remember that's y if above res. work then errorthrouw will be true so this will not run 
        res.json({
        message: "You are signed up"
            })
        }
});

app.post("/signin", async function(req , res){

    const email = req.body.email;
    const password = req.body.password;
                                                            
    const response = await UserModel.findOne({                        //🚀 checking in the database is it same email and pass user entered before for sign up 
        email : email                                              // await used cuz mongodb used cuz it returns promise and if await needed then function should be async 
    });

    if(!response){
        res.status(403).json({
            message :"User does not exist in our data"
        })
        return                                                                           // return will exit the  current function
    }

    const passwordMatch = await bcrypt.compare(password, response.password ); //🍁🍁  bcrypt.compare -> compare normal password and our hased pass automatically |  response.password means password that stored in db 

    if(passwordMatch){                                                              // if password matched then we generate token 
        const token = jwt.sign({
            id: response._id.toString()              // cuz _id in mongodb compass in objectId so we need to convert it into string
        }, JWT_SECRET);

        res.json({
            token : token 
        })
    }

    
    else{
        res.status(403).json({
            message :" Unauthorized"
        })
    }

});

app.post("/todo", auth , async function(req , res){            //🚀 passing auth middleWare which verify token and then tell 
    
        const userId = req.userId                   // req.userId associated with middlware in which writing the id of user 
        const title = req.body.title;
        const done = req.body.done;

        await TodoModel.create({                                // async and await everytime mongodb used 
            userId , 
            title , 
            done 
        });

        res.json({
            message :"Todo created "
        });
});



app.get("/todos", auth , async function(req , res){           //🚀 passing auth middleWare which verify token and then tell 
        const userId = req.userId;
        
        const todos = await TodoModel.findOne({
            userId 
        })

        res.json({
            todos 
        })
});


// app.post("/" , auth , function ())  ---> here auth is middlware which we created for post todo and get todos 

app.listen(3000);
