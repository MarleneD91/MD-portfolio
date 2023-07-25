import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Image from 'next/image'
import DarkLogo from '../../../public/images/dark-logo.png'

const Header = () => {
  return (
    <div className='bg-green-light text-black flex flex-row items-center justify-between p-3'>
      <a href="/" className="relative"><Image src={DarkLogo} alt="" width={100} height={102}/></a>
      <Navbar/>
    </div>
  )
}

export default Header