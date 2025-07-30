import React from 'react'

const Category = ({image,text}) => {
  return (
    <div className=''>
        <a href="" className='flex flex-col gap-2 justify-center items-center'>
            <img src={image} alt="" className='w-17 h-17'/>
            <p className='font-semibold text-sm '>{text}</p>
        </a>
    </div>
  )
}

export default Category