// (ReadOnly)
// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

// we know if we have an object 
const obj = {
    id: 1 ,
    pass: "mop"
}

// we can change this obj internal things 

obj.id= 4;
// how to stop this 




type User4 = {
    readonly name : string , 
    readonly age : number 
}

const UseUser4 : User4 = {
    name: "aryan",
    age:20
}

// UseUser4.age = 30;  // can't change this ( throw error )


// another way for readonly thing 

type User5 = {
    name: string ;
    age: number ;
}

type upi = Readonly<User5 > ;         // works same as we did in above codes | hover over ReadUser5Only 

// User5.age=string ; // throw error cann't change 

const fun = (et : upi ) =>{
    console.log(et.age);
}



// Another example 
interface Config {
    endPoint : string ;
    apiKey : string ;
}

const ConfigUse : Readonly<Config>  = {
    endPoint:"https://api.example.com",
    apiKey:'abcdef12'
}

// ConfigUse.apiKey = 'dddkfd';  // throw error cuz we've defined Readonly | cann't change it 


