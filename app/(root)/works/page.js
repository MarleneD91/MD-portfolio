"use client"

import Image from 'next/image'

//Common
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

//Illustrations
import LeftSakura from '@/public/images/left-sakura.webp'
import RightSakura from '@/public/images/right-sakura.webp'

//main components
import Carousel from '@/components/works/Carousel'
import WhatIUse from '@/components/works/WhatIUse'

//data [Carousel + tehnos/tools icons]
import { technoData } from '@/public/data/technoListData.js'
import { toolData } from '@/public/data/toolListData.js'

export const metadata = {
  title: 'Marlène DIAZ || Mes réalisations',
  description: "Quelles sont mes compétences ? Avec un aperçu des projets que j'ai réalisés, c'est encore mieux!",
}

const Works = () => {

  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header/>
      <main className='mobiles:flex mobiles:flex-col  mobiles:items-center mobiles:-my-5'>
        <Image src={LeftSakura} width={160} height={180} alt="Illustration made by MD of a right-facing sakura branch" className='hidden mobiles:flex rotate-90 h-[180px] w-[144px] mobile-sm:h-[160px] mobile-sm:w-[128px]' priority={false} />
        <p className='font-gentium italic font-normal text-base mt-5 text-center tablet:text-sm mobile:text-sm mobiles:mx-2 mobile-sm:text-[12px] mobile-sm:mt-3 mobile-sm:leading-5'>Vous trouverez ici un aperçu des différents projets sur lesquels j’ai travaillé.<br/>
        N’hésitez pas à cliquer sur le lien des repositories Github associés! </p>
        <div className='flex flex-row justify-between my-6 mobiles:justify-center mobiles:mb-2'>
          <Image src={LeftSakura} width={160} height={180} alt="Illustration made by MD of a right-facing sakura branch" className='h-[200px] sm-devices:w-[120px] sm-devices:h-[150px] mobiles:hidden w-auto' priority={false} />
          <Carousel />
          <Image src={RightSakura} width={160} height={180} alt="Illustration made by MD of a left-facing sakura branch" className='h-[200px] sm-devices:w-[120px] sm-devices:h-[150px] mobiles:hidden w-auto' priority={false} />
        </div>
        <WhatIUse elements={technoData} key={technoData.id} categoryName="Technologies "/>
        <WhatIUse elements={toolData} key={toolData.id} categoryName="Outils "/>
        <Image src={RightSakura} width={160} height={180} alt="Illustration made by MD of a left-facing sakura branch" className='hidden mobiles:flex rotate-90 h-[180px] w-[144px] mobile-sm:h-[160px] mobile-sm:w-[128px]' priority={false} />
      </main>
      <Footer/>
    </div>
  )
}

export default Works