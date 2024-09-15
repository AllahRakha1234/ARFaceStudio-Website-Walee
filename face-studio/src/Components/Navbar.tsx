import React from 'react'

const Navbar = () => {
  return (
    <div className='border-1 p-3  bg-white text-black flex flex-row items-center justify-between'>
      <img src="/walee-logo.png" className='w-[10%] h-[10%]' alt="Logo" />
      
      <ul className='flex text-lg items-center mx-4 flex-row gap-8'>
        <li className='relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300'>
          My Assets
        </li>
        <li className='relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300'>
          About us
        </li>
        <li className='relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300'>
          Services
        </li>
        <li className='relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300'>
          Contact us
        </li>
      </ul>
    </div>
  )
}

export default Navbar
