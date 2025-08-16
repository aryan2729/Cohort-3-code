"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // not router


export default function Home() {

  const [roomId , setRoomId] = useState("");
  const router = useRouter();

  return (
    <div style={{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      height: "100vh",
      width : "100vw"
    }}>
      
      <input value={roomId} onChange={(e)=> {
        setRoomId(e.target.value);
      }} type="text" placeholder="Room id" style={{height:23 , padding:4}} />

      <button style={{padding : 7 , height:28 , }}
       onClick={()=> {
        router.push(`/room/${roomId}`)
      }}>Join room </button>
    </div>
  );
}
