interface Address{          // interface 
    city: string , 
    country : string , 
    pincode : number
}

interface User {
    name : string ,
    age : number ,          // if you use address ? : it's means address is (Optional property) using "?" | not mandatory to define this address thing it won't give error now 
    address ? : Address     // interface inside interface  
}


let user : User = {              // User is type of this object defined 
    name: "aryan",
    age : 30 , 
    address: {
        city:"new delhi",
        country : "india",
        pincode: 110077
    }
}


let my : User ={
    name : "aryan",
    age : 28,           // here type User using  and as address is optional so i not have written here address 
}

function isLegal( user : User ) : boolean {
    if(user.age > 18 ){
        return true;
    }
    else {
        return false;
    }
}

let ans = isLegal(my);

if(ans){
    console.log("Legall");
}
else{
    console.log("Illegal");
}



interface graphics {
    quality : string ,
    framerates ? : number // framerates optional property not mandatory not give error if won't use in future 
}

let game : graphics = {
     quality : "1080p" 
}

function ga( game1 : graphics ):string {
    return game1.quality;
}

console.log(ga(game));

