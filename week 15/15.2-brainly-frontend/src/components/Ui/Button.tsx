// cancatenation thing 
// ❌ let fullname = FIrst name + lastName 
// ✅ let fullname =  `${firstName} ${lastName}`     ` -> come from 1 number left button 
//using tailwind css
import type { ReactElement } from "react";





interface ButtonProps {                // Interface & types week 14
    variant : "primary" | "secondary";
    size : "md" | "sm" | "lg";
    text : string ;
    startIcon ? : ReactElement;                    // ? means its not mandatory to give 
    endIcon ? : ReactElement; 
    onClick : () => void ;              // () => void means it returns void   but it can call any function etc           
    
}


const variantStyles ={                          // here we defined style if variant primary or secondary
    "primary" : "bg-purple-dark  text-white  ",
    "secondary" : "bg-purple-light text-purple-mid ",
    
}

const defualtStyles= "rounded-xl flex "

const sizeStyles = {
    "sm" : "px-3 py-2",
    "md" : "px-4 py-2 ",
    "lg" : "py-4 px-6"
}



export const Button = ( props : ButtonProps) => {       // props type is ButtonProps 

    return <button className =  { `${variantStyles[props.variant]}  ${defualtStyles}  ${sizeStyles[props.size]} `  } > 

    {props.startIcon ? <div className="pr-2 pt-1"> { props.startIcon} </div> : null}                     
    {props.text}
    {props.endIcon ? <div className="pl-2 pt-1"> { props.endIcon} </div> : null }            

    </button>   // these prop we take from user in app.tsx files typescript 
}


// you have used  ` -> come from 1 number left button 

// use heroic icons for icon  use svg thing and copy it to icons file