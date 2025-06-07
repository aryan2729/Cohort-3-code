import {RecoilRoot , useRecoilValue , useRecoilState} from 'recoil'
import { notifications , totalNotificationSelector } from './atom'

function App(){

  return (
    <>

    <RecoilRoot>

      <MainApp />

    </RecoilRoot>
    
    </>
  )
}


function MainApp(){

  const [networkCount , setNetworkCount] = useRecoilState(notifications);   // Use the useRecoilState hook to get the current value of the notifications atom and the setNetworkCount 

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);


  return <div>

      <button>Home</button>

      <button>My Networks ({networkCount.network >= 100 ? "99+" : networkCount.network }) </button>

      {/* Render the Jobs button with the job count */}
      <button>Jobs ({networkCount.jobs}) </button>
      <button>Messaging({networkCount.messaging}) </button>
      <button>Notifications({networkCount.noticications}) </button>

      <button>Me ({totalNotificationCount}) </button>
      

  </div>
}


export default App;