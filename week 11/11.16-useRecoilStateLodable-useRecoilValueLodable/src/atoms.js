import {  atomFamily , selectorFamily } from "recoil";
import axios from "axios";


// Define an atom family to manage the state for individual todos
export const todosAtomFamily = atomFamily({

    key:"todosAtomFamily",

    default: selectorFamily({             // cann't do async function in atom and we need to do for muplitple atoms so selectorsFamily work only || dynamic selector 

        key: "todoSelectorFamily", 

        // Define the get method to fetch the todo data from the server using the given ID
        get: (id) => async ({ get }) => { 
            
            await new Promise(r => setTimeout(r, 5000));        // wait 5sec then fetch and give 
            const res = await axios.get(`http://localhost:8080/todos?id=${id}`);
           
            const todo = res.data.todos.find(todo => todo.id === parseInt(id));
            
            return todo;
        },
    })
});



