import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config";

const wss = new WebSocketServer({port : 8080});

wss.on("connection" , function connection(ws , request ){

    const url = request.url;        // ws://localhost:8080?token="fkdkdkj"
    if(!url){
        return ;
    }

    const queryParams = new URLSearchParams(url.split('?')[1] );    // means it spilt in array like ["ws://localhost8080" , "token = kdfdkjfkdf"]
    const token = queryParams.get('token') || "";
    const decoded = jwt.verify(token , JWT_SECRET);

    if(!decoded || !(decoded as JwtPayload).userId){
        ws.close();
        return;
    }
    
    ws.on("message" , function message(data) {
        ws.send('pong');
    })
})