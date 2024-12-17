const axios = require("axios");

//🔥Fetch vs 🚀 Axios( better )


 //fetch
async function main(){                             
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    console.log(json.id);           // id cuz in this above website id present                            
};

main();


//🔥 Axios - External first add  above 

async function Main() {                         // axios Easy  
    
    const Response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

    console.log(Response.data.id);          // alwasy add .data 🚀 
}

Main();





// async function Main() {                         // axios easy (post request )
    
//     const Response = await axios.post("https://jsonplaceholder.typicode.com/todos/1");
    
//     console.log(Response.data.id);          // alwasy add .data 🚀 
// }

// Main();