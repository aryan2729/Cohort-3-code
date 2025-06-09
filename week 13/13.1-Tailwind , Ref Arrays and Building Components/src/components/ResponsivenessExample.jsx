function ResponsivenessExample(){

    return <>
    

        <h2 className="flex justify-center text-black-700 text-xl ">Responsiveness example below</h2>


        {/* this sm(small screen ) : works as conditional thing but if it size is >=640px then it shows pink colour otherwise it shows blue colour  */}
        <div className=" sm:bg-pink-500 bg-blue-500"> Hi </div>
        <br/>

        {/* xl(1280px) : if it screen have >=1280px then it shows yellow , if it have md:(medium) >=768px then it shows green , if it have sm: >=640px then it shows blue otherwise pink  */}
        <div className="xl:bg-yellow-500  md:bg-green-600  sm:bg-blue-600 bg-pink-400"> Hello </div>


        <br/> <br/> <br/> 

        <div className=" grid grid-cols-12 ">      {/* total 12 cols */}

            {/* if it have sm >=640px then it use col-span-12 otherwise it use col-span-5 only  */}
            <div className="bg-green-400 sm:col-span-12 col-span-5">Hi there from the first div</div>
            <div className="bg-red-400   sm:col-span-12 col-span-5">Hi there from the second div</div>
            <div className="bg-blue-400  sm:col-span-12 col-span-2">Hi there from the third div </div>

        </div>

        <br/> <br/> <br/>
        {/*example of text colour and font size  */}
        <div className="text-red-600  text-2xl  bg-yellow-300">hello chaning text colour and font size </div>

    </>
}

/*
Breakpoint prefix	Minimum width	CSS
        sm	             640px	  @media (min-width: 640px) { ... }
        md	             768px	  @media (min-width: 768px) { ... }
        lg	             1024px	  @media (min-width: 1024px) { ... }
        xl	             1280px	  @media (min-width: 1280px) { ... }
        2xl	             1536px	  @media (min-width: 1536px) { ... }
*/

export default ResponsivenessExample;