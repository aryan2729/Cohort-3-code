import React, { createContext, useContext, useState } from 'react'; 

import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
// npm install recoil first 

// DOn't worry if not understand -> Next week on Recoil library 

const count = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});


const App = () => {

  return <div>
    <Parent />
  </div>

};


function Parent() {

  return (            // It helps to decrese the unnecessary renders 

    <RecoilRoot>        
      
      <Incrase />
      <Decrease />
      <Value />

    </RecoilRoot>

  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(count);

  return <div> Count: {countValue} </div>;
}



export default App;