"use strict";
// Generics -> Generics enables you to create components that work with any data type while still providing compile-time type safety.
function firstEl(arg) {
    return arg[0];
}
const a = firstEl([1, 2, 3, 4]);
const b = firstEl(["Hello", "aryan"]); // when u hover over b then you'll find it's type input but y then it's not converting to upper case 
// console.log(b.toUpperCase ); y this not workig even in string  -> use generics
function FirstEle(arg) {
    return arg[0];
}
const c = FirstEle(["hello", "aryan"]); // hover over c you'll find string type so now you can convert this into upper case 
const d = FirstEle([1, 2, 3, 4]);
console.log(c.toUpperCase());
