import { useState } from 'react';
import './App.css'

function App() {


const [count , setCount] = useState(0);     //🍁 anything come after use is -> hook 


function onclickhandler(){
  setCount(count + 1);                                      // this will increase the count number 
}

  return ( 
    <div>
     <button onClick= {onclickhandler} >Counter {count} </button>   
    </div>                                                    //🍁 {onclickhandler} -> function way to write in react js 


  );
}


export default App
