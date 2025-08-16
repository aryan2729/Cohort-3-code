import axios from "axios"

import { ChatRoomClient } from "./ChatRoomClient";
import { BACKEND_URL } from "../config";




type ChatsResponse = {
    messages: any[]; // Replace 'any' with your actual message type if available
};

async function getChats(roomId: string) {
    const response = await axios.get<ChatsResponse>(`${BACKEND_URL}/chats/${roomId}`);
    return response.data.messages;
}

export async function ChatRoom({id}: {
    id: string
}) {
    const messages = await getChats(id);
    return <ChatRoomClient id={id} messages={messages} />
}