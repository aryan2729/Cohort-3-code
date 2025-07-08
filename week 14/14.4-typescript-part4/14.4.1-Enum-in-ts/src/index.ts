// enum -> lets you define a set of named constants. It’s used to make code more readable and maintainable, especially when you have a group of related values. | enum donesn't exist in js it only in .ts
// instead writing up down mannually it helps to write it as string or numbers so you don't need to change it in all code only change in enum 

// 1) e.g. 
enum Direction {

    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

function doSomething( keyPressed : Direction ){

    if(keyPressed == Direction.Up ){
        //up code 
    }
}

console.log(Direction.Up);
console.log(Direction.Down);



// 2nd e.g.

import express  from "express";
const app = express();


enum ResponseStatus {       // we can change the codes 
    Success = 200 , 
    NotFound = 404 , 
    Error = 500
}


app.get("/check", async ( req , res ) => {

    res.status(ResponseStatus.NotFound).json({

    })

})

app.get("/re" , async ( req , res )=> {

    res.status(ResponseStatus.Success).json({
        success : "success"
    })
})


app.listen(3000);