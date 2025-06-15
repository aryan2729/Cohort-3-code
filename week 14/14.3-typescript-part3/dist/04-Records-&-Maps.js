"use strict";
// (Records)
//Record let’s you give a cleaner type to objects
const user6 = {
    'abcid': { name: "aryan", age: 20 }, // key : value 
    'debid': { name: "aryan ", age: 23 }
};
console.log(user6["abcid"]);
// Map<key, value >() 
const userMap = new Map(); // similar as record 
userMap.set("A", { name: "aryan ", age: 25 });
userMap.set("B", { name: "aaru", age: 19 });
const aMap = userMap.get("A");
console.log(aMap);
