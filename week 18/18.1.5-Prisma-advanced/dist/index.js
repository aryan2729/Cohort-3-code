"use strict";
// 1st command you always run -> npx prisma migrate dev      | migrate your prisma.schema code into postgreSql thing 
// 2nd command you always run for client -> npx prisma generate    | Generates @prisma/client code so you can use Prisma in your app
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Never change any code in migrations files , only run 1st command it automatically create this files 
// Prisma + PostgreSQL is a modern way to work with a PostgreSQL database using TypeScript/JavaScript. It combines:
// Prisma —> an ORM (Object-Relational Mapping) tool that helps you easily write and manage database queries in your code
// PostgreSQL —> a powerful, open-source relational database
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                email,
                password
            }
        });
    });
}
createUser("hello@gmail.com", "hello1445");
