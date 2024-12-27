// always first  npm init -y first to intialize node js  then npm install express mongoose jsonwebtoken 

const express = require("express");
const { userRouter } = require("./routes/user");               // importing 🍁🍁
const { courseRouter } = require("./routes/course");           // importing 🍁🍁
const { adminRouter } = require("./routes/admin");             // importing 🍁🍁
const mongoose = require("mongoose");

const app = express();


app.use("/api/v1/user", userRouter);                   // here using that routes { in routes folder }
app.use("/api/v1/course", courseRouter);               //🔥🔥🚀 & keep in mind -> api/v1/user/?   ? = that stored in routes like signup etc | it's means now u don't need to write user/signin etc many times just put here what you want frist then add in routes what need 
app.use("/api/v1/admin" , adminRouter);


async function main(){

    await mongoose.connect("");
    // y await cuz if database down or u write wrong password or username in url then that's y we used here await async 
};

main();         // calling that main function 





app.listen(3000);