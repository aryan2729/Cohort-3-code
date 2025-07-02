import { all } from "axios";
import { error } from "console";
import { WebSocketServer , WebSocket } from "ws";

const wss = new WebSocketServer({port : 8080});

// Define a User interface to type the connection information
// Each user has a WebSocket connection and belongs to a specific room
interface User{
    socket : WebSocket;
    room : string ;
}

let allSockets : User[] = [];   // Array to store all active WebSocket connections and their assigned room no.



wss.on("connection" , function(socket){

    socket.on("message" , (message) =>{
        const parsedMessage = JSON.parse(message as unknown as string);     // we recieve data in string even when we send in object ok so here we're converting that string to object again 

        if(parsedMessage.type === "join"){

            allSockets.push({
                socket ,
                room : parsedMessage.payload.roomId
            })

        }
        if(parsedMessage.type === "chat"){

            let CurrentRoom = null;
            for(let i = 0; i<allSockets.length; i++){          // Find the room of the user who sent the message
                if(allSockets[i].socket == socket ){
                    CurrentRoom = allSockets[i].room
                }
            }

            for(let i = 0; i<allSockets.length ; i++){         // Broadcast the message to all users in the same room
                if(allSockets[i].room == CurrentRoom ){
                    allSockets[i].socket.send(parsedMessage.payload.message)        //then that room send messsage 
                }
            }          
        }
    })
})

// {
//     "type" : "Join" ,
//     payloard : {
//         roomId: "1244" 
//     }
// }

// {
//     "type" : "chat" ,
//     "payload" : {
//         message : "kfdjfkdjfd hi there "
//     }

// }