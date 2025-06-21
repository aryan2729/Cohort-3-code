// cancatenation thing 
// ❌ let fullname = FIrst name + lastName 
// ✅ let fullname =  `${firstName} ${lastName}`     ` -> come from 1 number left button 
//using tailwind css

import type { ReactElement } from "react";

interface Buttonprop {
    variant : "primary"| "secondary";
    text : string ;
    startIcon : ReactElement;
}

const variantStyles = {
    primary : "bg-purpleLow text-purpleMid",
    secondary : "bg-purpleHigh text-white"
}

// (justify-center)-> for horizontal center align & (item-center)-> for vertically center align
const defaultStyle = "px-4 py-2 rounded-md font-light flex item-center"


export function Button( props : Buttonprop){

    return <button className= {` ${variantStyles[props.variant]}  ${defaultStyle} `}>

        <div className="pr-2 pt-0.5">
            {props.startIcon}
        </div>
        {props.text}

        

    </button>
}