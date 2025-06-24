interface InputProps{
    placeholder : string ;
    ref ? : any;
}

export function Input(  {placeholder , ref}  : InputProps){

    return <div>
        <input ref={ref}  type="text" placeholder={placeholder} className="px-4 py-2 rounded m-2 border" />
    </div>
}