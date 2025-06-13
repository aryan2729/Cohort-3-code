interface people {
    name : string , 
    age : number
}

class Manager implements people {
    name : string ;     // we need to add name & age must cuz we're implementing people interface 
    age : number ;
    mobile : number;    // we can add extra things 

    constructor ( name : string , age : number){        // always 1st constructor calls | it's ask object to pass this things first 
        this.name = name ;
        this.age = age ;
        this.mobile = 1234;
    }
}

let user1 = new Manager("aryan",20);

console.log(user1.age);
console.log(user1.name);





class Shape {

    area(){
        console.log("Hello i'm area ");
    }
}

class Rectangle extends Shape{      // extends mean i can use Shape class things in Rectangle object too 

    width: number ;
    height : number ;

    constructor (){     //  always 1st constructor calls | it's object don't need to pass anything 
        
        super();           // whenever we extends class always call super(): it's means calling parent class constructor even if it doesn't define in that 
        this.width = 1;
        this.height = 2;
    }
}

let r = new Rectangle();

console.log(r.width);