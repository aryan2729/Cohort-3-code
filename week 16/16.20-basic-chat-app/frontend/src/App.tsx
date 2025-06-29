import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket , setSocket] = useState();    // default value 
  const inputRef = useRef();


  function sendMessage(){
  
    if(!socket){  // means if not message passed then return 
      return ;
    }
    // @ts-ignore
    const message = inputRef.current.value;

    //@ts-ignore
    socket.send(message);
  }


  // useEffect hook to establish the WebSocket connection when the component is mounted
  useEffect(()=> {   
    const ws = new WebSocket("ws://localhost:8000");  // Create a new WebSocket connection to the server
    
    // @ts-ignore
    setSocket(ws);

    ws.onmessage =(ev) =>{    // Event listener for receiving messages from the WebSocket server
      alert(ev.data);
    }

  }, [] )      // empty dependency array means it runs when app component mounts first time only


  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder='Message....' />
        <button onClick={sendMessage}>Submit</button>
      </div>
    </>
  )
}

export default App
