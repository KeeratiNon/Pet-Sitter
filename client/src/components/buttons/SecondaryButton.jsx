import React from 'react'

const SecondaryButton = (props) => {
  return (
    <button className="bg-orange-100 text-orange-500 px-[24px] py-[12px] rounded-full flex justify-center items-center gap-[8px] hover:bg-orange-100 hover:text-orange-400 focus:bg-orange-100 active:text-orange-600 w-[100%]">
      {props.svg&&<span>{props.svg}</span>}
      <span className="font-bold">{props.text}</span>
    </button>
  )
}

export default SecondaryButton