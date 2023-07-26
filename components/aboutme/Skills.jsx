import React from 'react'

import Image from 'next/image'

import BlackPath from '@/public/images/blackPath.png'

const Skills = () => {
  return (
    <div className='flex flex-col justify-center'>
        <h2 className='font-sansita font-bold text-5xl p-4 mb-4 text-center'>Compétences.</h2>
        <Image src={BlackPath} height={450} className='place-self-center' alt='Black waving path to symbolize a tree stem' />
    </div>
  )
}

export default Skills