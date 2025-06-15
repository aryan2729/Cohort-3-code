"use strict";
// (Partial)
// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
// {this above work same as below }
// interface UpdateUser2Optional{
//     name ?: string | undefined;
//     password ?: string | undefined;
//     age ?: number | undefined;
// }
const User3 = {
    name: "aryan",
    age: 20
};
console.log(User3);
