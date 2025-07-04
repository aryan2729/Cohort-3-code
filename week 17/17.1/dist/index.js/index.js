"use strict";
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
// pg -> Postgres | npm install pg @types/pg
const pg_1 = require("pg"); // same as import express from "express"
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client(config_1.dbURL); // it takes connection string of neondb 
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    try {
        const insertQuery = 'INSERT INTO users (username , password , email ) VALUES ($1 , $2 , $3); ';
        // don't use $(username cuz anyone can do SQL injection in it and DELETE and insert things )
        const response = yield pgClient.query(insertQuery, [username, password, email]); // it tell whatever user send add in this manner so if user try to sql inject by writing delete from users ; after password it all add in password field ;
        res.json({
            message: "You have signed up"
        });
    }
    catch (e) {
        res.json({
            message: "error while signing up"
        });
    }
}));
app.listen(3000);
