import { WebSocketServer , WebSocket} from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { prismaClient } from "@repo/db/client";


const wss = new WebSocketServer({port : 8080});

interface User {
    ws : WebSocket , 
    rooms : string[],
    userId : string 
}

const users : User[] = []; 

function checkUser( token : string ) : string | null {
    const decoded = jwt.verify(token , JWT_SECRET as string ); 

    if(typeof decoded =="string" ){
        return null ;
    }

    if(!decoded || !decoded.userId ){
        return null;
    }

    return decoded.userId;
}


wss.on("connection" , function connection(ws , request ){

    const url = request.url;        // ws://localhost:8080?token="fkdkdkj"
    if(!url){
        return ;
    }

    const queryParams = new URLSearchParams(url.split('?')[1] );    // means it spilt in array like ["ws://localhost8080" , "token = kdfdkjfkdf"]
    const token = queryParams.get('token') || "";
    const userId = checkUser(token);

    if(userId == null){
        ws.close();
        return null;
    }

    users.push({
        userId , 
        rooms : [],
        ws
    })

    
    ws.on("message" , async function message(data) {
        
        const parsedData = JSON.parse(data as unknown as string);
        

        if(parsedData.type === "join_room"){
            const user = users.find( x => x.ws === ws );
            user?.rooms.push(parsedData.roomId);
        }

        if(parsedData.type === "leave_room"){
            const user = users.find( x => x.ws === ws );
            if(!user){
                return ;
            }

            user.rooms = user?.rooms.filter(x => x === parsedData.room);
        }

        if(parsedData.type === "chat"){
            const roomId = parsedData.roomId;
            const message = parsedData.message;

            await prismaClient.chat.create({
                data : {
                    roomId ,
                    message : message , 
                    userId

                }
            })
            

            users.forEach(user => {                 // for each means in every element in array  
                if(user.rooms.includes(roomId)){
                    user.ws.send(JSON.stringify({
                        type : "chat",
                        message : message , 
                        roomId : roomId
                    }))
                }
            })

        }
        
        
    })
})