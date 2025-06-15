// npm init -y ( tsc -> typescript compiler )
// npm install typescript  then npx tsc --init then make index.ts file then write code in it and convert it into .js by npx tsc -b 
// | Every js files comes in dist folder if you've written "rootdir":./src and "outdir": ./dist in tsconfig file | and movie ts file in src folder after making | what does rootdir - tell where you need to look for .ts files and outdir - tell where should the compiler look to spit .js files 
// Go to dist folder for run any files cuz js cann't run files it compile it into .js file then we run .js by node index.js etc 

// All the things covered in this files will use in API thing ...



// (Pick) 
// Pick -> allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type/interface).
// Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.

type User = {
    id:string;
    name:string ; 
    age : number;
    email: string ;
    password: string ;
}

// Create a new type that only picks specific properties (name , age, password) from the User interface
type UpdateUser = Pick<User , 'name' | 'age' | 'password'>;  // pick<from , 'what' > from means which type/interface

const user1 : UpdateUser = {        
    name:"aryan",
    age:18,
    password:"1234"
}


console.log(user1);

