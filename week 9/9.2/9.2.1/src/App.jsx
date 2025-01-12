import { useEffect, useState } from "react"


function App() {      // first add npm create vite@latest in terminal for load this react js stuff
  
  // conditional rendering 
  let [counterVisible , setCounterVisible ] = useState(true);      // this and below useEffect for conditional rendering 

  useEffect(function(){
    setInterval(function(){
      setCounterVisible (c => !c);
    }, 5000 )
  } , []);

  return <div> 

    <Counter></Counter>               

    {counterVisible && <AutomaticWatch></AutomaticWatch>}                {/* This will only work when countervisible true | from above useEffect code we can say that this counter clock automatically stop in 5 sec and automatically run after 5 sec   */}
                            
     </div>
}



function Counter(){

  const [count , setCount] = useState(0) ;    // 0 default

  function increaseCount(){
    setCount(count + 1);
  }
  function decreaseCount(){
    setCount(count -1);
  }
  function resetCount(){
    setCount(0);
  }

  return <div>
                                          
      <h1 id="text" >{count}</h1>      

      <button onClick={increaseCount}>IncreaseCount</button>
      <button onClick={decreaseCount}>DecreaseCount</button>
      <button onClick={resetCount}>ResetCount</button>

    </div>
}



// Mounted , re-rendr , Unmounted(exit)
function AutomaticWatch(){

  const [count , setCount] = useState(0);

  //hooking into the lifecyle of re-render 
  console.log("Counter it logs everytime when re-rendere");


  //🍁 useEffect guard our setInterval from re-renders | means it only calls once | , if we don't use this direcly use setInterval then after 16 second our stopwatch start flickling and stops 
  useEffect(function(){
    console.log("On mount");

    let clock = setInterval(function(){
      console.log("From inside interval");
      setCount(count => count + 1);        // | arrow function | this work same as setCount(function(count) {return count +1 ; })  
    }, 1000);                                                               // setInteval after every 1 second 

    return function(){
      console.log("On un-mount")
      clearInterval(clock);                 // This stops watch OR setInterval when automaticWatch returns or exit -> when exit when false <- see upper code we've create counterVisible for this 
    }
  }, []);   // [] -> this is for dependency array

  return <div>
      <h1 id="text"> {count}</h1>
  </div>
}

export default App
