import React, { useState } from 'react';

const SubDistrictForm = () => {
  const [subDistrict, setSubDistrict] = useState('');

  const handleSubDistrictChange = (e) => {
    setSubDistrict(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Sub-district:', subDistrict);
//   };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        Sub-district*
        <input
          type="text"
          name="sub_district"
          value={subDistrict}
          onChange={handleSubDistrictChange}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
};

export default SubDistrictForm;