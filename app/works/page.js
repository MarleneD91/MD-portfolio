import React from 'react'
import Image from 'next/image'

import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

//Illustrations
import LeftSakura from '@/public/images/left-sakura.png'
import RightSakura from '@/public/images/right-sakura.png'

//<main> components
import Carousel from '@/components/works/Carousel'
import WhatIUse from '@/components/works/WhatIUse'

//data [Carousel + tehnos/tools icons]
import dataTest from '@/public/dataTest'
import { technoData } from '@/public/data/technoListData.js'
import { toolData } from '@/public/data/toolListData.js'


const Works = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header/>
      <main>
        <p className='font-gentium italic font-normal text-base mt-5 text-center'>Vous trouverez ici un aperçu des différents projets sur lesquels j’ai travaillé.<br/>
        N’hésitez pas à cliquer sur le lien des repositories Github associés! </p>
        <div className='flex flex-row justify-between my-6'>
          <Image src={LeftSakura} height={400} width={350} alt="Illustration made by MD of a right-facing sakura branch" className='-ml-[70px]'/>
          <Carousel images={dataTest}/>
          <Image src={RightSakura} height={400} width={350} alt="Illustration made by MD of a left-facing sakura branch" className='-mr-[70px]'/>
        </div>
        <WhatIUse elements={technoData} key={technoData.id} categoryName="Technologies "/>
        <WhatIUse elements={toolData} key={toolData.id} categoryName="Outils "/>
      </main>
      <Footer/>
    </div>
  )
}

export default Works