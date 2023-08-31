import React from 'react'

//Icons
import { FaCircle, FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandNextjs, TbHeartFilled } from "react-icons/tb";



const Footer = () => {
  return (
    <div className='bg-green-light dark:bg-purple-dark grid grid-cols-3 p-3 mobiles:px-0.5 mobile-sm:grid-cols-1 mobile-sm:grid-rows-3'>
      <div className='font-gentium p-1 justify-self-start text-light-footer-txt dark:text-dark-footer-txt mt-2 mobile:text-sm mobiles:mt-0 mobile-sm:row-span-1 mobile-sm:justify-self-center mobile-sm:order-3'>
        <p>© Marlène DIAZ | 2023</p>
      </div>
      <div className='align-middle grid grid-cols-3 gap-0.1 justify-self-center items-center text-4xl mobiles:text-3xl mobiles:gap-0 mobile-sm:my-1 mobile-sm:order-2'>
        <a href="https://github.com/MarleneD91" aria-label="link to Marlène D.'s github profile"><FaGithub /></a>
        <FaCircle className='text-xs justify-self-center mobiles:text-[8px]'/>
        <a href="https://www.linkedin.com/in/marl%C3%A8ne-diaz-cymothoe/" aria-label="link to Marlène D.'s linkedin profile"><FaLinkedin /></a>
      </div>
      <div className='font-gentium p-1 justify-self-end text-light-footer-txt dark:text-dark-footer-txt mt-2 mobile:text-sm mobiles:mt-0 mobile-sm:justify-self-center mobile-sm:order-1'>
        <p className='flex flex-row items-center'>Made with <span><TbHeartFilled className='text-red-700 mx-1 mobiles:mx-0.5 mobiles:text-sm'/></span> & <span><TbBrandNextjs className='mx-1 text-xl mobiles:mx-0.5 mobiles:text-lg'/></span>.</p>
      </div>
    </div>
  )
}

export default Footer