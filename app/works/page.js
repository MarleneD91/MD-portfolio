import React from 'react'

import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

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
        <div className='flex flex-row'>
          <Carousel images={dataTest}/>
        </div>
        <WhatIUse elements={technoData} categoryName="Technologies "/>
        <WhatIUse elements={toolData} categoryName="Outils "/>
      </main>
      <Footer/>
    </div>
  )
}

export default Works