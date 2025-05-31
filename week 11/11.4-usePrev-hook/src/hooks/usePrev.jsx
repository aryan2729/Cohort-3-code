import { useRef } from "react";
import { useState , useEffect } from "react";


export function usePrev(value){    // 1st this run 

    
    // Create a reference to store the previous value of the value argument => (In React, useRef is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but does not trigger a re-render when the value changes.)
    const ref = useRef();


    useEffect(()=>{                // 3rd run 

        ref.current=value;

    },[value]);     // Only update the reference value when the value argument changes 



    return ref.current;             // 2nd run   

    // Return the reference value as the previous value
}