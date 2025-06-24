import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signup(){

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    
    async function signupFun(){

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;    //means don't pass empty default 
        
        await axios.post(BACKEND_URL + "/api/v1/signup" , {
           
                username ,
                password
            }
        )
        

    }



    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

        <div className="bg-white border min-w-48 p-8 rounded-xl ">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />

            <div className="flex justify-center pt-4 ">
                <Button onClick={signupFun} variant="secondary" text="Signup" fullWidth={true} loading={false}/>
            </div>
        </div>


    </div>
}