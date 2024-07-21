import React, { useEffect } from "react";
import PetSitter from "./PetSitter";
import HeaderPetSitter from "./HeaderPetSitter";
import FooterPetSitter from "./FooterPetSitter";
import MainChat from "./MainChat";
import { useSocket } from "../../contexts/socket";

const Chat = () => {

  const {socket, chatRoomList, selectedChatRoom, historyMessage, newMessage, setNewMessage, getChatRoomList, setupSocket, joinChatRoom, getMessages, sendMessage} = useSocket()

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
                  historyMessage={historyMessage}
                  getMessages={getMessages}
                  chatRoomId={selectedChatRoom}
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
