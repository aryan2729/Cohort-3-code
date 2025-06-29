import { WebSocketServer } from "ws";


// Create a new WebSocket server instance on port 8000
const wss = new WebSocketServer({port:8000});

wss.on("connection" , function(socket){

    socket.on("message" , (e) => {    // Add an event listener for new client connections   
        if(e.toString()==="ping"){
            socket.send("pong");
        }
    })
})

// server respond 