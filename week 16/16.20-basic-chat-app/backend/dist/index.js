"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
// Create a new WebSocket server instance on port 8000
const wss = new ws_1.WebSocketServer({ port: 8000 });
wss.on("connection", function (socket) {
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
// server respond 
