// start -> npm init -y , npm install typescript  ,npx tsc --init , npm install ws @types/ws  then go oto tsconfig rootDir:"./src" & outDir:"./dist" then go to package.json and add script dev -> npx tsc -b && node ./dist/index.js

// ( WebSockets ) -> Use WebSockets for real-time, two-way communication in apps like chats, online games, live sports scores, trading platforms, multiplayer whiteboards, or collaborative coding tools.
// (interview) Long polling -> is less efficient as it creates repeated HTTP requests, increasing latency and server load.
// (REST API) -> is a way for clients and servers to communicate over HTTP using standard methods like GET, POST, PUT, DELETE—ideal for request-response interactions, not real-time updates. happens in express

// ws -> WebSockets

import { WebSocketServer } from "ws";


const wss = new WebSocketServer({port: 8080 });   // if wanna go to server go postman then click new left above click websocket server but don't write http:// etc write -> ws://localhost:8080


wss.on("connection" , function(socket){

    console.log("user connected");

    // setInterval(() => {
    //     socket.send("Current price of solana is "+Math.random());   //sending by the server in every 2sec
    // }, 200);


    socket.on("message" , (e)=> {       // client response come here when he wrote something (e) = variable response 
        
        if(e.toString()==="ping"){       // clinet ping send pong recieve 
            socket.send("pong");
        }
    })
    
})
 // -> ws://localhost:8080
