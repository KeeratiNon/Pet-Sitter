import React from "react";

const PrimaryButton = (props) => {
  return (
    <button className="bg-orange-500 px-[24px] py-[12px] rounded-full flex justify-center items-center gap-[8px] hover:bg-orange-400 active:bg-orange-600 w-[100%]">
      {props.svg&&<span>{props.svg}</span>}
      <span className="text-white font-bold">{props.text}</span>
    </button>
  );
};

export default PrimaryButton;