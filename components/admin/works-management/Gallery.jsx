"use client"

import React from 'react'

import EditWorkForm from './EditWorkForm'
import DeleteWork from './DeleteWork'

import { useState, useEffect } from 'react'
import Image from 'next/image'


const Gallery = () => {

  const [works, setWorks] = useState()

  const getWorksData = async () => {
    const res = await fetch('../api/works',{
      method: 'GET',
      headers: {
        "Content-type": "application/json",
      },
    })
    const resData = await res.json()
    console.log(resData)
    setWorks(resData)
    console.log(works)
  }

  useEffect(()=>{    
    getWorksData()
   }, [])

  return (
    <div className='grid grid-cols-3 grid-rows-2 w-full h-auto justify-self-center'>
      {works && works.map(work =>
            <div className='w-5/6 h-5/6 m-4  bg-light-gray-form dark:bg-dark-gray-form p-4 rounded-md' key={work._id}>
            <Image src={work.imageUrl} height={300} width={300} alt={work.title} className='h-1/2 w-full object-cover mb-3' />
            <hr className='w-5/6'/>
            <div className='text-xs my-3 line-clamp-3'>
              {work.description}
            </div>
            <hr className='w-5/6'/>
            <EditWorkForm selectedWorkId={work._id} />
            <DeleteWork workInfo={work._id} />
          </div>
      )}
    </div>
  )
}

export default Gallery