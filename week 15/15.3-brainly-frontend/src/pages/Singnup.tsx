import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup(){

    const navigate = useNavigate();

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

        navigate("/signin");


        
        

    }



    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">

        <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-12 rounded-3xl shadow-2xl w-full max-w-md transition-all duration-300">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Signup</h2>
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />

            <div className="flex justify-center pt-6">
                <Button onClick={signupFun} variant="secondary" text="Signup" fullWidth={true} loading={false}/>
            </div>
        </div>

    </div>
}