import './App.css'
import { useState , useEffect , memo } from 'react'
// import memo and others 

// React says
// Anytime a component re render all its children(component that define in this
// component) also re-render But if you wrap a component inside a memo 
// Only if the props/state in that child has changed Only then will it
// re-render ( otherwise it won't re render )



function App(){

  return <div>
    <Counter />
  </div>
}


function Counter() {

  const [count, setCount] = useState(0)

  useEffect(()=>{

    setInterval(() => 
      { setCount ( c => c+ 1)}, 3000 );     // it increase count in every 3 sec 

  } , [] )     


  return <div>

      <CurrentCount count={count} /> 
      <Increase />
      <Decrease /> 

    </div>
  
}


const CurrentCount = memo(function ( {count} ){      // memo here count can be passed so only counter and CurrentCount should re render others not 


  return <div>{count} </div>
})


const Increase = memo(function(){         // memo - it only re rendr if it has prop/state that re-rendring 

  function increase(){   
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})


const Decrease = memo(function (){

  function decrease(){
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})


export default App


