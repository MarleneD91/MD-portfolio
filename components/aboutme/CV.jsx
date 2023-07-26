import React from 'react'

//Font Awesome pdf icon
import { FaFilePdf } from 'react-icons/fa'

const CV = () => {
  return (
    <div className='flex flex-col items-center mb-12 mt-5'>
        <h2 className='font-sansita font-bold text-5xl p-4 mb-4 text-center'>Mon CV.</h2>
        <a href="CVofMD"><FaFilePdf className='text-7xl'/></a>
    </div>
  )
}

export default CV