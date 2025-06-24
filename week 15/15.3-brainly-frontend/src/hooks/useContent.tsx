import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";


export function useContent(){
    const [contents , setContents] = useState([]);
 
   
    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers : {
                "Authorization" : localStorage.getItem("token")
            }
        }).then((response) => {
            setContents(response.data.content);
        })
    }

    useEffect(()=> {
        refresh();      //refresh func call which add the content in this time 2 sec
        let interval = setInterval(() => {
            
            refresh();
        }, 100);

        return () =>{
            clearInterval(interval);
        }
    })

    
    return contents;
}