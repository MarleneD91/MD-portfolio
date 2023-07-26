import React from 'react'

//NextJS Image component
import Image from 'next/image'

//Font Awesome Icon
import { FaCircle } from "react-icons/fa";
//Footer Logos
import BlackGithub from '@/public/icons/black-github.png'
import BlackLinkedin from '@/public/icons/black-linkedin.png'

const Footer = () => {
  return (
    <div className='bg-green-light grid grid-cols-3 p-3'>
      <div className='font-gentium p-1 justify-self-start text-footer-txt'>
        <p>© Marlène DIAZ | 2023</p>
      </div>
      <div className='align-middle grid grid-cols-3 gap-0.1 justify-self-center items-center'>
        <a href="github link"><Image src={BlackGithub} height={35} alt='Logo of Github, black version, associated to a link to the author`s github profile' /></a>
        <FaCircle className='text-xs justify-self-center'/>
        <a href="linkedin link"><Image src={BlackLinkedin} height={35} alt='Logo of Linkedin, black version, associated to a link to the author`s linkedin profile'/></a>
      </div>
    </div>
  )
}

export default Footer