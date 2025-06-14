function getMax( nums: number[] ){       // nums array which have numbers in it 

    let max = 0;

    for(let i = 0; i<nums.length; i++){
        if(nums[i]>max){
            max = nums[i];
        }}
    return max;
}

getMax([1,2,3,4,5,6]);


interface Address12 {
    city: string;
    pincode: string;
}

interface User12 {
    name : string , 
    age : number , 
    address : Address12[]
}

let user12 : User12 = {
    name:"aryan",
    age:24,
    address:[]
}




// assignment -> write a function for given user14 interface which take array of inputs and tell  

interface user14 {
    firstname:string , 
    lastname:string , 
    age: number
}


function checkAge( user : user14[] ) {          // taking array of user input 

    // return user.filter((user) =>user.age > 18 );
    let ans = [];
    for(let i = 0; i<user.length ; i++){
        if(user[i].age > 18){
            ans.push(user[i]);
        }
   }
    return ans;
}

let filterUser = checkAge([{
    firstname:"aryan",
    lastname: "code27",
    age : 24 
},{
    firstname:"yoyo",
    lastname:"yo",
    age:29
}])

console.log(filterUser);


