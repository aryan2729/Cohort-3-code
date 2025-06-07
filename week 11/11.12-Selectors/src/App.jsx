import { RecoilRoot, useRecoilValue  } from "recoil";

import { networkAtom , jobsAtom , messagingAtom , notificationAtom , totalNotificationSelector} from "./atom";
import { useMemo } from "react";
// See atom.js file in src for Atom & selectors in file 
// and Recoil only work in React (18) (change the dependencies in json file)


function App(){

  return (


      <RecoilRoot>        
          <MainApp />
      </RecoilRoot>



    )
}


function MainApp(){

 const networkNotificationCount = useRecoilValue(networkAtom);
 const jobsAtomcount = useRecoilValue(jobsAtom);
 const messagingAtomcount = useRecoilValue(messagingAtom);
 const notificationAtomcount = useRecoilValue(notificationAtom);
// Calculate the total notification count by summing the networkNotificationCount, jobsAtomCount, notificationsAtomCou
//  const totalNotificationCount= useMemo(() =>{
//   return networkNotificationCount + jobsAtomcount + messagingAtomcount + notificationAtomcount;
//  }
//  },[networkNotificationCount , jobsAtomcount , messagingAtomcount, notificationAtomcount])  // Define the dependencies for the useMemo hook to recalculate the totalNotificationsCount when any of the atom values changes 

const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>



    <button>Home</button>
    
    <button>My Network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount })</button>
    <button>Jobs ({jobsAtomcount})</button>
    <button>Messaging({messagingAtomcount})</button>
    <button>Notification({notificationAtomcount})</button>

    <button>me ({totalNotificationCount})</button>

    </>
  )
}



export default App;