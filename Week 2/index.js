
//🔥 Normal Function in js
function sum(a,b){

    return a + b;
}
let ans = sum(3,4);
console.log(ans);

// Find sum from 1 to a number
function sumofn(n){
    let j = 0;
    for(let i = 1 ; i<=n ; i++){
        j = j + i
    }
    return j;   
}
const answer = sumofn(5);
console.log(answer);


//🚀 I/O heavy operations -> like Reading files , https request .

// let fs = require("fs");                                                                                             // fs is library which allows you to read files from yoru system 
// const data = fs.readFile("a.txt" ) //🚀 Read file asynchronously - Executed all programs at one time (good)
// console.log(data);

// const data2 = fs.readFileSync("b.txt" , "utf-8"); //🚀 Read file synchronously - line by line (bad) | utf-8 represent if can understand eng 
// console.log(data2);


// 🔥 Functional arguments

function sum(a, b) {
    return a + b;
  }
  
function multiply(a, b) {
    return a * b;
  }
  
function subtract(a, b) {
    return a - b;
  }
  
function divide(a, b) {
    return a / b;
  }
  
 
function doOperation(a, b, op) { // 🚀 a = 1 , b = 2 , op = sum function | op helps to use function in function 
    return op(a, b)
  }

console.log(doOperation(1,3,sum)) //🚀

//🔥 Asynchronously code

function print(err , content){   // err --> error which print when error occured 
  console.log(content);
}

const fs = require("fs");             // let = var = const
fs.readFile("a.txt","utf-8" , print); // Asynchronously

fs.readFile("b.txt","utf-8",print);   // Asynchronously

console.log("Done");  //🚀 Done comes first cuz it's asynchronously code run all 
                      //   parameters at time so done fast in compare to readFile
                      //   a.txt and b.txt







