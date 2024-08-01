import React, { createContext, useContext, useEffect, useState } from "react";
import { SERVER_API_URL } from "../core/config.mjs";
import axios from "axios";
import { io } from "socket.io-client";
import { getToken } from "../utils/localStorage.mjs";
import { useNavigate } from "react-router-dom";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [chatRoomList, setChatRoomList] = useState([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const [historyMessage, setHistoryMessage] = useState([]);

  const navigate = useNavigate()

  useEffect(()=>{
    if (!socket) {
      setupSocket();
    }
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  },[socket])

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

      newSocket.on("newMessage", (message) => {
        setHistoryMessage((prevMessages) => [...prevMessages, message]);
      });

      newSocket.on("roomCreated", ({chatRoomId, targetId}) => {
        setSelectedChatRoom({chatRoomId, targetId})
        navigate("/chat")
      })

      setSocket(newSocket);
    }
  };

  const joinChatRoom = ({ chatRoomId, targetId, isReadCount }) => {
    let image = null
    {chatRoomList
      .filter((list) => list.targetId === targetId)
      .map((chatRoom) => {
        image = chatRoom.image
      })}
    setSelectedChatRoom({ chatRoomId, targetId, image });
    socket.emit("joinRoom", { chatRoomId, targetId, isReadCount });
  };

  const sendMessage = ({chatRoomId, images}) => {
    if (inputMessage.trim() || images) {
      socket.emit("sendMessage", {
        chatRoomId: selectedChatRoom,
        targetId: chatRoomId.targetId,
        message: inputMessage,
        images
      });
      setInputMessage("");
    }
  };

  return (
    <SocketContext.Provider
      value={{
        socket,
        chatRoomList,
        selectedChatRoom,
        historyMessage,
        inputMessage,
        setChatRoomList,
        setInputMessage,
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
