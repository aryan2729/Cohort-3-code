import './App.css'

import { useRecoilValue , useSetRecoilState , RecoilRoot } from 'recoil'
import {CounterAtom ,evenSelector } from './store/atoms/counter.js'
// import  evenSelector and CounterAtom atom from store/atoms 


// Notes:
// Here we are using a selector that is a part of the atom. The atom will have a derived function 
// which can be anything. In our current program, this function checks whether the number is odd or even.
// For odd/even check, the function is passed to the selector.
// The Buttons and Counter components are dependent on the atom. The "IsEven" component gets the value from the atom, 
// then passes it through the selector function to check if the number is even or odd and displays the result.



function App() {

  return <div>

      <RecoilRoot>          

        <Counter />
        <Button />
        <IsEven />

      </RecoilRoot>


  </div>
}


function Counter(){

  const count = useRecoilValue(CounterAtom); // for count value 


  return <div>
    {count}
  </div>
}


function Button(){

  const setCount = useSetRecoilState(CounterAtom);  // for setCount change the value of count

  return <div>

    <button onClick={()=> setCount(c=> c + 2)}> Increase</button>
    <button onClick={()=> setCount(c=> c - 1)}> Decrease</button>

  </div>
}




function IsEven(){

  // Used even selector that stored in store/atoms it give true or flase 
  const even = useRecoilValue(evenSelector);  


  return <div>

    {even ? "Even" : "Odd"}      {/* Displays whether the counter is even or odd */}

  </div>
}


//e.g. like in linkedin the notification count only changes when it get new notification not when use changed profile when all this defined in atom in same atom so this helps to change only specific part when it changes and it works on pure function means it take value as it is and use here not change that value 

export default App
