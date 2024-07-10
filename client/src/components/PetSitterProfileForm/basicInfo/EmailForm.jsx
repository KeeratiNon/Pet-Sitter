import React, { useState } from 'react';

function EmailForm() {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Email ที่ส่งไป:', email);
//   };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px] basis-1/2">
        Email*
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
}

export default EmailForm;