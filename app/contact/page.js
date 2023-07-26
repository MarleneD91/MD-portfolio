import React from 'react'

import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

const Contact = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
    <Header/>
    <main>
    <p className='font-gentium italic font-normal text-base self-start text-center'>Vous souhaitez me contacter ? N’hésitez pas à m’envoyer un message à l’aide du formulaire ci-dessous. <br/>
     Je m’engage à vous répondre dans les plus brefs délais. </p>
    </main>
    <Footer/>
  </div>
  )
}

export default Contact