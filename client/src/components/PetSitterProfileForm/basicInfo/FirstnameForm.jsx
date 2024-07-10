import React, { useState } from "react";

const FirstnameForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   setFormData({
  //     first_name: "",
  //   });
  // };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        Firstname*
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
};

export default FirstnameForm;
