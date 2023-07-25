import React from 'react'
import Image from 'next/image'

import { FaCircle } from "react-icons/fa";

//logos technos
import BlackGithub from '@/public/icons/black-github.png'
import BlackLinkedin from '@/public/icons/black-linkedin.png'

const Footer = () => {
  return (
    <div className='bg-green-light grid grid-cols-3 p-3'>
        <div className='font-gentium p-1 justify-self-start text-footer-txt'>
            <p>© Marlène DIAZ | 2023</p>
        </div>
        <div className='align-middle grid grid-cols-3 gap-0.1 justify-self-center items-center'>
            <a href="github link"><Image src={BlackGithub} height={35} /></a>
            <FaCircle className='text-xs justify-self-center'/>
            <a href="linkedin link"><Image src={BlackLinkedin} height={35}/></a>
        </div>
    </div>
  )
}

export default Footer