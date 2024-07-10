import React, { useState } from 'react';

const IntroductionForm = () => {
  const [introduction, setIntroduction] = useState('');

  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Introduction:', introduction);
//   };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        Introduction (Describe about yourself as pet sitter)
        <textarea
          type="text"
          name="introduction"
          value={introduction}
          onChange={handleIntroductionChange}
          className="border border-gray-200 rounded-[8px] h-[140px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
};

export default IntroductionForm;