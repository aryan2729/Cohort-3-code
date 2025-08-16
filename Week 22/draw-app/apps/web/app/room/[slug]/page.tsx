import axios from "axios";
import { BACKEND_URL } from "../../config";
import { ChatRoom } from "../../components/ChatRoom";



async function getRoomId(slug: string) {
    const response = await axios.get(`${BACKEND_URL}/room/${slug}`);
    console.log(response.data);

    // Type assertion for response.data
    const data = response.data as { room?: { id: string } | null };

    if (!data.room || !data.room.id) {
        console.error("Room not found for slug:", slug, "Response:", response.data);
        return null;
    }

    return data.room.id;
}

export default async function ChatRoom1({
    params
}: {
    params: {
        slug: string
    }
}) {
    const slug = (await params).slug;
    const roomId = await getRoomId(slug);

    if (!roomId) {
        return <div>Room not found.</div>;
    }

    return <ChatRoom id={roomId}/>
}