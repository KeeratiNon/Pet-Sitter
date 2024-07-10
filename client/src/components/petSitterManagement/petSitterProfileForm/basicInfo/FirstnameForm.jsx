import React from 'react';

const FirstnameForm = ({ handleFirstName, firstName }) => {
  return (
    <div>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        Firstname*
        <input
          type="text"
          name="first_name"
          value={firstName}
          onChange={handleFirstName}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </div>
  );
};

export default FirstnameForm;
