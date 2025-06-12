// npm init -y ( tsc -> typescript compiler )
// npm install typescript  then npx tsc --init then make index.ts file then write code in it and convert it into .js by npx tsc -b 
// | Every js files comes in dist folder if you've written "rootdir":./src and "outdir": ./dist in tsconfig file | and movie ts file in src folder after making | what does rootdir - tell where you need to look for .ts files and outdir - tell where should the compiler look to spit .js files 


let x: number = 7;   // in js it's let x = 7;

console.log(x);


// & if you try to write wrong code then it shows you error before preceding so user will not face any error cuz we've already got the errors and fixed it before going to production 

let y: number = 1;
// y = "aakjdkfdjkfd";   like this you can't do this it throw error  


// function greet(username: type ){ code } type-(string , number , boolean , any , object)

function greet(username:string) {
    console.log("Hello " +username);
}

greet("aryan");



function sum(a:number , b:number){
    return a+b;
}

let ans =  sum(5 , 7);
console.log(ans);



function isLegal(a:number){
    if(a>18){
        return true;
    }
    else{
        return false;
    }
}

let check = isLegal(19);
console.log(check);



// create a function that takes another function as input , and runs it after 1 second 

function delayed(fn : () => void) {
        setTimeout(fn , 1000);
}

delayed(function(){
    console.log("hello");
})



// Objects in ts
function greet2( user : { name : string ; age : number}) {  // after user: type defined for object 

    console.log("Hello " + user.name , " you are " +  user.age + " years old. ");
}

let user = {
    name: "aryan",
    age : 30
}

greet2(user);




// Interfaces in ts 

interface userType {        // interface userType 
    firstName : string ,
    lastName: string ,
    age: number, 

}

function greet4( ft : userType ){         // we need to define type 
    console.log("Hello "+ ft.firstName  );
}

// Create a user object of type UserType. 
let user2: userType = {
    firstName: "Bharat",
    lastName: "Kumar",
    age: 21,
};

greet4(user2);


// we also can write like this 
function greet3(user : {          // Create a function greet3 that takes a user of type defined and logs a greeting message.
    firstName : string , 
    lastName : string , 
    age: number
}) {
    console.log( "Hello "+ user.firstName );
}

let u = {
    firstName : "aryan",
    lastName : "ar",
    age : 30
}

console.log(greet3(u));




// Types in ts
// work same as interface but have equality sign and can use for  union and intersection 

type userType2 = {  
    name : string,
    age: number
}

function greet5( ft : userType2){
    console.log(ft.name + " " + ft.age);
}

let f = {
    name : "aryan",
    age : 30 
}

greet5(f);


// for union in type 

type sumInp = string | number ;  // union either this or this 

function sum2( a : number | string  , b : number | string ) : sumInp{   // func  type sumInp 
    
    if( typeof a === "string" || typeof b === "string"  ){
        return a.toString() + b.toString();
    }
    else{
        return a + b; // if both numbers 
    }
}

console.log(sum2(2,3));


// Intersection in type 
interface manager{
    name : string , 
    age : number
}

interface employee{
    department : string 
}

type TeamLead = manager & employee ; 

// Create a variable teamLead of type TeamLead and initialize it with an object that has the followin
let teamlead : TeamLead = {
    name : "aryan",
    age : 40 , 
    department: "SDE-2"
}

console.log(teamlead);

