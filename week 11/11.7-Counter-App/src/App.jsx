import { useState } from "react";
import './App.css'

// After you run this chrome and open inspect -> component option 
// then click on increase or decrease button on screen then you found
// that even tho we're only updating count but it renders all component that associated with it .  
//  so for fix unnecessary rendering we use recoil -> next file 11.8


function App(){

  return <div>

    <Counter/>

  </div>
}


function Counter(){

  const[count , setCount] = useState(0);

  return <div>

    <CurrentCount count={count} />
    <Increase setCount={setCount} />
    <Decrease setCount={setCount} />

  </div>
}

function CurrentCount( {count} ){

  return <div>
    {count}
  </div>
}

function Increase( {setCount} ){
  
  return <div>

    <button onClick={ ()=> setCount(c => c+ 1) }>Increase</button>
  </div>
}

function Decrease( {setCount} ){
  
  return <div>

    <button onClick={ ()=> setCount(c => c - 1) }>Decrease</button>
  </div>
}

export default App;