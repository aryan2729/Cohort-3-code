import { useState , createContext } from "react";
import { useContext } from "react";


export const CountContext = createContext();


export function CountContextProvider( {children} ){

    const [count , setCount ] = useState(0);

    return <div>

        <CountContext.Provider value={{
            count : count , 
            setCount : setCount
        }}>

            {children}

        </CountContext.Provider>


    </div>
}