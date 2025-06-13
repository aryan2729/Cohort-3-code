"use strict";
let user = {
    name: "aryan",
    age: 30,
    address: {
        city: "new delhi",
        country: "india",
        pincode: 110077
    }
};
let my = {
    name: "aryan",
    age: 28, // here type User using  and as address is optional so i not have written here address 
};
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let ans = isLegal(my);
if (ans) {
    console.log("Legall");
}
else {
    console.log("Illegal");
}
let game = {
    quality: "1080p"
};
function ga(game1) {
    return game1.quality;
}
console.log(ga(game));
