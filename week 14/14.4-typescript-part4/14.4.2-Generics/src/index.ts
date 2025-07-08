// Generics -> Generics enables you to create components that work with any data type while still providing compile-time type safety.

type Input = string | number ;

function firstEl( arg : Input[] ){
    
    return arg[0];
}

const a = firstEl([1 , 2 , 3 , 4]);
const b = firstEl(["Hello" , "aryan"]); // when u hover over b then you'll find it's type input but y then it's not converting to upper case 

// console.log(b.toUpperCase ); give error -> y this not workig even in string  -> use generics




function FirstEle<T>( arg : T[] ){      // using generics T array    

    return arg[0];
}

const c = FirstEle<string>(["hello","aryan"]);  // hover over c you'll find string type so now you can convert this into upper case 

const d = FirstEle<number>([1,2,3,4]);              


console.log(c.toUpperCase());



// Import and export 2 methods 

// export const t = 4;  -> import {t} from "./file "

// export default t = 5;  -> import t from "./file "