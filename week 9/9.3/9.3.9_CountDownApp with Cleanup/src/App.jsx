import { useState , useEffect } from "react";


function App(){

  const [showTimer , setShowTimer] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setShowTimer(currentValue => !currentValue);     // this will change true to false 
    }, 5000 );                                      // every 5 seconds 
  },[])

    return(  <div>
            { showTimer && <Timer /> }       {/* when showTimer true then it works only */}
            </div>)
}


const Timer = function(){         // component

    const [ seconds , setSeconds ]= useState(0);

    useEffect( function() {
        let clock = setInterval(function(){
          console.log("from inside clock");             //🔥 this clock keep running if we stop the timmer so for stop that we need to use cleaup which used below in return function  thing 
          setSeconds(previous => previous + 1);
        } , 1000);

        return function(){          // cleanup function 
          clearInterval(clock);     // it stops the whole clock so now above console not loged when stopped 

        }
    },[] );

    return <div>{seconds} seconds elapsed</div>;
}


export default App