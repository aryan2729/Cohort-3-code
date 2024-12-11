// 1. Variables
let firstname = "John";//🚀 let  -> Variable that can be reassigned 
const age = 30;        //🚀 const-> Constant variable that cannot be reassigned   | depriceated -> don't use this 
var isStudent = true;  //🚀 var  -> Older way to declare variables, function-scoped

console.log(firstname);  //🔥 console.log(variable) used to print anyting 
console.log(age);
console.log(isStudent);

isStudent= "Harkirat"; // we can change any variable to any other (imp)
console.log(isStudent);

// we can't change the const variable . 


// 2. Data Types
let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array


// 3. Operators
let sum = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator


// 4. Functions 🔥
function greet(name){
    return "Hello, " + name;
}
let ans1 = greet("aryan");
let ans2 = greet("Harkirat");
console.log(ans1 , ans2);

function sumTwo(a , b){
    totalsum = a+b;
    return totalsum ;
}
let anssum = sumTwo(1,4);
console.log(anssum);

// Assignment #1
function sumtwostring(a,b){
    sumtwostring= a + b;
    return sumtwostring;
}
let arrya = sumtwostring("Aryan","Harkirat");
console.log(arrya);

// Assignment #2
function canVote(age1){
    if (age1>18){
        return true;
    }
    else{
        return false;
    }
}
let vote = canVote(19);
console.log(vote);

// 5.If/else
// on 4. point 


// 6. Loops 🔥

// (i)For loop
// for (initalize ; condition ; incrementation){}

let users = [ "Aryan","Harkirat","Harry"];
for (let i = 0; i<(users.length); i++){
    console.log(users[i]);
}

// (ii) While loop
let j = 0;
while (j<5){
    console.log(j);
    j++;
}

// 7. Object -> An object in JavaScript is a collection of key-value pairs, where each key is a string and each value can be any valid JavaScript data type, including another object. Object is same as maps in C++...
// let user ={
//      key : value }

let user ={
    Name : "Aryan" ,
    AgE : 18 ,
    gender : "Male"
}
console.log(user.Name);

// Assignment #1
function greetuser(user){
    console.log("Hello " + user.Name + " Your age is "+ user.AgE);
}
greetuser(user);


// 8. Array of Objects 

let arr = ["Harkirat" , 21 ,{
    name :"Harkirat" , 
    age : 21,
    cities : ["Delhi" , "Chandigarh"]
}]

console.log(arr[2].cities);


// 9. Object of Object 

let objectttt = {
    Namee : "Arryan" , 
    agee : 19 , 
    gender : {
        gen1 : "Male" , 
        gen2 : "female" 
    }
}
console.log(objectttt.gender.gen1);  // use . like this to show values








