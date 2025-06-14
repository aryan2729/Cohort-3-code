"use strict";
// What is difference between interfaces & types (interview)
// -> We can implement interfaces as classes but in types we cann't do that & in types we can do union & intersection 
// Abstract classes 
// What is difference between abstract class & interface ( interview )
// -> abstract class can have default implementation but in interface you cann't do that 
class User4 {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("Hi");
    }
}
class Employee extends User4 {
    constructor(name) {
        super(name); // we need to add super(it's means first call parent class constructor ) if we extends this class 
        this.name = name;
    }
    greet() {
        return "hi " + this.name;
    }
}
let emp = new Employee("aryan");
console.log(emp.greet());
