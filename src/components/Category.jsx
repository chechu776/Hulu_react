import React from 'react'
import dropDown from "../assets/download (1).svg";

const Category = ({ image, text, data }) => {
  return (
    <>
      <div className='relative group'>
        <a href="" className='flex flex-col gap-2 justify-center items-center group'>
          <img src={image} alt="" className='w-17 h-17' />
          <p className='font-semibold text-sm flex items-center gap-1'>{text}{data ? <img src={dropDown} className='group-hover:rotate-180 group-hover:transition-all group-hover:duration-300' /> : ""}</p>
        </a>
        {data ?
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 bg-white shadow-lg rounded-md hidden group-hover:inline  transition-all duration-300 z-10">
            <ul className="flex flex-col text-sm">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="py-4 px-4 w-full hover:bg-blue-50 rounded cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          : ""}
      </div>

    </>
  )
}

export default Category