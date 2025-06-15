// (Partial)
// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

interface User2 {
    name:string ;
    password:string;
    id:string ;
    age:number ;
    email:string ;
}

type UpdateUser2 = Pick<User2 , 'name' | 'password' | 'age'>



type UpdateUser2Optional = Partial<UpdateUser2 > // It's make all properties of UpdateUser2 type optional it's means it's not mandatory to define all properties in function ok | hover over it to check 

// {this above work same as below }

// interface UpdateUser2Optional{
//     name ?: string | undefined;
//     password ?: string | undefined;
//     age ?: number | undefined;
// }

const User3 : UpdateUser2Optional = {
    name:"aryan",
    age:20
}

console.log(User3);