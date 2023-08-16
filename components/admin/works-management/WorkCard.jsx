"use client"

import React, { useState } from 'react'

import Image from 'next/image'

import { FaTrashAlt, FaPencilAlt } from "react-icons/fa"

import EditWorkForm from "@/components/admin/works-management/EditWorkForm"

const WorkCard = ({works}) => {

  const [editWorkModal, setEditWorkModal] = useState(false)
  const manageEditModal = () => {
    setEditWorkModal(!editWorkModal)
  }

  const handleWorkDeletion = async () => {
    const confirmDeletion = confirm("Êtes vous sûr.e de voulr supprimer ce projet ?")

    if(confirmDeletion){
      const res = await fetch("api/works/:id",{
        method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      })
    }
  }

  return (
    <>
      {editWorkModal ? <EditWorkForm/> : <></>}
      <>
        {works.map(work =>
          <div className='w-5/6 h-5/6 m-4  bg-light-gray-form dark:bg-dark-gray-form p-4 rounded-md' key={work.title}>
            <Image src={work.picture} height={300} width={300} alt={work.title} className='h-1/2 w-full object-cover mb-3'/>
            <hr className='w-5/6'/>
            <div className='text-xs my-3 line-clamp-3'>
              {work.description}
            </div>
            <hr className='w-5/6'/>
            <div>
              <div className='flex flex-row text-l mt-2 items-center' onClick={manageEditModal}>
                <FaPencilAlt className='mr-2'/> <span>Éditer</span>
              </div>
              <div className='flex flex-row text-l mt-2 items-center' onClick={handleWorkDeletion}>
                <FaTrashAlt className='mr-2'/>  <span>Supprimer</span>
              </div>
            </div>
          </div>
        )}
      </> 
    </>
  )
}

export default WorkCard