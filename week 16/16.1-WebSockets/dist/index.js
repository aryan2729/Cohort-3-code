"use strict";
// start -> npm init -y , npm install typescript  ,npx tsc --init , npm install ws @types/ws  then go oto tsconfig rootDir:"./src" & outDir:"./dist" then go to package.json and add script dev -> npx tsc -b && node ./dist/index.js
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 }); // if wanna go to server go postman then click new left above click websocket server but don't write http:// etc write -> ws://localhost:8080
wss.on("connection", function (socket) {
    console.log("user connected");
    // setInterval(() => {
    //     socket.send("Current price of solana is "+Math.random());   //sending by the server in every 2sec
    // }, 200);
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
// -> ws://localhost:8080
