"use strict";
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.mobile = 1234;
    }
}
let user1 = new Manager("aryan", 20);
console.log(user1.age);
console.log(user1.name);
class Shape {
    area() {
        console.log("Hello i'm area ");
    }
}
class Rectangle extends Shape {
    constructor() {
        super(); // whenever we extends class always call super(): it's means calling parent class constructor even if it doesn't define in that 
        this.width = 1;
        this.height = 2;
    }
}
let r = new Rectangle();
console.log(r.width);
