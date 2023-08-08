import React from 'react'

import Image from 'next/image'

import { FaTrashAlt, FaPencilAlt } from "react-icons/fa"



const WorkCard = ({works}) => {
  return (
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
            <div className='flex flex-row text-l mt-2 items-center'>
              <FaPencilAlt className='mr-2'/> <span>Éditer</span>
            </div>
            {/* Add an onclick fonction to open a modal to edit the project -the supp/edit modal can be a component!? */}
            <div className='flex flex-row text-l mt-2 items-center'>
              <FaTrashAlt className='mr-2' />  <span>Supprimer</span>
            </div>
            {/* Add an onclick fonction to open a modal to supp the project */}
          </div>
        </div>
      )}
    </>
  )
}

export default WorkCard