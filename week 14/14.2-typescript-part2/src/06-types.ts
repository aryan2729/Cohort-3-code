// Types 

// In interface it could be like 
//  interface {
//     name : string , 
//     age : number 
// }


// But in types equal sign present 

type User5 = {
    name: string ,
    age : number 
}

function isLegalll( user : User5): boolean{     // taking User5 as type of user 
    return user.age>18;
}

let user8 : User5 ={
    name :"aryan",
    age : 29
}

console.log( isLegalll(user8 ));




// Intersection (&) - what if you want to create a type that has every property of multiple types / interfaces 


type Employeee = {
    name : string ,
    startDate : string 
}

type Managerrr = {
    name : string ,
    department : string 
}

type TeamLead = Employeee & Managerrr ;         // Intersection -> means both all thing should present 


let e : Employeee = {
    name : "aryan",
    startDate: "01-05-2000"
}

let m : Managerrr = {
    name : "aryan" , 
    department :"SDE"
}

let t : TeamLead = {        // should have name , startDate & department 
    name : "aryan",
    startDate:"01-05-2000",
    department:"SDE-1"
}




//Union -> (either this) or (either orther) or (either both)

type GoodUser = {
    name : string , 
    gift : string 
}

type BadUser = {
    name : string , 
    ip : string 
}


type User10 = GoodUser | BadUser ;      // either gooduser thing or either baduser things or either both things 

const user9 : User10 = {
    name:"aryan",
    gift : "ps5",
    ip : "127.0.0.1"                // in this example have both propeties 
}




// assignment -> make user & admin interface/type and then use union thing in it 

interface user11  {
    name:string ,
    age:string
}

interface admin11  {
    name: string , 
    permission : string 
}

type adminORuser = user11 | admin11 

function check( c : adminORuser  ) {
    
    console.log("welcome " + c.name );
}


// also we can write like this 
interface up {
    age: number | string 
}

