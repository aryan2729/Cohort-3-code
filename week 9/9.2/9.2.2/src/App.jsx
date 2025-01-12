import { useState , useEffect } from 'react'

// UseEffect , dependency array , cleanups
function App() {
  

 // Declare a state variable called 'count1' with an initial value of 0, and 'setCount1' to update it
  let [count1 , setCount1 ]= useState(0);
  // Declare a state variable called 'count2' with an initial value of 0, and 'setCount2' to update it
  let [count2 , setCount2] = useState(0);

  
function increase(){
  setCount1(count1 +1 );
}

function decrease(){
  setCount2(count2 -1);
}

  return <div>

  {/* Render the Counter component and pass 'count1' and 'count2' as props */}
  <Counter count1 ={count1}  count2 = {count2} />

  <button onClick={increase}>Increase Count</button>

  <button onClick={decrease}>Decrease Count</button>

  </div>
}


function  Counter(props) {

  
  useEffect(function(){

    console.log("mount");

    return function() {
        console.log("un-mount");
    }
  }, []);


  useEffect(function(){
    console.log("count has changed");

    return function(){
      console.log("un-mount");
    }

  } , [props.count1]);        // Dependency array makes this useeffect run only when 'props.count1' changes


  return <div> 
    Counter1 {props.count1}  <br/>
    Counter2 {props.count2}  <br/>

    </div>
}


export default App
