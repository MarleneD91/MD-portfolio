import React from 'react'

import Gallery from '@/components/admin/works-management/Gallery'

import { CgMathPlus } from "react-icons/cg"
import { FaPowerOff } from "react-icons/fa"

const Dashboard = () => {
  return (
    <div className='grid grid-cols-4 h-full'>
        <div className='fixed top-6 right-6'>
            <FaPowerOff className='text-4xl'/>
            {/* Add link to logout and go back to home page ! */}
        </div>
        <div className='col-span-3 m-4'>
            <h2 className='m-4 font-sansita text-5xl tracking-wider'>Galerie</h2>
            <Gallery/>
        </div>
        <div className='border-l-2 flex flex-col my-6 justify-center items-center'>
            <CgMathPlus className='text-6xl'/>
            <h2 className='m-4 font-sansita text-3xl tracking-wide'>Ajouter</h2>
        </div>
    </div>
  )
}

export default Dashboard