"use client"            // always req. if you're doing useRouter , useEffect etc thing 
import { useRef } from "react"
import axios from "axios"
import { useRouter } from "next/navigation";       // import it from next/navigation manually not from next/router

        // only then you can add button onClick thing , useState , useEffect  , useRef etc


export default function Signup(){

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const router = useRouter();         // work kind of same as useNavigate thing (but in nextjs)

 

    return <div className="w-screen h-screen flex justify-center items-center">

        <div className="border m-4 p-2">

            <input ref={usernameRef} type="text" placeholder="username"  className="bg-slate-800 mb-2 text-center"/>
            <br />
            <input ref={passwordRef} type="password" placeholder="password" className="bg-slate-800 text-center"/>
            <br />
            <button onClick={ async ()=> {

                await axios.post("http://localhost:3000/api/v1/signup"
                    ,{
                        username : usernameRef.current?.value,
                        password : passwordRef.current?.value

                    
                })
                    router.push("/signin");             // push to /signin after onclick thing 

            }} className="bg-blue-500 w-44 mt-2">Sign up</button>

        </div>
    </div>
}