// npm init -y ( tsc -> typescript compiler )
// npm install typescript  then npx tsc --init then make index.ts file then write code in it and convert it into .js by npx tsc -b 
// | Every js files comes in dist folder if you've written "rootdir":./src and "outdir": ./dist in tsconfig file | and movie ts file in src folder after making | what does rootdir - tell where you need to look for .ts files and outdir - tell where should the compiler look to spit .js files 
// Go to dist folder for run any files cuz js cann't run files it compile it into .js file then we run .js by node index.js etc 


function greet( name : string):string {         // after func :string is return type of func | and argument should have their data-types 
    
   return "Hello " + name ;
}

const greeting = greet("Aryan");
console.log(greeting);



function isEven(num : number) : boolean {       // return func boolean true or false 
    
    if(num %2 == 0 ){
        return true ;
    }
    else{
        return false;
    }
}

console.log(isEven(8));