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
  const [chatRoomList, setChatRoomList] = useState([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [historyMessage, setHistoryMessage] = useState([]);

  const getChatRoomList = async () => {
    try {
      const results = await axios.get(`${SERVER_API_URL}/chatrooms/list`);
      setChatRoomList(results.data);
    } catch (error) {
      console.error("Failed to fetch chat rooms", error);
    }
  };

  const getMessages = async (chatRoomId) => {
    const data = { chatRoomId: chatRoomId };
    try {
      const results = await axios.post(
        `${SERVER_API_URL}/chatrooms/messages`,
        data
      );
      setHistoryMessage(results.data.data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    }
  };

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
        // console.log("Socket Disconnected!");
      });

      newSocket.on("connect", () => {
        // console.log("Socket Connected!");
      });

      newSocket.on("message", (message) => {
        console.log("New message received:", message);
        setNewMessage((prevMessages) => [...prevMessages, message]);
      });

      setSocket(newSocket);
    }
  };

  useEffect(() => {
    getChatRoomList();
    if (!socket) {
      setupSocket();
    }
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  const joinChatRoom = (chatRoomId, targetId) => {
    setSelectedChatRoom({ chatRoomId, targetId });
    socket.emit("joinRoom", { chatRoomId, targetId });
  };

  const sendMessage = (chatRoomId) => {
    if (newMessage.trim()) {
      socket.emit("sendMessage", {
        chatRoomId: selectedChatRoom,
        targetId: chatRoomId.targetId,
        message: newMessage,
      });
      setNewMessage("");
      getMessages(chatRoomId.chatRoomId)
    }
  };

  return (
    <div className="flex h-[calc(100dvh-72px)]">
      <section className="bg-black py-[40px] max-w-[368px]">
        <h3 className="text-white mx-[40px] mb-[24px] text-[24px] leading-[32px] font-bold">
          Messages
        </h3>
        {chatRoomList.map((chatRoom) => {
          return (
            <ul className="flex flex-col gap-[8px]" key={chatRoom.chatRoom}>
              <li
                onClick={() => {
                  joinChatRoom(chatRoom.chatRoom, chatRoom.targetId);
                  getMessages(chatRoom.chatRoom);
                }}
              >
                <PetSitter chatRoom={chatRoom} />
              </li>
            </ul>
          );
        })}
      </section>
      <section className="flex flex-col w-[100%]">
        <main className="flex">
          {selectedChatRoom && (
            <div className="flex flex-col w-full">
              <div>
                <HeaderPetSitter />
              </div>
              <div className="flex flex-1 ">
                <MainChat
                  chatRoomId={selectedChatRoom}
                  historyMessage={historyMessage}
                  getMessages={getMessages}
                />
              </div>
              <hr className="border-t-[1px] border-gray-200" />
              <div className="py-[24px] px-[40px]">
                <FooterPetSitter
                  chatRoomId={selectedChatRoom}
                  sendMessage={sendMessage}
                  newMessage={newMessage}
                  setNewMessage={setNewMessage}
                />
              </div>
            </div>
          )}
        </main>
      </section>
    </div>
  );
};

export default Chat;
