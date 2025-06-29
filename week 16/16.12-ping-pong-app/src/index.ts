import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port : 8080});

wss.on("connection" , function(socket){

    socket.on("message" , (e) => {              // Add an event listener for messages received from the connected client
        
        if(e.toString()=== "ping" ){
            socket.send("pong")
        }
    })
})