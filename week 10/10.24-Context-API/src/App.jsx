// For solving problem like pro drilling we use context API 

import { useState , createContext } from "react";
import { useContext } from "react";
import { use } from "react";
// Import createContext & useContext react module


// Create a context named BulbContext using createContext
const BulbContext = createContext();    // 1st 


function App(){

  const [BulbOn , setBulb] = useState(true);

  return <div>
    
    {/* 2nd | BulbContext.Provider component with the value prop set to an object containing bulbOn and setBulbOn ( what we wanna pass )*/}

    <BulbContext.Provider value={{           
        BulbOn : BulbOn , 
        setBulb : setBulb   
    }}>              
                                      
    <Light />                     

    </BulbContext.Provider>                  
              

  </div>
}


function Light(){

  return <div>

      <LightBulb />
      <LightSwitch />

  </div>
}


function LightBulb(){

  const {BulbOn} = useContext(BulbContext);     // 3rd | using the useContext hook to access the value of bulbOn from the BulbContext

  return <div>

    {BulbOn ? "Bulb On " : "Bulb Off" }

  </div>
}


function LightSwitch(){

  const {setBulb} = useContext(BulbContext);  // Use the useContext hook to access the value of setBulb from the BulbContext


  function setB(){
    setBulb(currentValue => !currentValue );
  }

  return <div>

      <button onClick={setB}>Toggle Switch</button>

  </div>
}

// it's little bit look conjusted in BulbContex.provider thing so next file -> we write this in wrap component so it's easy to look 

export default App;