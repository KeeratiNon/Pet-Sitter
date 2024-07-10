import React, { useState } from 'react';

const ExpForm = () => {
  const [formData, setFormData] = useState({
    experience: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        Experience*
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        >
          <option value="" disabled hidden>Select Experience</option>
          <option value="0-2 Years">0-2 Years</option>
          <option value="3-5 Years">3-5 Years</option>
          <option value="5+ Years">5+ Years</option>
        </select>
      </label>
    </form>
  );
};

export default ExpForm;