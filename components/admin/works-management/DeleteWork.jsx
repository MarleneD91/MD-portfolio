"use client"

import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'

import { FaTrashAlt } from 'react-icons/fa'

const DeleteWork = (workInfo) => {
  const [isConnected, setIsConnected] = useState()
  useEffect(() => {
    setIsConnected(localStorage.getItem("token"))
  })

  const router = useRouter()
  
  const workId = Object.values(workInfo)[0]

  const handleWorkDeletion = async () => {
    if(isConnected){
      const confirmDeletion = confirm("Êtes vous sûr.e de vouloir supprimer ce projet ?")
      
      if(confirmDeletion){
        const res = await fetch("api/works/" + workId, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        })

        if(res.status === 200){
          alert("Work deleted!") 
          router.push("/admin")
        } else {
          alert("Something went wrong while creating the project.")
        }
      }
    }
  }

  return (          
    <div className='flex flex-row text-l mt-2 items-center' onClick={handleWorkDeletion}>
        <FaTrashAlt className='mr-2'/>  
        <span>Supprimer</span>
    </div>
  )
}

export default DeleteWork