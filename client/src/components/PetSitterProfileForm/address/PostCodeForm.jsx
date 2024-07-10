import React, { useState } from 'react';

function PostCodeForm() {
  const [postCode, setPostCode] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Post Code:', postCode);
//   };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        Post code*
        <input
          type="tel"
          name="post_code"
          value={postCode}
          onChange={(e) => setPostCode(e.target.value)}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
}

export default PostCodeForm;