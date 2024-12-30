// always first  npm init -y first to intialize node js  then npm install express mongoose jsonwebtoken 
require('dotenv').config()      //🍁🍁 for use .env things you just need to pass first process.env.___now whatever variable u stored in .env file name 

const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");               // importing 🍁🍁
const { courseRouter } = require("./routes/course");           // importing 🍁🍁
const { adminRouter } = require("./routes/admin");             // importing 🍁🍁
const { config } = require('process');


const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);                   // here using that routes { in routes folder }
app.use("/api/v1/course", courseRouter);               //🔥🔥🚀 & keep in mind -> api/v1/user/?   ? = that stored in routes like signup etc | it's means now u don't need to write user/signin etc many times just put here what you want frist then add in routes what need 
app.use("/api/v1/admin" , adminRouter);


async function main(){

    await mongoose.connect(process.env.MONGO_URL);
    
     // y await cuz if database down or u write wrong password or username in url then that's y we used here await async 
};

main();         // calling that main function 


//🔥 always add jwt_secrets and mongos url etc in .env file and also write this file name in .gitignore file | for use from .env file first install npm install dotenv and put this at top of file in index.js 



app.listen(3000);