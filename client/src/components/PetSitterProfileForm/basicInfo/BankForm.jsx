import React, { useState } from "react";

function BankForm() {
  const [selectedBank, setSelectedBank] = useState("");

  const handleBankChange = (e) => {
    setSelectedBank(e.target.value);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('Selected Bank:', selectedBank);
  //   };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px] basis-1/2">
        Bank
        <select
          name="bank"
          value={selectedBank}
          onChange={handleBankChange}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        >
          <option value="" disabled selected hidden></option>
          <option value="Bangkok Bank">Bangkok Bank</option>
          <option value="Bank of Ayudhya">Bank of Ayudhya</option>
          <option value="CIMB Thai Bank">CIMB Thai Bank</option>
          <option value="ICBC Thai">ICBC Thai</option>
          <option value="Kasikornbank">Kasikornbank</option>
          <option value="Kiatnakin Phatra Bank">Kiatnakin Phatra Bank</option>
          <option value="Krung Thai Bank">Krung Thai Bank</option>
          <option value="Land & Houses Bank">Land & Houses Bank</option>
          <option value="Siam Commercial Bank">Siam Commercial Bank</option>
          <option value="Standard Chartered Bank">
            Standard Chartered Bank
          </option>
          <option value="Tisco Bank">Tisco Bank</option>
          <option value="TMBThanachart Bank">TMBThanachart Bank</option>
          <option value="United Overseas Bank (Thai)">
            United Overseas Bank (Thai)
          </option>
          <option value="Thai Credit Bank">Thai Credit Bank</option>
        </select>
      </label>
    </form>
  );
}

export default BankForm;
