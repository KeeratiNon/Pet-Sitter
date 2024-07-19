import React, { useState } from "react";
import SnowbellRabbit from "../../assets/images/snowbell-rabbit.gif";
import Close from "../../assets/svgs/close.svg";

const HeaderPetSitter = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div className="bg-gray-100 flex justify-between items-center py-[24px] px-[40px]">
          <div className="flex items-center gap-[12px]">
            <img
              src={SnowbellRabbit}
              alt="SnowbellRabbit"
              width="48px"
              height="48px"
              className="border-[1px] border-gray-600 rounded-full"
            />
            <p className="text-black text-[24px] leading-[32px] font-bold">
              Snowbell Rabbit
            </p>
          </div>
          <img
            src={Close}
            alt="close"
            className="cursor-pointer"
            onClick={handleClose}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderPetSitter;
