import React from 'react'

import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

import Image from 'next/image'

import Black404 from '@/public/images/404-black-ivy.png'
import White404 from '@/public/images/404-white-ivy.png'

export default function Custom404() {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Header/>
            <main className='flex flex-col items-center'>
                <Image src={Black404} alt='404 illustration with climbing ivy' height={600} className='w-600 -p-10 -my-24 dark:hidden' />
                <Image src={White404} alt='404 illustration with climbing ivy' height={600} className='w-600 -p-10 -my-24 hidden dark:block' />
                <p className='font-gentium font-bold tracking-wide text-xl mb-6'>La page que vous recherchez n’existe pas!</p>
                <a href='/' className='font-roboto text-sm italic underline underline-offset-4 mt-6 mb-10'><p>Retourner à l'accueil</p></a>
            </main>
            <Footer/>
        </div>
    )
  }
