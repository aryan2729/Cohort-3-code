import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDebounce } from './hooks/useDebounce';




function App() {

  const [value , setValue ] = useState("");

  // Using the custom debounce hook to delay the update of the input value
  const deBouncedValue = useDebounce(value , 200);    // delay 2 sec 

  
  // Function to handle changes in the input field
  function change(e){

    setValue(e.target.value);     // Updates the input value in state

  }

  useEffect(()=>{
      // fetching  
      console.log("exclusive operation");

  },[deBouncedValue]) ;      // Dependency array ensures this effect runs only when debouncedValue changes


  return <div>
    

       {/* Input field to capture user input */}
      <input type="text" onChange={change}  style={{background:"green"}}  />

  </div>
}

export default App
