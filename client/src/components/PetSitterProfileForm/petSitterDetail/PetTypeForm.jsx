import React, { useState } from 'react';

const PetTypeForm = () => {
  const [selectedPets, setSelectedPets] = useState([]);
  const petOptions = ['Cat', 'Dog', 'Bird', 'Rabbit'];
  const [currentSelection, setCurrentSelection] = useState('');

  const handlePetSelect = (event) => {
    const selectedPet = event.target.value;
    if (selectedPet && !selectedPets.includes(selectedPet)) {
      setSelectedPets([...selectedPets, selectedPet]);
    }
    setCurrentSelection('');
  };

  const handlePetRemove = (pet) => {
    setSelectedPets(selectedPets.filter((item) => item !== pet));
  };

  return (
    <div className="flex flex-col gap-[4px]">
      <label className="text-[16px] leading-[24px] text-black font-medium">
        Pet type
      </label>
      <div className="border border-gray-200 rounded-[8px] h-auto p-[12px] text-black text-[16px] leading-[24px] font-normal flex flex-wrap items-center gap-[8px]">
        {selectedPets.map((pet, index) => (
          <div
            key={index}
            className="flex items-center rounded-[999px] px-[12px] py-[4px] text-[#E44A0C] bg-[#FFF1EC]"
          >
            {pet}
            <button
              className="ml-[8px]"
              onClick={() => handlePetRemove(pet)}
            >
              ×
            </button>
          </div>
        ))}
        <div className="flex-grow" />
        <select
          onChange={handlePetSelect}
          value={currentSelection}
          className="min-w-[120px]"
        >
          <option value="" disabled>
          </option>
          {petOptions.map((pet, index) => (
            <option key={index} value={pet}>
              {pet}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PetTypeForm;