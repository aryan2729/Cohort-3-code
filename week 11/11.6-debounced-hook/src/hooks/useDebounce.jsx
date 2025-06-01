import { useEffect } from "react";
import { useState } from "react";


// Defining a custom hook `useDebounce` which delays the update of a value
export function useDebounce(value , delay ){

    
    const[deBouncedValue, setDebouncedValue] = useState(value);


    // useEffect runs whenever `value` or `delay` changes
    useEffect(()=>{

        const handler = setTimeout(() => {      // timer to update the debounced value after the specified delay
            setDebouncedValue(value);
        }, delay);

        return () => {                          // Cleanup function to clear the timer when `value` or `delay` changes or on component unmount
            clearTimeout(handler);                  
        }

    },[value , delay]);


    return deBouncedValue;
}