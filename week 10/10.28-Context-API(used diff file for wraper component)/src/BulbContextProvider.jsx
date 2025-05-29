import { createContext , useState } from "react";


export const BulbContext = createContext();


export function BulbContextProvider({children}){    // wraper component helps to maintain clean code | what we done here we made wraper component inside we write all provider and varibale which we use in other component | easy structure  

  const [BulbOn , setBulb ] =useState(true);

  return <div>

    <BulbContext.Provider value={{
      BulbOn : BulbOn , 
      setBulb : setBulb
    }}>

      {children}                        {/*  children means Light component come here what we pass b/w BulbProvider wraper component */}

    </BulbContext.Provider> 

  </div>
}