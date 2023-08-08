"use client"

import React from 'react'

import Image from 'next/image'

import LightModePortrait from '@/public/images/portrait-light-v.png'
import DarkModePortrait from '@/public/images/portrait-dark-v.png'

import { TypeAnimation } from 'react-type-animation';

import ThemeImg from '../common/ThemeImg'

const WhoAmI = () => {
  return (
    <div className='flex flex-row justify-around content-center'>
        <div className='text-center w-7/12 mt-5'>
            <h2 className='font-sansita font-bold text-5xl mb-6'>Qui suis-je ?</h2>
            <TypeAnimation className='font-gentium text-lg' style={{whiteSpace: 'pre-line'}} 
            sequence={[`Je suis Marlène D., ravie de vous rencontrer!\nAnciennement Professeur des Écoles, j’ai choisi de me consacrer pleinement à un domaine qui m’attirait depuis longtemps : le développement web.
               Vous trouverez ici mon parcours et les compétences que j’ai pu acquérir.
                N’hésitez pas à me contacter pour plus d’informations ! `]}
                wrapper='span'
                speed={50}
            />
        </div>
        <div className='relative group'>
          <div className='w-48 h-48 rounded-full border-4 border-black dark:border-white m-12 overflow-hidden'>
            <ThemeImg LightImage={LightModePortrait} DarkImage={DarkModePortrait} 
                      altDark={"Portrait of Marlène.D made by herself (graphical illustration)"} altLight={"Portrait of Marlène.D made by herself (graphical illustration)"}
                      height={400} width={400}
                      className="w-5/6 h-4/6"/>
            
          </div>
          <span className="absolute bottom-5 left-14 scale-0 rounded bg-purple-dark p-1 text-[10px] font-roboto text-white group-hover:scale-100">✨ Je me suis même dessinée !✨</span>
        </div>
         
    </div>
  )
}

export default WhoAmI