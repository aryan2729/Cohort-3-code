"use strict";
// Types 
function isLegalll(user) {
    return user.age > 18;
}
let user8 = {
    name: "aryan",
    age: 29
};
console.log(isLegalll(user8));
let e = {
    name: "aryan",
    startDate: "01-05-2000"
};
let m = {
    name: "aryan",
    department: "SDE"
};
let t = {
    name: "aryan",
    startDate: "01-05-2000",
    department: "SDE-1"
};
const user9 = {
    name: "aryan",
    gift: "ps5",
    ip: "127.0.0.1" // in this example have both propeties 
};
function check(c) {
    console.log("welcome " + c.name);
}
