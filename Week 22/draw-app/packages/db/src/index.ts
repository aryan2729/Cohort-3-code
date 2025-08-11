// 1st -> pnpm install prisma 2nd -> npx prisma init -> 3rd after the env url key -> npx prisma migrate dev --name init_schema
// you need to run everytime you change the prisma file -> npx prisma migrate dev --name photo_optional & after that we need to npx prisma generate

import { PrismaClient } from "@prisma/client";


export const prismaClient = new PrismaClient(); 
// don't need to define individual on http and ws backend 