import React, { useEffect, useRef } from "react";
import { useAuth } from "../../contexts/authentication";

const MainChat = ({
  chatRoomId,
  getMessages,
  historyMessage,
}) => {

  const chatContainerRef = useRef(null)
  const {state} = useAuth()

  useEffect(() => {
    getMessages(chatRoomId.chatRoomId)
  }, [getMessages, chatRoomId.chatRoomId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [historyMessage]);

  return (
    <div ref={chatContainerRef} className="flex flex-col gap-[24px] w-[100%] overflow-y-scroll h-[calc(100dvh-266px)]">
      <section className="flex flex-col w-full gap-[16px] p-[40px]">
        {historyMessage.map((message, index) => (
          <div key={index} className={`flex w-full ${message.senderId === Number(state.user.id) && "justify-end" }`}>
            <div className={`flex ${message.senderId === Number(state.user.id) ? "justify-end bg-orange-600 text-white py-[16px] px-[24px] rounded-[24px] rounded-br-none" : "bg-white text-black py-[16px] px-[24px] rounded-[24px] rounded-bl-none border-[1px] border-gray-200" }`}>
              {message.message}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MainChat;
