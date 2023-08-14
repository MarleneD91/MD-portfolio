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

  const getWorksData = async () =>{
    const res = await fetch('/api/works',{
      method: 'GET',
      headers: {
        "Content-type": "application/json",
      },
    })
    const resData = res.json()
    return resData
  }
  const getWorks = getWorksData();
  console.log(getworks)

  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header/>
      <main>
        <p className='font-gentium italic font-normal text-base mt-5 text-center'>Vous trouverez ici un aperçu des différents projets sur lesquels j’ai travaillé.<br/>
        N’hésitez pas à cliquer sur le lien des repositories Github associés! </p>
        <div className='flex flex-row justify-between my-6'>
          <Image src={LeftSakura} width={350} alt="Illustration made by MD of a right-facing sakura branch" className='-ml-[70px] h-[400px]'/>
          <Carousel works={getWorks}/>
          <Image src={RightSakura} width={350} alt="Illustration made by MD of a left-facing sakura branch" className='-mr-[70px] h-[400px]'/>
        </div>
        {/*<Description elements={dataTest}/>*/}
        <WhatIUse elements={technoData} key={technoData.id} categoryName="Technologies "/>
        <WhatIUse elements={toolData} key={toolData.id} categoryName="Outils "/>
      </main>
      <Footer/>
    </div>
  )
}

export default Works