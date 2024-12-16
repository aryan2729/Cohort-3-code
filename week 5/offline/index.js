//🔥 Arrow function 🔥

// Normal-> function sum(a,b){code}


//🚀Arrow function 
const sum = (a,b) => {       // 🚀 Learn Used  FURTHER 
    return a + b;
}

const ans = sum(1,2);
console.log(ans);


//🔥 Map 🔥
//given an array , give me back new array in which multiple of 2 in previous one 

// const array = [1,2,3,4,5];

// const newArray =[];                          normal way 
// for(let i = 0; i< array.length ; i++ ){
//     newArray.push(array[i] * 2  );
// }
// console.log(newArray);



//🚀 Map 

const array = [1,2,3,4,5];

//🚀 Most probably u will get this function in one line like this 

const answer = array.map(function(i){       // Learn 🚀 used FURTHER 

    return i * 2;
} );

console.log(answer);



//🔥 Filter 🔥
// if i give u array , u need to give me all even elements of it . 

const arrayy = [1,2,3,4,5];

const answer2 = arrayy.filter(function(n) {             // Learn 🚀 Used FURTHER 

    if(n % 2 == 0 ){            // even 
        return true ;
    }
    else{
        return false;
    }
} );

console.log(answer2);




// if wanna filter names of ppl who start with h in array 
// then use filter

const namesArray = ["harry","harkirat","player"];

const a = namesArray.filter(function(n){

    if(n.startsWith('h')) return true;
    return false;
});

console.log(a);