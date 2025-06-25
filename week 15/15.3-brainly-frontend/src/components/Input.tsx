interface InputProps{
    placeholder : string ;
    ref ? : any;
    className? : string ;
}

export function Input(  {placeholder , ref , className}  : InputProps){

    return <div>
        <input ref={ref}   type="text" placeholder={placeholder} className={`px-4 py-2 rounded-3xl m-2 border flex flex-col items-center w-full text-center ${className }`}  />
    </div>
}