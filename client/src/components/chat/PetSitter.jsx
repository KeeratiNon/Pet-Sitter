import React from 'react'
import SnowbellRabbit from "../../assets/images/snowbell-rabbit.gif"

const PetSitter = () => {

  return (
    <button className="bg-black flex items-center gap-[12px] py-[16px] pr-[24px] pl-[40px] hover:bg-gray-500 focus:bg-gray-500 cursor-pointer">
        <img src={SnowbellRabbit} alt="SnowbellRabbit" width="60px" height="60px" className='border-[1px] border-gray-600 rounded-full' />
        <p className='text-white text-[16px] leading-[28px] font-medium w-[232px] flex justify-start'>Snowbell Rabbit</p>
    </button>
  )
}

export default PetSitter