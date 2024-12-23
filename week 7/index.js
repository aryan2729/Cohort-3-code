// npm init -y then npm install express mongoose (library's)

const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asfjkjdkjrji3";

const { UserModel , TodoModel } = require("./db");          //🚀 importing 
const  mongoose  = require("mongoose");                     // making varible of mongoose so we can use it for connect with atabse 

mongoose.connect("mongodb+srv://aryancyber282h:xzpGeOPurEEFSXRi@cluster0.dx1c5.mongodb.net/todo-harkirat1111");           //🔥🔥 M.I. need to connect with mongodb compass dataserver if you don't then it won't store user info or any data  | and also need to add after connect key /todo-harkirat where u want to store your data 

const app = express();
app.use(express.json());



function auth(req, res ,next){                  // 🔥auth middlware which verify token and used in /todo and /todos 
    const token = req.headers.token ;

    const decodedData = jwt.verify(token , JWT_SECRET);

    if(decodedData){

        req.userId= decodedData.id;                 // req.userId = decodedData.id which is same token 
        next();
    }
    else {
        res.status(403).json({
            message :"Incorrect credentials"
        })
    }
};

app.post("/signup", async function(req , res){       

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({                //🔥🔥 All mongodb should be in (await) for that use async function | -> cuz if email same then no signup possible so it's first check is it unique email or not in database server | cuz it;s returns a promise 
        email : email ,                                 // in acc. to Schema same 
        password : password,
        name : name 
    });

    res.json({
        message: "You are signed up"
    })

});

app.post("/signin", async function(req , res){

    const email = req.body.email;
    const password = req.body.password;
                                                            
    const user = await UserModel.findOne({                        //🚀 checking in the database is it same email and pass user entered before for sign up 
        email : email ,                                             // await used cuz mongodb used cuz it returns promise and if await needed then function should be async 
        password : password
    });

    if(user){
        const token = jwt.sign({
            id: user._id.toString()               // cuz _id in mongodb compass in objectId so we need to convert it into string
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


// app.post("/" , auth , function ())           -> here auth is middlware which we created for post todo and get todos 

app.listen(3000);