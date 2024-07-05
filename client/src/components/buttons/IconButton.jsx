import React from 'react'

const IconButton = (props) => {
  return (
    <button className="bg-orange-100 px-[20px] py-[20px] w-[60px] h-[60px] flex justify-center items-center rounded-full">
      {props.svg&&<span>{props.svg}</span>}
    </button>
  )
}

export default IconButton