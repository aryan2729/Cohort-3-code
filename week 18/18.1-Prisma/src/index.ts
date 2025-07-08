// npm install prisma and then npx prisma init 

// you only need to write your code in schema.prisma don't need to write anything in migrations foldr 
// after you write code in schema.prisam then -> npx prisma migrate dev  and give name of migration 
// and if you wanna add something , you can add it in that file and again run npx prisma migrate dev 
// after you run command it automatically create that model in you neon postgresSql in table 
// Don't change migration, just remained as it is otherwise it'll create very big problem 

// Client make simpler your code like you write like mongodb thing in code .find etc but if under the hood it's convert it into sql query 
// Prisma (automatically generates functions)-> (like create, findMany, update, delete) and TypeScript types for every model you define in your schema.prisma. This lets you interact with your database easily and safely — with full auto-complete and error checking in your code editor.



// 1st command you always run -> npx prisma migrate dev 
// 2nd command you always run for client -> npx prisma generate 

import { PrismaClient } from "@prisma/client";          //same as import mongoose from mongoose | first install npx prisma generate 
import express  from "express";

const client = new PrismaClient();
const app = express();



app.get("/users" , async (req , res )=>{

    const users = await client.user.findMany();         // findMany it finds all users in table 

    res.json({
        users
    })
})


app.get("/todo/:id",async ( req , res ) => {        // y :id ->  send like this http://localhost:3000/todo/1           (don't need to do ?id=1)

    const id = req.params.id;

    const user = await client.user.findFirst({

        where : {
            id : parseInt(id)
        },

        select : {
            todos : true,        // means also get todos        
            username: true
        }
    })

    res.json({
        user
    })
})


app.listen(3000);




// async function createUser(){

//     const user = await client.user.findFirst({                    // it's same as client.query("INSERT INTO user(username , age etc ) VALUES("Aryan", 20 , etc)")
    
//         where : {
//             id: 1
//         },
//         include : {
//             todos : true            // means it find todos too 
//         }
//     })

//     console.log(user);              


// }

// createUser();