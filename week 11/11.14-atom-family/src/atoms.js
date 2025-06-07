import { atom, atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({             // it create lots of atom and storeshere 

    key:"TodosAtomFamily",

    default : id => {                           // arrow func
        return TODOS.find( c => c.id === id);  // return the todo object with id as parameter from TODOS array
    },
    
});