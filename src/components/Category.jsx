import React from 'react'
import dropDown from "../assets/download.svg";

const Category = ({ image, text, data }) => {
  return (
    <div className=''>
      <a href="" className='flex flex-col gap-2 justify-center items-center'>
        <img src={image} alt="" className='w-17 h-17' />
        <p className='font-semibold text-sm '>{text}{data ? ">" : ""}</p>
      </a>
    </div>
  )
}

export default Category