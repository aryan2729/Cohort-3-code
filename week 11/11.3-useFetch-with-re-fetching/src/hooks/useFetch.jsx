import { useState , useEffect } from "react";

export function useFetch(url){

    const[data , setData ]= useState({}) // empty object
    const[loading , setLoading ]= useState(true);


    async function getDetails() {

        setLoading(true);
        
        const response = await fetch(url);
        const json = await response.json();

        setData(json);

        setLoading(false);
    }

    useEffect( ()=>{
        
        getDetails();

    } , [url]);     // run everytime url changes 


    useEffect(()=>{
        setInterval(getDetails(), 10 * 1000 );  // every 10 sec getDetails called means the data re-fetch at every 10sec so if it changes then it reflect there 
    },[])       // calls at starting once 


    return {data , loading };

}