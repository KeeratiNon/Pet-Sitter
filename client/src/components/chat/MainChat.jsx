import React, { useEffect, useRef } from "react";
import { useAuth } from "../../contexts/authentication";
import Message from "./Message";

const MainChat = ({ chatRoom, getMessages, historyMessage }) => {
  const chatContainerRef = useRef(null);
  const { state } = useAuth();

  useEffect(() => {
    getMessages(chatRoom.chatRoomId);
  }, [chatRoom.chatRoomId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [historyMessage]);

  return (
    <div
      ref={chatContainerRef}
      className="flex flex-col gap-[24px] w-[100%] overflow-y-scroll h-[calc(100dvh-266px)]"
    >
      <section className="flex flex-col w-full gap-[16px] p-[40px]">
        {historyMessage.map((message, index) => {
          return (
            <Message
              key={index}
              isSender={message.senderId === Number(state.user.id)}
              message={message.message}
              imageSrc={chatRoom.image}
              images={message.images}
            />
          )
})}
      </section>
    </div>
  );
};

export default MainChat;
