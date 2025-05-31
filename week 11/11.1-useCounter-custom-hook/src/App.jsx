import { useState  } from "react";


// Custom Hook - useCounter
// Create a custom hook called useCounter         | now we don't need to write this logic again and again in other components  
function useCounter(){

  const[count , setCount] = useState(0);

  function increaseCount(){
    setCount(c => c+ 1);
    // setCount(count+1);
  }

  // Return the count and increaseCount function to be used in other components 
  return { count , increaseCount };          
}


function App(){

  return <div>

      <Counter />

      <Counter />

  </div>
}


function Counter(){

// Destructure the count and increaseCount function from the useCounter custom hook
  const {count , increaseCount } = useCounter();


  return  <div>

    <button onClick={increaseCount}>Increase {count} </button>
  </div>
}

export default App;