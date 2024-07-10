import React, { useState } from "react";

function AccountNumberForm() {
  const [formData, setFormData] = useState({
    account_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
  };
  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px] basis-1/2">
        Account Number
        <input
          type="tel"
          name="account_number"
          value={formData.account_number}
          onChange={handleChange}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
}

export default AccountNumberForm;
