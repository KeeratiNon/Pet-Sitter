import React, { useState } from 'react';

const DistrictForm = () => {
  const [district, setDistrict] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('District:', district);
//   };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        District*
        <input
          type="text"
          name="district"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
};

export default DistrictForm;