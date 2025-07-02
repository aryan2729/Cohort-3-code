import { useEffect, useRef, useState } from "react"

function App() {

  const [ messages , setMessages ] = useState(["Hello from server!"]);  


  const inputRef = useRef<HTMLInputElement>(null);
  const wsRef = useRef<WebSocket>(null); 



  useEffect(()=>{

    const ws = new WebSocket("ws://localhost:8080");

    // Handle incoming messages from server
    ws.onmessage = (event) => {
      setMessages(x => [...x , event.data]); // Add new message to messages to existing message array 
    }

    wsRef.current = ws ;  // Store WebSocket connection in ref for later use


    ws.onopen = () =>{     // can't directly .send cuz we don't know server running or not 
      ws.send(JSON.stringify({
        type : "join",
        payload : {
          roomId : "red"
        }
      }))
    }

    // Cleanup: close WebSocket when component unmounts
    return () =>{

     ws.close();
    }

  }, []);   // Empty dependency arry means it runs on mount of App component means at starting 



  


  return (
    
    <div className=" h-screen bg-black">
        <br/><br/><br/>

      <div className="h-[80vh] ">

        {/* Display all messages */}
        {messages.map(message => <div className="m-8">
          <span className="bg-white text-black rounded p-4 ">
            {message}
          </span>
          </div>)}

      </div>

      <div className="w-full bg-white flex w-fit h-fit ">

        <input ref={inputRef}   className="flex-1 p-4  text-center" type="text" placeholder="Write message....." />
        
        <button onClick={()=>{

          const message = inputRef.current?.value;

          if(!wsRef.current){
            return 
          }
          
          wsRef.current.send(JSON.stringify({
            type : "chat",
            payload : {
              message : message
            }
          }))
          
        }} className="bg-purple-600 text-white p-4 cursor-pointer">Send Message </button>

      </div>

    </div>
  )
}



export default App
