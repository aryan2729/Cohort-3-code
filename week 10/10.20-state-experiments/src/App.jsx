import { useState } from "react";

// also called rolling up 
function App(){

    return <div>

    <Lightbulb/>

    </div>
}

// Create a function component named LightBulb to manage the state of the bulb
function Lightbulb(){

// Declare a state variable bulbOn and a function setBulbOn to update the state
const [BulbOn , SetBulb ] = useState(true);



return <div>

        {/* Render the BulbState component with the bulbOn state as a prop */}
        <BulbState BulbOn={BulbOn} />

        {/* Render the ToggleBulbState component with the bulbOn state and setBulbOn function as props */}
        <ToggleBulbState BulbOn={BulbOn} SetBulb={SetBulb} />

    </div>
}


function BulbState( {BulbOn} ){
    
    
    return <div>       {/* ternary operator */}

        {BulbOn ? "Bulb on " : "Bulb off"}

    </div>
}


function ToggleBulbState( {BulbOn , SetBulb} ){         // we cann't use setBulb if we don't define prop in lightbulb and pass here 

    function changeState(){
        SetBulb( currentState => !currentState); 
        // SetBulb(!BulbOn);  same work as above 
    }


    return <div>
        <button onClick={changeState}>Toggle the bulb</button>
    </div>
}

export default App;