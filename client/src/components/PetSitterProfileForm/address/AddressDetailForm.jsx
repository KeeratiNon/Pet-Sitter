import React, { useState } from 'react';

const AddressDetailForm = () => {
  const [addressDetail, setAddressDetail] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Address Detail:', addressDetail);
//   };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px] basis-1">
        Address Detail*
        <input
          type="text"
          name="address_detail"
          value={addressDetail}
          onChange={(e) => setAddressDetail(e.target.value)}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
};

export default AddressDetailForm;