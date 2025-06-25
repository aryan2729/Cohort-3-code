// cancatenation thing 
// ❌ let fullname = FIrst name + lastName 
// ✅ let fullname =  `${firstName} ${lastName}`     ` -> come from 1 number left button 
//using tailwind css

import type { ReactElement } from "react";

interface Buttonprop {
    variant : "primary"| "secondary" | "third";
    text : string ;
    startIcon ? : ReactElement;
    onClick ? : () => void ;        // means return void and not mandatory to pass onClick thing  
    fullWidth ? : boolean;
    loading ? : boolean;
    disabled?: boolean;
}

const variantStyles = {
    primary : "bg-purpleLow text-purpleMid",
    secondary : "bg-purpleHigh text-white",
    third : "bg-slate-700 text-white "
}

// (justify-center)-> for horizontal center align & (item-center)-> for vertically center align
const defaultStyle = "px-4 py-2 rounded-md font-light flex item-center cursor-pointer border-2 border-black"


export function Button( props : Buttonprop){

    return <button onClick={props.onClick} className= {` ${variantStyles[props.variant]}  ${defaultStyle} ${props.fullWidth ? "w-full flex justify-center items-center " : ""} ${props.loading ? "opacity-45" : ""} ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}  `} disabled={props.loading || props.disabled} >

        <div className="pr-2 pt-0.5">
            {props.startIcon}
        </div>
        {props.text}

        

    </button>
}