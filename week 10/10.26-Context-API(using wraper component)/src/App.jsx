import { useState , createContext } from "react";
import { useContext } from "react";

const BulbContext = createContext();


function BulbProvider({children}){    // wraper component helps to maintain clean code | what we done here we made wraper component inside we write all provider and varibale which we use in other component | easy structure  

  const [BulbOn , setBulb ] =useState(true);

  return <div>

    <BulbContext.Provider value={{
      BulbOn : BulbOn , 
      setBulb : setBulb
    }}>

      {children}                        {/*  children means Light component come here what we pass b/w BulbProvider wraper component */}

    </BulbContext.Provider> 

  </div>
}


function App(){

  return <div>

    <BulbProvider>                    

      <Light />                     {/* children = light | and it makes cleaner code structure wise */}

    </BulbProvider>

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
  const {BulbOn} =useContext(BulbContext);    

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