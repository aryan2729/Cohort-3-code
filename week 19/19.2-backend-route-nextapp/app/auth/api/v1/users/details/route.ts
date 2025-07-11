// route.ts file not .tsx and only route file  
// Backend in same app nextjs 

import { NextResponse } from "next/server";



//crud get , post , put , delete 

export  function GET(){
    
    return NextResponse.json({
        name : "Aryan",
        email : "aryan@gmail.com"
    })
}

export  function POST(){
    
    return NextResponse.json({
        name : "aryan",
        email : "aryan@gmail.com"
    })
}

export  function PUT(){
    return NextResponse.json({
        name : "aryan",
        email : "aryan@gmail.com"
    })
}

export  function DELETE(){

    return NextResponse.json({
        name : "Aryan DELETE",
        email : "aryan@gmail.com"
    })
}


/*
Notes:
When there are multiple functions in a module, the default export cannot be used. 
In such cases, we use named exports and import them like this: 
--- import { GET } from '.api/v1/user'

However, if there is only one function, we can use default export and import it like this: 
--- import GET from ".api/v1/user"
*/