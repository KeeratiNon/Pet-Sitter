import React from 'react'

const SocialButton = (props) => {
  return (
    <button className="bg-gray-100 text-gray-600 px-[24px] py-[12px] rounded-full flex justify-center items-center gap-[8px] hover:text-gray-400 active:text-gray-600">
      {props.svg&&<span>{props.svg}</span>}
      <span className="font-bold">{props.text}</span>
    </button>
  )
}

export default SocialButton