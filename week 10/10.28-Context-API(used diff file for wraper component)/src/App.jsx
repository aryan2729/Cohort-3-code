import { useState , createContext } from "react";
import { useContext } from "react";
import { BulbContext , BulbContextProvider } from "./BulbContextProvider";

// above BulbContext and BulbCOntextProvider imported from BulbCOntextProvider file name <--


function App(){

  return <div>

    <BulbContextProvider>           {/* importing above and using here make it look more cleaner */}                   

      <Light />                     

    </BulbContextProvider>

  </div>
}

function Light(){

  return <div>

      <LightBulb />
      <BulbSwitch />

  </div>
}

function LightBulb(){


  // Use the useContext hook to access the value of bulbOn from the BulbContext
  const {BulbOn} = useContext(BulbContext);    

  return <div>

    {BulbOn ? "Bulb On " : "Bulb Off"}

  </div>
}



function BulbSwitch(){
  

   // Use the useContext hook to access the value of bulbOn and setBulbOn from the BulbContext
  const {BulbOn , setBulb} = useContext(BulbContext); 

  function changeBulb(){

    setBulb(currentValue => !currentValue);           // also pass BulbOn on usecontext thing and write currentValue place (!BulbOn)
    // setBulb(!BulbOn); 
  }

  return <div>

    <button onClick={changeBulb}>Toggle the Bulb</button>

  </div>
}

export default App;