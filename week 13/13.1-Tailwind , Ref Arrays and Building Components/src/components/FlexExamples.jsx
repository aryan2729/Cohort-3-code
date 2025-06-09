

function FlexExamples(){

    return <>
    <h2 className="flex justify-center text-black-700 text-xl ">Flex example below</h2>
    {/* 300-> is level of darkness in that colour ( max 950 and min 50 ) */}


      {/* <div style={{ display:"flex" , justifyContent :"space-between"    below in tailwing */}
      <div className='flex justify-between '>
        <div className="bg-red-300 " > This </div>  {/* 300-> is level of dark that colour ( max 900 and min 100 ) */}
        <div className="bg-green-300"> is </div>
        <div className="bg-blue-300" > flex </div> 
      </div>

    </>

}

export default FlexExamples;