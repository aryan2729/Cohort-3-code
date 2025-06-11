import { useState } from 'react'
import { SidebarToggle } from './icons/sidebarToggle';
import './App.css'

function App() {

  const [sideBarOpen , setSideBarOpen] =useState(true);
  

  return <div className='flex'>

      <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>

      <MainContent sideBarOpen={sideBarOpen} />

    </div>
  
}


function Sidebar({sideBarOpen , setSideBarOpen}){

  if(!sideBarOpen){
    return <div className='fixed top-0 left-0 bg-white'>
        <div className='cursor-pointer hover:bg-grey-200' onClick={()=> setSideBarOpen(!sideBarOpen)}> 
            <SidebarToggle />
        </div>
    </div>
  }
  
  // else
  return <div className='w-96   h-screen  bg-cyan-300 fixed md:relative '>

    <div className='cursor-pointer hover:grey:200 ' onClick={()=> setSideBarOpen(!sideBarOpen)} >
      <SidebarToggle/>
    </div>

  </div>


}


function MainContent({sideBarOpen}){

  return <div className='w-full'>

    <div className='h-32 bg-black md:block  hidden'></div>

    <div className='grid grid-cols-14 gap-8 p-8  '>   {/* -translate-y-18 means above 24px top thats y - use first */}

      <div className=' -translate-y-18 md:col-span-4 col-span-14 shadow-lg  h-80  bg-pink-300 rounded-2xl shadow  hidden md:block'>  
          
      </div>
      <div className='h-96 bg-red-300 md:col-span-6 col-span-14 rounded-2xl shadow shadow-lg '>

      </div>
      <div className='h-96 bg-blue-300 md:col-span-4 col-span-14 rounded-2xl shadow shadow-lg '>

      </div>

    </div>

  </div>
}

export default App
