// pg -> Postgres | npm install pg @types/pg
import {Client } from 'pg';          // same as import express from "express"
import express from "express";
import { dbURL } from './config';


const app = express();
app.use(express.json());


const pgClient = new Client(  dbURL )  // it takes connection string of neondb 



pgClient.connect();




app.post("/signup" , async (req , res) => {

    const username = req.body.username;
    const password = req.body.password ; 
    const email = req.body.email;

    try{

        const insertQuery = 'INSERT INTO users (username , password , email ) VALUES ($1 , $2 , $3); '
        // don't use $(username) , etc cuz anyone can do SQL injection in it and DELETE and insert things ) | like ... $(password) + DELTE FROM users;

        const response = await pgClient.query(insertQuery , [username, password , email]);      // it tell whatever user send add in this manner so if user try to sql inject by writing delete from users ; after password it all add in password field ;

        res.json({
            message : "You have signed up"
        })
        
    }catch(e){
        res.json({
            message : "error while signing up"
        })
    }
})


app.listen(3000);