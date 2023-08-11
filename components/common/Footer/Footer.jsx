import React from 'react'

//Icons
import { FaCircle, FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandNextjs, TbHeartFilled } from "react-icons/tb";



const Footer = () => {
  return (
    <div className='bg-green-light dark:bg-purple-dark grid grid-cols-3 p-3'>
      <div className='font-gentium p-1 justify-self-start text-light-footer-txt dark:text-dark-footer-txt mt-2'>
        <p>© Marlène DIAZ | 2023</p>
      </div>
      <div className='align-middle grid grid-cols-3 gap-0.1 justify-self-center items-center text-4xl'>
        <a href="github link"><FaGithub /></a>
        <FaCircle className='text-xs justify-self-center'/>
        <a href="linkedin link"><FaLinkedin /></a>
      </div>
      <div className='font-gentium p-1 justify-self-end text-light-footer-txt dark:text-dark-footer-txt mt-2'>
        <p className='flex flex-row items-center'>Made with <span><TbHeartFilled className='text-red-700 mx-1'/></span> and <span><TbBrandNextjs className='mx-1 text-xl'/></span>.</p>
      </div>
    </div>
  )
}

export default Footer