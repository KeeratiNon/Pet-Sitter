import React, { useState } from "react";
import PostMsg from "../../assets/svgs/postmsg.svg";
import UploadImg from "../../assets/svgs/uploadimg.svg";

const FooterPetSitter = (socket) => {
  const [message, setMessage] = useState("")

  const sendMessage = () => {
    if (socket) {
      socket.emit("chatRoomMessage", {
        chatRoomId,
        message: message
      })
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div className="flex justify-between gap-[24px] items-center py-[24px] px-[40px]">
        <button className="bg-gray-100 p-[14px] rounded-full">
          <img src={UploadImg} alt="" width="20.85px" height="18px" />
        </button>
        <span className=" py-[10px] flex flex-1">
          <input
            type="text"
            placeholder="Message here..."
            className="placeholder-gray-600 w-[100%] outline-none"
            onChange={(e)=> setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </span>
      <button className="p-[12px] bg-orange-500 rounded-full" onClick={sendMessage}>
        <img
          src={PostMsg}
          alt="close"
        />
      </button>
    </div>
  );
};

export default FooterPetSitter;
