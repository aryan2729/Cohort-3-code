import { RecoilRoot, useRecoilValue , useSetRecoilState } from "recoil";

import { networkAtom , jobsAtom , messagingAtom , notificationAtom } from "./atom";
// See atom.js file in src for Atom file 
// and Recoil only work in React 18 (change the dependencies in json file)


function App(){

  return (

      <RecoilRoot>        {/*don't forget to write this  */}
          <MainApp />
      </RecoilRoot>


    )
}


function MainApp(){

 const networkNotificationCount = useRecoilValue(networkAtom);
 const jobsAtomcount = useRecoilValue(jobsAtom);
 const messagingAtomcount = useRecoilValue(messagingAtom);
 const notificationAtomcount = useRecoilValue(notificationAtom);
 // const setJobcount = useSetRecoilState(jobsAtom); we can use tis setJobcount for updating the value of jobcount 
 // const [jobcount , setJob] = useRecoilstate(jobsAtom) ;   here setJob for changing it's value 
// Use the useRecoilState hook to get the current value and setter function of the messagingAtom atom
  

  return (
    <>

    <button>Home</button>
    
    <button>My Network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount })</button>
    <button>Jobs ({jobsAtomcount})</button>
    <button>Messaging({messagingAtomcount})</button>
    <button>Notification({notificationAtomcount})</button>

    <button>me</button>

    </>
  )
}



export default App;