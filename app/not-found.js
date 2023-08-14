import React from 'react'

import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

import Black404 from '@/public/images/404-black-ivy.png'
import White404 from '@/public/images/404-white-ivy.png'

import ThemeImg from '@/components/common/ThemeImg'

export default function Custom404() {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Header/>
            <main className='flex flex-col items-center'>
                <ThemeImg
                    LightImage={Black404}
                    DarkImage={White404}
                    height={400}
                    width={600}
                    altLight={'BLack 404 illustration with climbing ivy'}
                    altDark={'White404 illustration with climbing ivy'}
                    className='w-600 -p-10 -my-24' 
                />
                <p className='font-gentium font-bold tracking-wide text-xl mb-6'>La page que vous recherchez n’existe pas!</p>
                <a href='/' className='font-roboto text-sm italic underline underline-offset-4 mt-6 mb-10'><p>Retourner à l'accueil</p></a>
            </main>
            <Footer/>
        </div>
    )
  }
