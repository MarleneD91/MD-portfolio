"use client"

import React, { useState, useEffect } from 'react'

import Gallery from '@/components/admin/works-management/Gallery'

import { CgMathPlus } from "react-icons/cg"
import { FaPowerOff } from "react-icons/fa"
import AddWorkForm from './works-management/AddWorkForm'

const Dashboard = ({onLogout}) => {

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  const logout = () => {
    onLogout()
  }

  const [addWorkModal, setAddWorkModal] = useState(false)

  const manageAddModal = () => {
    setAddWorkModal(!addWorkModal)
  }

  return (
    <div className='grid grid-cols-4 h-full' >
      {addWorkModal ? <AddWorkForm/> : null}
        <div className='col-span-3 m-4'>
            <div className='m-4 font-sansita text-5xl tracking-wider'>Galerie</div>
            <Gallery/>
        </div>
        <div className='border-l-2 flex flex-col my-6 justify-center items-center' onClick={manageAddModal}>
            <CgMathPlus className='text-6xl'/>
            <div className='m-4 font-sansita text-3xl tracking-wide'>Ajouter</div> 
        </div>
        <div className='fixed top-6 right-6'  onClick={logout}>
            <FaPowerOff className='text-4xl'/>
        </div>
    </div>
  )
  }


export default Dashboard