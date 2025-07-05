// pg -> Postgres | npm install pg @types/pg

// Relationships -> In neondb while you defining schema of addresses ->  add  FOREGIN KEY(user_id) REFERENCES users(id) DELETE ON CASCADE | so it's  add the id of user table  into addresses table like realtionship and if user deleted then address of that user also deleted (DELETE ON CASCADE)
import { Client } from "pg";
import express from "express";
import { db_url } from "./config";


const app = express();
app.use(express.json());


const pgClient = new Client( db_url );

pgClient.connect();



app.post("/signup" , async (req , res)=> {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;


    //we're writing usrname , pass , email table different and address table different if admin wanna check all address so he don't need to get every user first ok etc
    try{

        const insertQuery = `INSERT INTO users(username , password , email) VALUES($1 , $2 , $3)  RETURNING id; `;  //returning id cuz for address table store      | y $ approach already thought in 17.1 
        const addressInsertQuery = `INSERT INTO addresses(city , country , street , pincode , user_id) VALUES($1 , $2 , $3 , $4 , $5); `;      

        //  Transactions  -> BEGIN nd COMMIT (same as payment thing user 1 payment deducted but the user 2 not added money why that's y we uses transaction either all under query runs or niether none  )
        
        await pgClient.query(" BEGIN; "); //  WHy ? used BEGIN & COMMIT so if the one query goes and done but unfortunately second query won't done so username , pass ,email registerd but the address not | 

        const response = await pgClient.query(insertQuery , [username , password , email]);
        const userId = response.rows[0].id;
        const addressInsertResponse = await pgClient.query(addressInsertQuery , [city , country , street , pincode , userId] );

        await pgClient.query(" COMMIT; ");


        res.json({
            message : "You have signed up "
        })


    }catch(e){

        res.json({
            message : "Error while signing up"
        })
    }
})

app.listen(3000);