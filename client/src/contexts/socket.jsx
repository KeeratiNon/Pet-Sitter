import React, { createContext, useContext, useState } from "react";
import { SERVER_API_URL } from "../core/config.mjs";
import axios from "axios";
import { io } from "socket.io-client";
import { getToken } from "../utils/localStorage.mjs";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
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
      getMessages(chatRoomId.chatRoomId);
    }
  };

  return (
    <SocketContext.Provider
      value={{
        socket,
        chatRoomList,
        selectedChatRoom,
        historyMessage,
        newMessage,
        setNewMessage,
        getChatRoomList,
        setupSocket,
        joinChatRoom,
        getMessages,
        sendMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => useContext(SocketContext);

export { SocketProvider, useSocket };
