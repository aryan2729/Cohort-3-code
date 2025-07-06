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


app.get("/metadata", async (req , res )=> {

    const id = req.query.id;    //means write like this /metadata?id=3

    // JOIN -> bad way
    const query1 = `SElECT  username, email,id  FROM users WHERE id =$1`;
    const response1 = await pgClient.query(query1 , [id]);

    const query2 = `SELECT  * FROM addresses WHERE user_id=$1`;         // * means everything 
    const response2 = await pgClient.query(query2 , [id]);

    res.json({

        user :  response1.rows[0],
        addresses : response2.rows,     //rows cuz it can be more than 1 address stored by user 
    })

})

app.get("/better-metadata" , async (req , res)=> {              

    const id = req.query.id;

    // JOIN -> Best way
    const querySelector = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street , addresses.pincode
        FROM users JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = $1;`       // y $1 not $(id) prevent from sql injection 

    const response = await pgClient.query(querySelector ,[id] );


    res.json({
        response : response.rows            //wanted only rows not other info 
    })
})

app.listen(3000);

//Type of join 
// 1. INNER JOIN
// Concept: Returns only the rows where there's a match in both the users and addresses tables based on users.id = addresses.user_id.
// What it gives you: A list of users who have at least one address, paired with all their addresses. Users without any addresses will not appear in the result.

// 2. LEFT JOIN 
// Concept: Returns all rows from the users (left) table, and the matching rows from the addresses (right) table. If a user has no address, the address columns will be NULL.
// What it gives you: A list of all users, along with their addresses if they have any. Users without addresses will still be listed, but their address fields will be empty (NULL).

// 3. RIGHT JOIN 
// Concept: Returns all rows from the addresses (right) table, and the matching rows from the users (left) table. If an address has no corresponding user (which shouldn't happen with a proper foreign key, but conceptually), the user columns will be NULL.
// What it gives you: A list of all addresses, along with the user details for the user associated with that address. If there were an address not linked to any user (which implies bad data or no foreign key constraint), that address would still appear, but the user details would be NULL.

// 4. FULL JOIN (or FULL OUTER JOIN)
// Concept: Returns all rows when there is a match in either the users (left) or the addresses (right) table. If a row in one table has no match in the other, the non-matching side will have NULL values.
// What it gives you: 1) if only users not addresses then it gives users 2) if only addresses then it gives that only 3) if both present then it gives both 

