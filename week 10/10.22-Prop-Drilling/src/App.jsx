import { useState } from "react";

function App(){

  // Prop drilling occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree. This often leads to the following issues: complexity and maintenance { need to usee }

  // Declare a state variable 'bulbOn' initialized to true, and a state updater function 'setBulbOn' to toggle the state
  const [Bulbon , setBulb ] = useState(true);


  return <div>
      
    <Light Bulbon={Bulbon} setBulb={setBulb} />   

  </div>
}

function Light( {Bulbon , setBulb} ){     // not using this prop , it just passing to other components 

  return <div>

    <LightBulb Bulbon={Bulbon}  />

    <LightSwitch Bulbon={Bulbon} setBulb={setBulb}/>   

  </div>
}


function LightBulb( {Bulbon} ){

  return <div>

    {/* Ternary operator  */ }

    {Bulbon ? "Bulb on " : "Bulb off" }

  </div>
}

function LightSwitch( {Bulbon , setBulb } ){


  function BulbState(){
    setBulb(!Bulbon) ;
    // setBulb(currentState =!currentState)
  }

  return <div>

    <button onClick={BulbState} >Toggle switch</button>

  </div>
}

export default App;