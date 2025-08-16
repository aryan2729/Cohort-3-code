import { useEffect, useState } from "react";
import { WS_URL } from "../config";


export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0ZmY3YWI1ZS00ZjQ0LTQ4MTEtOGRhYi01ZGQ2YTlhNDA3YWYiLCJpYXQiOjE3NTUxNjQ1OTF9.wyqX3HGWnVrjlIvm3qIiI7I8vHQ3EuQ_muc9e2juCYM`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }

}