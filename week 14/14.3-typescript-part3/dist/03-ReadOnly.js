"use strict";
// (ReadOnly)
// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.
// we know if we have an object 
const obj = {
    id: 1,
    pass: "mop"
};
// we can change this obj internal things 
obj.id = 4;
const UseUser4 = {
    name: "aryan",
    age: 20
};
// User5.age=string ; // throw error cann't change 
const fun = (et) => {
    console.log(et.age);
};
const ConfigUse = {
    endPoint: "https://api.example.com",
    apiKey: 'abcdef12'
};
// ConfigUse.apiKey = 'dddkfd';  // throw error cuz we've defined Readonly | cann't change it 
