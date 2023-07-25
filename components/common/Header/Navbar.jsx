import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='font-sansita w-800 text-2xl flex justify-between tracking-wider p-6'>
        <Link href="/" className='px-6'>Accueil</Link>
        <Link href="/aboutme" className='px-6'>Présentation</Link>
        <Link href="/works" className='px-6'>Réalisations</Link>
        <Link href="/contact" className='px-6'>Contact</Link>
    </nav>
  )
}

export default Navbar