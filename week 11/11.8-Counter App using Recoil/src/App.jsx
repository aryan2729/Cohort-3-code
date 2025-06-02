import './App.css'

// Recoil -> Recoil minimizes unnecessary renders by only re-rendering components that depend on changed atoms


import { RecoilRoot , useRecoilValue , useSetRecoilState } from 'recoil'
import { CounterAtom } from "./store/atoms/counter";      
// Import above  things first for use Recoil
// and keep in mind Recoil only work on React 18 change the dependecies in package.json file and delete and re install the npm modules 



// go -> CounterAtom stored in store/atoms 
 
        


function App(){

  return <div>
                        
    <RecoilRoot>          {/* 1st -> wrap our component into Recoil Root  */}

      <Counter/>

    </RecoilRoot>


  </div>
}


function Counter(){

  return <div>

    <CurrentCount />
    <Increase  />
    <Decrease  />

  </div>
}

function CurrentCount(  ){

  const count = useRecoilValue(CounterAtom);    // 2nd use -> useRecoilValue for count state variable value which defined in another file store/atoms 

  return(

    <div>
      {count}
    </div>
)}


function Increase(){
  
  const setCount = useSetRecoilState(CounterAtom);    // 3rd  use -> useSetRecoilState for change count state variable 

  return <div>

    <button onClick={ ()=> setCount(c => c+ 1) }>Increase</button>
  </div>
}


function Decrease(){
    
  const setCount = useSetRecoilState(CounterAtom);

  return <div>

    <button onClick={ ()=> setCount(c => c - 1) }>Decrease</button>
  </div>
}


export default App
