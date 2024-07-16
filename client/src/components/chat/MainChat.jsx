import React, { useEffect, useState } from "react";
import UserChat from "./UserChat";
import PetSitterChat from "./PetSitterChat";

const MainChat = ({socket}) => {
  const [chatRoom, setChatRoom] = useState([])

  useEffect(()=>{
    if (socket) {
      socket.on("newMessage",()=>{
        console.log("newMessage")
      })
    }
  },[socket])

  return (
    <div className="flex flex-col gap-[24px] w-[100%]">
      <div className="flex justify-end">
        <UserChat />
      </div>
      <div className="flex">
        <PetSitterChat />
      </div>
    </div>
  );
};

export default MainChat;
