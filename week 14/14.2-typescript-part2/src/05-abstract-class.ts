// What is difference between interfaces & types (interview)
// -> We can implements interfaces as classes but in types we cann't do that & in types we can do union & intersection while defining types but we cann't do this with interfaces


// Abstract classes 
// What is difference between abstract class & interface ( interview )
// -> abstract class can have default implementation but in interface you cann't do that 



abstract class User4{

    name : string ;

    constructor(name : string){         
        this.name = name ;
    }

    abstract greet() : string ;        // func which returns string abstract cuz abstract class

    hello(){                        // this is default implimentation 
        console.log("Hi");
    }
}


class Employee extends User4 {

    name :string;

    constructor(name : string ){

        super(name);                // we need to add super(it's means first call parent class constructor ) if we extends this class 
        this.name = name;
    }

    greet():string {
         return "hi " + this.name;
    }
}


let emp = new Employee("aryan");

console.log(emp.greet());





