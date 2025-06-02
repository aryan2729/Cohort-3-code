import { atom } from "recoil";
// Atoms are units of state that can be read from and written to from any component. When an atom’s state changes, all components that subscribe to that atom will re-render.



export const CounterAtom = atom({

    key : "counter",          // Assigning a unique key to identify this atom in the Recoil state tree 
    
    default : 0               // Setting the default value of the counter to 0
})

