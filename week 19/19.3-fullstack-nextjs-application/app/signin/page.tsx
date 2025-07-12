"use client"        // only then you can add button onClick thing , useState , useEffect  , useRef etc

export default function Signin(){

    return <div className="w-screen h-screen flex justify-center items-center">

        <div className="border m-4 p-2">

            <input type="text" placeholder="username"  className="bg-slate-800 mb-2 text-center"/>
            <br />
            <input type="password" placeholder="password" className="bg-slate-800 text-center"/>
            <br />
            <button onClick={()=> {

            }} className="bg-blue-500 w-44 mt-2">Sign in </button>

        </div>
    </div>
}