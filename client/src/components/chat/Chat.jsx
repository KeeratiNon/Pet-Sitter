import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import PetSitter from "./PetSitter";
import HeaderPetSitter from "./HeaderPetSitter";
import FooterPetSitter from "./FooterPetSitter";
import MainChat from "./MainChat";
import { getToken } from "../../utils/localStorage.mjs";
import axios from "axios";
import { SERVER_API_URL } from "../../core/config.mjs";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [chatRoomList,setChatRoomList] = useState([])

  const getChatRoomList = async() => {
    const results = await axios.get(`${SERVER_API_URL}/chatrooms/list`)
    setChatRoomList(results.data)
    console.log(results)
  }

  const setupSocket = () => {
    const token = getToken();
    if (token) {
      const newSocket = io("http://localhost:4000", {
        query: {
          token,
        },
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        console.log("Socket Disconnected!");
      });

      newSocket.on("connect", () => {
        console.log("Socket Connected!");
      });

      setSocket(newSocket);
    }
  };

  useEffect(() => {
    getChatRoomList()
    if (!socket) {
      setupSocket();
    }
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return (
    <div className="flex">
      <section className="bg-black py-[40px] max-w-[368px] h-screen">
        <h3 className="text-white mx-[40px] mb-[24px] text-[24px] leading-[32px] font-bold">
          Messages
        </h3>
        <div className="flex flex-col gap-[8px]">
          <PetSitter />
          <PetSitter />
          <PetSitter />
          <PetSitter />
        </div>
      </section>
      <section className="flex flex-col w-[100%]">
        <header>
          <HeaderPetSitter />
        </header>
        <main className="flex flex-1 p-[40px]">
          <MainChat socket={socket}/>
        </main>
        <footer>
          <FooterPetSitter socket={socket}/>
        </footer>
      </section>
    </div>
  );
};

export default Chat;
