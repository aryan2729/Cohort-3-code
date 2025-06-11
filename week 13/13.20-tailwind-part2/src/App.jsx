import './App.css'

import SidebarClass1 from './components/answers/1-basic-project';

function App() {

  function toggle(){
    document.getElementById('toggleid').classList.toggle('dark');
  }

  return (
    <>
      <SidebarClass1/>

      {/* scroll on preview screen for see darkmode button  */}

      <div id="toggleid" className='h-screen text-black  bg-white  dark:bg-black dark:text-white'>
        <button onClick={toggle} className='bg-cyan-400'> click here  </button>
      </div>
    </>
  )
}

export default App
