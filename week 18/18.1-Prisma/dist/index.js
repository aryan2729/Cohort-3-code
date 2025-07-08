"use strict";
// npm install prisma and then npx prisma init 
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
// you only need to write your code in schema.prisma don't need to write anything in migrations foldr 
// after you write code in schema.prisam then -> npx prisma migrate dev  and give name of migration 
// and if you wanna add something , you can add it in that file and again run npx prisma migrate dev 
// after you run command it automatically create that model in you neon postgresSql in table 
// Client make simpler your code like you write like mongodb thing in code .find etc but if under the hood it's convert it into sql query 
// Prisma (automatically generates functions)-> (like create, findMany, update, delete) and TypeScript types for every model you define in your schema.prisma. This lets you interact with your database easily and safely — with full auto-complete and error checking in your code editor.
// 1st command you always run -> npx prisma migrate dev 
// 2nd command you always run for client -> npx prisma generate 
const client_1 = require("@prisma/client"); //same as import mongoose from mongoose | first install npx prisma generate 
const express_1 = __importDefault(require("express"));
const client = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany(); // findMany it finds all users in table 
    res.json({
        users
    });
}));
app.get("/todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true, // means also get todos        
            username: true
        }
    });
    res.json({
        user
    });
}));
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
