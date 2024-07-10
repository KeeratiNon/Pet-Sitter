import React, { useState } from "react";

const LastnameForm = () => {
  const [formData, setFormData] = useState({
    last_name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     setFormData({
//       last_name: "",
//     });
//   };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        Lastname*
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
};

export default LastnameForm;