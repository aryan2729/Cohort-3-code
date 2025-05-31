import { useState } from 'react'
import './App.css'

// Import the usePrev custom hook from the hooks folder 
import { usePrev } from './hooks/usePrev'


function App(){


  const[value , setValue] =useState(0);  //    0      , 1 , 2  
  

  const prev = usePrev(value);           // undefined , 0 , 1 
// Call the usePrev custom hook to get the previous value of the count state variable


  return <>

      <div>
          <p>{value}</p>

          <button onClick={ () => setValue(c=>c+1) }>click</button>

          <p>The previous value was {prev} </p>

      </div>
    
  </>
}

export default App;