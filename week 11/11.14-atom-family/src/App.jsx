import {RecoilRoot , useRecoilState, useRecoilValue , useSetRecoilState} from 'recoil';
import {todosAtomFamily } from './atoms';
import { useEffect } from 'react';

// first set the react to 18 & check atom.js and todo.js file 
//Problem - Sometimes you need more than one atom for your use case For example - Creating a todo application

// Need to dynamically create atoms for every todo and if same id in different todos and if one changes with id x then another component with id x should change with it . | helps in todos when we need mupltile atoms for lots of components 


function App(){

    return <>
        
         {/* essential */}
        <RecoilRoot>                            

        <UpdaterComponent/>

            <Todo id={1} />
            <Todo id={2} />
            <Todo id={2} />
            <Todo id={2} />
            <Todo id={2} />

        </RecoilRoot>
    
    </>
}

function UpdaterComponent(){

    const updateTodo = useSetRecoilState(todosAtomFamily(2));  //id = 2 

    useEffect(()=>{

        setTimeout(()=>{

            updateTodo({                    // updates the id:2 todo details to this after 5 sec and how many todos used id: 2 it all changes cuz it all associated with atomFamily and this with atom 
                id: 2 , 
                title:"New todo",
                description:"new todo updated"
            })                              
        } , 5000 )
    } , [] );                           // rendering after mount update component one time
 
    return <></>
}


// Create a Todo component to render the individual todo items with the given ID as a prop
function Todo({id}){

    const currentTodo = useRecoilValue(todosAtomFamily(id));        // means i want atoms with this id 

    return (
        <>
        
        {currentTodo.title}
        {currentTodo.description}
        <br/>

        </>
    )
}

export default App;