function GridExamples(){

    return <>

        <h2 className="flex justify-center text-black-700 text-xl ">Grid example below</h2>
    {/* p2 is padding and 600 is darkness that colour */}
        
        {/* A grid container using Tailwind's grid layout system with 12 columns &  col-span-4 , 6 ,2 assigned mean that much space they carry of 12 | 12 means 1 whole line div*/}
        <div className="grid grid-cols-12">
            <div className="col-span-4  bg-blue-600 p-2">Hello</div>                 {/* A child div spanning 4 columns with a blue background and padding */}
            <div className="col-span-6  bg-red-600  p-2">This is </div>              {/* A child div spanning 6 columns with a red background and padding */}
            <div className="col-span-2  bg-yellow-600 p-2">Grid</div>                              {/* A child div spanning 2 columns with a yellow background and padding */}
        </div>
    
    </>
}

export default GridExamples;