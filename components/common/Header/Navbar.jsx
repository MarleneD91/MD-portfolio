"use client"

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FaHome, FaInfo, FaLaptopCode, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  const currentRoute = usePathname();
  const regularStyle = 'px-6 tablet:px-3 mobile:p-2 mobile:px-2.5 mobiles:mx-4 mobile-sm:px-1 mobiles:flex mobiles:flex-col mobiles:items-center mobiles:justify-end'
  const activeLink = regularStyle + ' underline underline-offset-8 mobiles:no-underline mobiles:border-x-[2px] ';
  const screenSize = window.innerWidth
    return (
    <nav className='font-sansita font-bold text-[25px] flex justify-between tracking-wider p-4 pr-0 tablet:text-2xl tablet:p-3 tablet:w-auto  mobile:text-3xl mobile-sm:p-1 mobile-sm:text-[28px]'>
        <Link href="/" className={currentRoute === '/' ? activeLink : regularStyle}>
          {(screenSize < 581 & currentRoute === '/') ? <h2 className='text-sm mb-1'>ACCUEIL</h2> : null}
          {screenSize > 580 ? 'Accueil' : <FaHome/>}
        </Link>
        <Link href="/aboutme" className={currentRoute === '/aboutme' ? activeLink : regularStyle }>
          {(screenSize < 581 & currentRoute === '/aboutme') ? <h2 className='text-sm mb-1'>PRÉSENTATION</h2> : null}
          {screenSize > 580 ? 'Présentation' : <FaInfo className='mb-0.5'/>}
        </Link>
        <Link href="/works" className={currentRoute === '/works' ? activeLink : regularStyle }>
          {(screenSize < 581 & currentRoute === '/works') ? <h2 className='text-sm mb-1'>RÉALISATIONS</h2> : null}
          {screenSize > 580 ? 'Réalisations' : <FaLaptopCode/>}
        </Link>
        <Link href="/contact" className={currentRoute === '/contact' ? activeLink : regularStyle }>
          {(screenSize < 581 & currentRoute === '/contact') ? <h2 className='text-sm mb-1'>CONTACT</h2> : null}
          {screenSize > 580 ? 'Contact' : <FaEnvelope/>}
        </Link>
    </nav>
  )
}

export default Navbar