interface sizeStyle {
    size : "md" | "lg" | "sm";
}

const sizeVariants = {
    sm : "size-2 ",
    md : "size-4",
    lg : "size-6"
}


export const PlusIcon = ( prop : sizeStyle ) => {

return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={sizeVariants[prop.size]} >
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>


}

