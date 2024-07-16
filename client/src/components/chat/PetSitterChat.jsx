import React from "react";
import SnowbellRabbit from "../../assets/images/snowbell-rabbit.gif";

const PetSitterChat = () => {
  return (
    <div className="w-[100%] flex items-end gap-[12px]">
      <span>
        <img
          src={SnowbellRabbit}
          alt="Snowbellrabbit"
          width="40px"
          height="40px"
          className="rounded-full"
        />
      </span>
      <span className="bg-white text-gray-900 py-[16px] px-[24px] rounded-[24px] rounded-bl-none border-[1px] border-gray-200">
        Snowbell Rabbit
      </span>
    </div>
  );
};

export default PetSitterChat;
