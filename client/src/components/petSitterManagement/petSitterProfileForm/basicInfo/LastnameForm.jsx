import React from "react";

const LastnameForm = ({ handleLastName, lastName }) => {
  return (
    <div>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        Lastname*
        <input
          type="text"
          name="last_name"
          value={lastName}
          onChange={handleLastName}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </div>
  );
};

export default LastnameForm;
