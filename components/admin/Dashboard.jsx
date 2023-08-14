"use client"

import React, { useState } from 'react'

import Gallery from '@/components/admin/works-management/Gallery'

import { CgMathPlus } from "react-icons/cg"
import { FaPowerOff } from "react-icons/fa"
import AddWorkForm from './works-management/AddWorkForm'

const Dashboard = () => {
  const logout = () => {
//Remove all from storage + go back to home page
    return('logout')
  } 

  const [addWorkModal, setAddWorkModal] = useState(false)

  const manageAddModal = () => {
    setAddWorkModal(!addWorkModal)
  }

  return (
    <div className='grid grid-cols-4 h-full' >
        <div className='fixed top-6 right-6'  onClick={logout}>
            <FaPowerOff className='text-4xl'/>
            {/* Add link to logout and go back to home page ! */}
        </div>
        <div className='col-span-3 m-4'>
            <h2 className='m-4 font-sansita text-5xl tracking-wider'>Galerie</h2>
            <Gallery/>
        </div>
        <div className='border-l-2 flex flex-col my-6 justify-center items-center' onClick={manageAddModal}>
            <CgMathPlus className='text-6xl'/>
            <h2 className='m-4 font-sansita text-3xl tracking-wide'>Ajouter</h2>
            {addWorkModal ? <AddWorkForm/> : null}
        </div>
    </div>
  )
}

export default Dashboard