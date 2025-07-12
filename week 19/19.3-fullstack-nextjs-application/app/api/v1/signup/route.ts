// route.ts for signup thing | not .tsx

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";          // manually add @primsa/client not prisma/client/extension

// NextRequest  used for req same as express thing 

const prismaClient = new PrismaClient();


export async function POST( req : NextRequest){     //async 

    const data = await req.json();      // get data that come from frontend  for signup 

    await prismaClient.user.create({      // creating in database

        data : {
            username : data.username ,
            password : data.password
        }
    })
    

    return NextResponse.json({
        message : "You have been signed up"
    })
}

