interface People {
    name:string ,
    age : number , 
    greet : () => string        // greet is a arrow function that returns string and doesn't take any argument | also can use gree(): string 
}

let person : People = {
    name : "aryan",
    age : 20 ,
    greet : () => {         // writing in arrow function 
        return "hi ";
    }
}


let greeting1 = person.greet();

console.log(greeting1);

