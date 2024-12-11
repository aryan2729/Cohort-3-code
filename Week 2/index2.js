//🔥 Classes in js   -- all methods and properties are 'public'...

class Rectangle {
    constructor(width, height, color) {                                         // constructor automatically called when we make object 
         this.width = width;    //🚀 we need to use this.___ 
         this.height = height;
         this.color = color; 
    }

    area(){
        const area = this.width * this.height;
          return area;
    }

    paint(){
         console.log("Painting with color"+ this.color );
    }
}
 
 const rect = new Rectangle(2, 4 , "Red"); //🚀 rect --> object/instance of class   |   and we telling compiler that new Rectangle means object created of rectangle class 
 const area = rect.area();
 rect.paint();
 console.log(area);


 // Inbuild classes in js 

const date = new Date();  // Date class | date object 
console.log(date.getFullYear()); 

//  Maps in js  --> set and get used 

const map = new Map();   // Map class | map object 
map.set('Name' , 'ARYAN');
map.set('Age' , 19 );

const firstName = map.get("Name");
console.log(firstName);


/*🔥 Promise (M.I.P) --> A Promise in JavaScript is an object that represents the eventual
completion (or failure) of an asynchronous operation and its resulting value. Promises 
are used to handle asynchronous operations more effectively than traditional callback 
functions, providing a cleaner and more manageable way to deal with code that executes 
asynchronously, such as API calls, file I/O, or timers. */

// defining a promise is hard.
// using a promise is easy .

// e.g. of callback
function callback(){
    console.log("Harkirat");
}
setTimeout(callback, 3000); // callback   |   it will run callback function after 3 sec  | 1000-> 1 sec , 3000-> 3 sec 


//🚀 e.g-1 ( Promise )

// The real operation that we want to promisify
function doAsyncOp(resolve){
    setTimeout(resolve, 3000);    // old , callback , async function 
}

const p = new Promise(doAsyncOp); // p is object of Promise class | creating a new promise

function callback2(){
    console.log("3 seconds have passed");
}

p.then(callback2);   //  promise called |  .then(___)  <-- this callback2 is like resolve equals like | if we can't call .then then it will not print callback2   


//🚀 e.g-2  ( Promise )

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function callback3() {
      console.log("4 seconds have passed");
  }
  
  setTimeoutPromisified(4000).then(callback3);
  
