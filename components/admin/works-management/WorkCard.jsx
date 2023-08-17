"use client"

import Image from 'next/image'

import EditWorkForm from "./EditWorkForm"
import DeleteWork from './DeleteWork'

const WorkCard = ({works}) => {

  return (
      <>
        {works.map(work =>
        <>
          <div className='w-5/6 h-5/6 m-4  bg-light-gray-form dark:bg-dark-gray-form p-4 rounded-md' key={work._id}>
            <Image src={work.picture} height={300} width={300} alt={work.title} className='h-1/2 w-full object-cover mb-3' />
            <hr className='w-5/6'/>
            <div className='text-xs my-3 line-clamp-3'>
              {work.description}
            </div>
            <hr className='w-5/6'/>
              <EditWorkForm selectedWorkId={work._id} />
              <DeleteWork workId={work._id} />
          </div>
        </>
        )}
      </>
  )
}

export default WorkCard