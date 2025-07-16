 
// In nextjs, if you want to use server side rendering than 
// -> You cant use the localStorage + header approach , 
// You have to use something else 

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/app/config"
import { NextRequest , NextResponse } from "next/server";   



export async function POST(req : NextRequest) {

    // ideally we should check the username and password in the db then reutrn the jwt for it 

    const body = await req.json();      // req. data

    const username = body.username;
    const password = body.password;
    //check in db

    const userId = 1;
    const token = jwt.sign({    // created jwt 

        userId ,
    }, JWT_SECRET);

    return NextResponse.json({
        token
    })


    
}

