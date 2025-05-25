import { useState , useRef } from "react";

function App(){

  return <div>

      <FocusInput/>

      <hr />

      <StopWatch/>


  </div>
}



function FocusInput(){

  // Create a reference to the input element using the useRef hook  ( it helps to foucs on any input or dom element )
  const inputRef = useRef();

  function FocusOnInput(){

    // Focus on the input element using the ref attribute
    inputRef.current.focus();  

  }

  return <div>


      <h1> Sign Up</h1>
      
      {/* ref imp here if you want to direct focus on this input  */}
      <input ref={inputRef} type="text" id="name"  />       

      <input type="text"  />

      <button onClick={FocusOnInput}>Submit</button>

  </div>
}


function StopWatch(){
  
  const[currentTime , setTime ] = useState(1);

  const timer = useRef();     // created timer variable for useRef 

  function start(){
    
    let value = setInterval(function(){       //Set an interval to update the currentCount every second
      setTime(c => c+ 1);
    }, 1000);

    timer.current = value;          // timer.current means current value of watch stores in timer current variable cuz later we want to stop this watch then use it 
  }


  function stop(){

    console.log(timer.current);   // it console the current value of watch

    clearInterval(timer.current);     // it stops the watch 
  }



  return <div>

      <h1>Stop Watch</h1>

      {currentTime}

      <br />

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>



  </div>
}

export default App;