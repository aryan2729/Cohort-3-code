// (Records)
//Record let’s you give a cleaner type to objects

interface User6 {
    name: string ;
    age:number;
}

// Record<key,value> 
type User6Type = Record<string, User6 > ;  // Records help you to make objects in easy format 

const user6 : User6Type = {
    'abcid': {name: "aryan" , age:20  },            // key : value 
    'debid' : { name : "aryan " , age: 23}
}


console.log(user6["abcid"]);





// (Maps) - Prefer ( cuz it has .set & .get )
//maps gives you an even fancier way to deal with objects. Very similar to maps in c++

interface User7 {
    name: string ,
    age: number
}

// Map<key, value >() 
const userMap = new Map<string , User7>();                  // similar as record 


userMap.set( "A" , {name : "aryan " , age: 25});    
userMap.set( "B" , {name : "aaru" , age: 19})


const aMap  = userMap.get("A");          

console.log(aMap);






