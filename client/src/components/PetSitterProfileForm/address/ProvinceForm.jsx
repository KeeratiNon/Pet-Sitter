import React, { useState } from 'react';

const ProvinceForm = () => {
  const [province, setProvince] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Province:", province);
//   };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        Province*
        <input
          type="text"
          name="province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
};

export default ProvinceForm;