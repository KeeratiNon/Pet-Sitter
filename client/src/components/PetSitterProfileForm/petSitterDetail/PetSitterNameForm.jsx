import React, { useState } from 'react';

function PetSitterNameForm() {
  const [petSitterName, setPetSitterName] = useState('');

  const handleInputChange = (event) => {
    setPetSitterName(event.target.value);
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Submitted:', petSitterName);
//     setPetSitterName('');
//   };

  return (
    <form>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px] basis-1">
        Pet sitter name (Trade Name)*
        <input
          type="text"
          value={petSitterName}
          onChange={handleInputChange}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </form>
  );
}

export default PetSitterNameForm;