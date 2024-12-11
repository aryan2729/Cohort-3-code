function setTimoutPromisified(duration){    // don't learn this just learn how to use this below 4 lines 
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}

// function callback(){
//     console.log("5 seconds have passed");
// }

// setTimeout(callback,5000);


//🧬 we can also write function in setTimeout layer 


//callback hell   - here for function u writing in setTimeout then u don't need any variable name 

setTimeout(function(){
    console.log("1 seconds has passed"); 
    setTimeout(function(){
        console.log("3 seconds has passed after 1 printed"); 
        setTimeout(function(){
            console.log("5 seconds has passed after 3 seconds printed"); 
        }, 5000);

    }, 3000);
},1000);


// Promisified hell 
setTimoutPromisified(1000).then(function(){
    console.log("hi");
    setTimoutPromisified(4000).then(function(){
        console.log("Hello");
        setTimoutPromisified(5000).then(function(){
            console.log("HEllo there");
        })
    });
});


// Promisified chaining 
setTimoutPromisified(1000).then(function(){
    console.log("Promisified chain 1s");
    return setTimoutPromisified(4000)
}).then(function(){
    console.log("Promisifed cahin 4s ");
    return setTimoutPromisified(6000)
}).then(function(){
    console.log("Promisified chain 6s ");
});


//🔥 Async await syntax  -- It's actually a promoisified version in short way 

async function solve(){
    await setTimoutPromisified(1000);
        console.log("Hi");
    await setTimoutPromisified(3000);
        console.log("Hello");
    await setTimoutPromisified(5000);
        console.log("Hi There ");
}

solve();
console.log("after function call"); 


//  for above async await '
// option 1
//  Hi
//  Hello
//  Hi there 
//  after function call 
//
//  Option 2                    -> ANS 
//  after function call   
//  Hi 
//  Hello
//  Hi there

