"use strict";
function getMax(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}
getMax([1, 2, 3, 4, 5, 6]);
let user12 = {
    name: "aryan",
    age: 24,
    address: []
};
function checkAge(user) {
    // return user.filter((user) =>user.age > 18 );
    let ans = [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].age > 18) {
            ans.push(user[i]);
        }
    }
    return ans;
}
let filterUser = checkAge([{
        firstname: "aryan",
        lastname: "code27",
        age: 24
    }, {
        firstname: "yoyo",
        lastname: "yo",
        age: 29
    }]);
console.log(filterUser);
