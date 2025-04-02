import { useState , useEffect } from "react";

// useEffect use for clock , fetch data , api calls etc


function App(){

  const [count , setCount] = useState(1);
  const [count2 , setCount2] = useState(1);


  function increaseCount(){
    setCount(currentValue => currentValue + 1);   //🔥 this is same as (count + 1) just -> added arrow function 
  }

  function decreaseCount(){
    setCount2(currentValue => currentValue - 1);
  }

  useEffect(function(){   
    setInterval(increaseCount , 1000 );  //  every 1 sec 
    setInterval(decreaseCount , 1000) ;
  }, [] )                                  //🔥 dependency array | this effect will run on mount(start) , because the array is empty


  useEffect(function(){
    console.log("The count has been updated to " + count2);
  } , [count2])   //🔥 If you pass count2 in dependency array then this above console show in console evertime count2 changes 



  return <div>
    
    {count}{count2}

  </div>
}


export default App;