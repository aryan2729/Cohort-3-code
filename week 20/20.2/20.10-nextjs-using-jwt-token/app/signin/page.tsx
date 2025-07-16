// In nextjs, if you want to use server side rendering than 
// -> You cant use the localStorage + header approach , 
// You have to use something else 
    
"use client"
import axios from "axios";

export default  function Signin() {


    return  <div className=" flex justify-center mt-50">

        <div className="border m-4 p-2">

            <input type="text" placeholder="username"  className="bg-slate-800 mb-2 text-center"/>
            <br />
            <input type="password" placeholder="password" className="bg-slate-800 text-center"/>
            <br />
            <button  onClick={ async() => {
                const response = await axios.post("http://localhost:3000/api/signin", {
                    
                    username : "fjdfd",
                    password : "fdkfd"
                })

                localStorage.setItem("token", response.data.token );  // storing token in localStorage
            }}  
            
            className="bg-blue-500 w-44 mt-2">Sign in </button>

        </div>
    </div>


    
}