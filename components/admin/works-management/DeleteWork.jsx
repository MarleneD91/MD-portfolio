import React from 'react'

import { FaTrashAlt } from 'react-icons/fa'

const DeleteWork = (workId) => {

    const handleWorkDeletion = async () => {
        const confirmDeletion = confirm("Êtes vous sûr.e de vouloir supprimer ce projet ?")
    
        if(confirmDeletion){
          const res = await fetch("api/works/" + workId,{
            method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          })
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