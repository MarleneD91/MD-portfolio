import React from 'react'

import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

import Slider from '@/components/works/Slider'

const Works = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header/>
      <main>
        <p className='font-gentium italic font-normal text-base self-start text-center'>Vous trouverez ici un aperçu des différents projets sur lesquels j’ai travaillé.<br/>
        N’hésitez pas à cliquer sur le lien des repositories Github associés! </p>
        <div className='flex flex-row'>
          <Slider/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Works