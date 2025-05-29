import { useState  } from "react";

// importing CountContext & CountContextProvider form CountContextProvider file 
import { CountContext , CountContextProvider } from "./CountContextProvider";
import { useContext } from "react";



function App(){

  return <div>

    <Parent />

  </div>
}


function Parent(){

  return <div>

    {/* Use CountContextProvider to make the context available to child components */}
      <CountContextProvider>

        <Increase />                  {/* Render the Increase button component */}

        <Decrease /> 

        <Value />

      </CountContextProvider>

  </div>
}


function Increase(){

  const { setCount} = useContext(CountContext);


  function increaseCount(){
    setCount(currentValue => currentValue + 1 ); 
  }

  return <div>

    <button onClick={increaseCount}>Increase</button>

  </div> 
}


function Decrease(){

  const {setCount} = useContext(CountContext);


  function decreaseCount(){
    setCount(currentValue => currentValue - 1); 
  }

  return <div>

    <button onClick={decreaseCount}>Decrease</button>
  </div>

}


function Value(){

  const { count } = useContext(CountContext);

  return <div>

    <p> Count: {count} </p>

  </div>
}

export default App;