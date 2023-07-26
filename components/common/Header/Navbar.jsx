"use client"

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const currentRoute = usePathname();
  const regularStyle = 'px-6';
  const activeLink = regularStyle + ' underline underline-offset-8';
    return (
    <nav className='font-sansita font-bold text-[25px] flex justify-between tracking-wider p-4 pr-0'>
        <Link href="/" className={currentRoute === '/' ? activeLink : regularStyle }>Accueil</Link>
        <Link href="/aboutme" className={currentRoute === '/aboutme' ? activeLink : regularStyle }>Présentation</Link>
        <Link href="/works" className={currentRoute === '/works' ? activeLink : regularStyle }>Réalisations</Link>
        <Link href="/contact" className={currentRoute === '/contact' ? activeLink : regularStyle }>Contact</Link>
    </nav>
  )
}

export default Navbar