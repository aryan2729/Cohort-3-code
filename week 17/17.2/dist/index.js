"use strict";
// pg -> Postgres | npm install pg @types/pg
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Relationships -> In neondb while you defining schema of addresses ->  add  FOREGIN KEY(user_id) REFERENCES users(id) DELETE ON CASCADE | so it's  add the id of user table  into addresses table like realtionship and if user deleted then address of that user also deleted (DELETE ON CASCADE)
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client(config_1.db_url);
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    //we're writing usrname , pass , email table different and address table different if admin wanna check all address so he don't need to get every user first ok etc
    try {
        const insertQuery = `INSERT INTO users(username , password , email) VALUES($1 , $2 , $3)  RETURNING id; `; //returning id cuz for address table store      | y $ approach already thought in 17.1 
        const addressInsertQuery = `INSERT INTO addresses(city , country , street , pincode , user_id) VALUES($1 , $2 , $3 , $4 , $5); `;
        //  Transactions  -> BEGIN nd COMMIT (same as payment thing user 1 payment deducted but the user 2 not added money why that's y we uses transaction either all under query runs or niether none  )
        yield pgClient.query(" BEGIN; "); //  WHy ? used BEGIN & COMMIT so if the one query goes and done but unfortunately second query won't done so username , pass ,email registerd but the address not | 
        const response = yield pgClient.query(insertQuery, [username, password, email]);
        const userId = response.rows[0].id;
        const addressInsertResponse = yield pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);
        yield pgClient.query(" COMMIT; ");
        res.json({
            message: "You have signed up "
        });
    }
    catch (e) {
        res.json({
            message: "Error while signing up"
        });
    }
}));
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id; //means write like this /metadata?id=3
    // JOIN -> bad way
    const query1 = `SElECT  username, email,id  FROM users WHERE id =$1`;
    const response1 = yield pgClient.query(query1, [id]);
    const query2 = `SELECT  * FROM addresses WHERE user_id=$1`; // * means everything 
    const response2 = yield pgClient.query(query2, [id]);
    res.json({
        user: response1.rows[0],
        addresses: response2.rows, //rows cuz it can be more than 1 address stored by user 
    });
}));
app.get("/better-metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    // JOIN -> Best way
    const querySelector = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street , addresses.pincode
        FROM users JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = $1;`; // y $1 not $(id) prevent from sql injection 
    const response = yield pgClient.query(querySelector, [id]);
    res.json({
        response: response.rows //wanted only rows not other info 
    });
}));
app.listen(3000);
