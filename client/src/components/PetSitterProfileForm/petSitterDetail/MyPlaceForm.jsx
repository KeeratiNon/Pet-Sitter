import React, { useState } from 'react';

const MyPlaceForm = () => {

    const [myPlace, setMyPlace] = useState('');
  
    const handleChange = (e) => {
      setMyPlace(e.target.value);
    };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log("My Place:", myPlace);
    // };
  
    return (
      <form>
        <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px] basis-1">
          My Place (Describe your place)
          <textarea
            type="text"
            name="my_place"
            value={myPlace}
            onChange={handleChange}
            className="border border-gray-200 rounded-[8px] h-[140px] p-[12px] text-[16px] leading-[24px] font-normal"
          />
        </label>
      </form>
    );
  };
  
  export default MyPlaceForm;