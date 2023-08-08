import React from 'react'
import WorkCard from './WorkCard'

import dataTest from "@/public/dataTest.json"

const Gallery = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 w-full h-auto justify-self-center'>
        <WorkCard works={dataTest}/>
    </div>
  )
}

export default Gallery