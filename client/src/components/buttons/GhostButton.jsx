import React from 'react'

const GhostButton = (props) => {
  return (
    <button className="flex justify-center items-center gap-[4px] py-[4px] px-[2px]">
      {props.svg&&<span>{props.svg}</span>}
      <span className="text-orange-500 font-bold hover:text-orange-400 active:text-orange-600">{props.text}</span>
    </button>
  )
}

export default GhostButton