import { useRef } from "react";
import { Button } from "./button";
import { useState } from "react";

export function Otp(){

    const[disabled , setDisabled] = useState(true);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();




    return <div className="flex justify-center">

        <SubOtpBox reference={ref1} onDone={()=>{
            ref2.current.focus();
        }} />
        <SubOtpBox reference={ref2}  onDone={()=>{
            ref3.current.focus();
        }}/>
        <SubOtpBox reference={ref3}  onDone={()=>{
            ref4.current.focus();
        }} />
        <SubOtpBox reference={ref4} onDone={()=>{
            ref5.current.focus();
        }} />
        <SubOtpBox  reference={ref5} onDone={()=>{
            ref6.current.focus();
        }}/>
        <SubOtpBox reference={ref6} onDone={()=>{
            setDisabled(false);
        }}/>

        <br/>

        <Button disabled={disabled}>Sign up </Button>


    </div>

}


function SubOtpBox({onDone , reference}){

   



    return <div>
        
         {/* onchange means whenever someone wrote something in this it called function onDone */}
        <input ref={reference} onChange={(e)=>{ onDone();
        }}
        className="w-[40px] h-[50px] bg-blue-500 rounded-2xl
        m-1  outline-none p-3  text-white" type="text"></input>

   


    </div>
}


export default Otp;