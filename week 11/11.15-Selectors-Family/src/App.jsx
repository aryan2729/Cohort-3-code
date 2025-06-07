import {RecoilRoot ,  useRecoilState, useRecoilValue} from 'recoil'

import { todosAtomFamily } from './atoms'

// import todoAtomFamily froma atom file 

// Recoil -> change the dependencies to recoiil 18 


// Always first go to sum-server and run the file of index.js by node.js and write the address to atom.js which have todos present there ok 



function App(){
  return <>

    <RecoilRoot>

      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />

    </RecoilRoot>
  </>
}

// selectorFamily only hit backend once if have same id of same component 


function Todo({id}){
  
  const [todo , setTodo]  = useRecoilState(todosAtomFamily(id)); 

  return (
    <>
    
    {todo.title}
    {todo.description}

    <br />
    
    </>
  )
}

export default App;