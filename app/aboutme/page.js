import React from 'react'

import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

import WhoAmI from '@/components/aboutme/WhoAmI'

const AboutMe = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
    <Header/>
      <main>
        <WhoAmI />
      </main>
    <Footer/>
  </div>
  )
}

export default AboutMe