import { JWT_SECRET } from "@/app/config";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";


// Bad practise using LOCALSTORAGE and JWT in NEXTjs    


export async function GET(req : NextRequest) {

    const headers = req.headers;
    const authorizatinoHeaders = headers.get("authorization");
    const decoded = jwt.verify(authorizatinoHeaders as string , JWT_SECRET );

    const userId = decoded.userId ;

    return NextResponse.json({
        avatarURl :"http:/google.com/cat.png"
    })
    
}