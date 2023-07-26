import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import Image from 'next/image'
import DarkLogo from '../../../public/images/dark-logo.png'

const Header = () => {
  return (
    <div className='bg-green-light text-black flex flex-row items-center justify-between p-3'>
      <a href="/" className="relative"><Image src={DarkLogo} width={100} height={102} alt='Logo of MD, black version, letters and Cymothoe (butterfly) in an arrow circle'/></a>
      <Navbar/>
    </div>
  )
}

export default Header