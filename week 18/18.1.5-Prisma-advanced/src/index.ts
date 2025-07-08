// 1st command you always run -> npx prisma migrate dev      | migrate your prisma.schema code into postgreSql thing 
// 2nd command you always run for client -> npx prisma generate    | Generates @prisma/client code so you can use Prisma in your app

// Never change any code in migrations files , only run 1st command it automatically create this files 


// Prisma + PostgreSQL is a modern way to work with a PostgreSQL database using TypeScript/JavaScript. It combines:
// Prisma —> an ORM (Object-Relational Mapping) tool that helps you easily write and manage database queries in your code
// PostgreSQL —> a powerful, open-source relational database


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();




async function createUser( email : string  , password : string  ){

    const user = await prisma.user.create({
        data : {
            email , 
            password
        }
    })

}

createUser( "hello@gmail.com", "hello1445" );
