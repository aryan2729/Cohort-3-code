//🚀1. (Update Elements) 

//we want to make frequent stopwatch 

// let ctr = 0;
// function callback(){
//     console.log(ctr);
//     ctr = ctr +1 ;
// }
// setInterval(callback,1000);  //🔥 M.I.🔥 setInterval call function after specific time(1000 here) for (🧬 infinites times )

let ctr = 0;
function callback(){
    const el = document.querySelectorAll("h4")[0]; //🔥 this will find h4 heading first or 0 index h4 
    el.innerHTML = ctr;                            //🔥 this will change text of h4[0] to ctr variable text 
    ctr = ctr + 1;
}

setInterval(callback,1000);

//🔥 Another element update / change inner text 
const firstTodo = document.querySelectorAll("h1")[0];
firstTodo.innerHTML="It's changed text for h1";




