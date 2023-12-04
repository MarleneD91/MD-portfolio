"use client"

import LightModePortrait from '@/public/images/portrait-light.webp'
import DarkModePortrait from '@/public/images/portrait-dark.webp'

import { TypeAnimation } from 'react-type-animation';

import ThemeImg from '../common/ThemeImg'

const WhoAmI = () => {
  return (
    <div className='flex flex-row justify-around content-center mobiles:flex-col-reverse mobiles:items-center'>
        <div className='text-center w-7/12 mt-5 mobiles:w-5/6 mobiles:mb-3 tablet:ml-2'>
            <h2 className='font-sansita font-bold text-5xl mb-6 mobile-sm:text-4xl'>Qui suis-je ?</h2>
            <TypeAnimation className='font-gentium text-lg mobile-sm:text-base' style={{whiteSpace: 'pre-line'}} 
            sequence={[`Je suis Marlène D., ravie de vous rencontrer!\nAnciennement Professeur des Écoles, j’ai choisi de me consacrer pleinement à un domaine qui m’attirait depuis longtemps : le développement web.
               Vous trouverez ici mon parcours et les compétences que j’ai pu acquérir.
                N’hésitez pas à me contacter pour plus d’informations ! `]}
                wrapper='span'
                speed={75}
            />
        </div>
        <div className='relative group -z-10'>
          <div className='w-48 h-48 rounded-full border-4 border-black dark:border-white m-12 overflow-hidden mobiles:w-28 mobiles:h-28 mobiles:m-0 mobiles:mt-6'>
            <ThemeImg LightImage={LightModePortrait} DarkImage={DarkModePortrait} 
                      altDark={"Portrait of Marlène.D made by herself (graphical illustration)"} altLight={"Portrait of Marlène.D made by herself (graphical illustration)"}
                      fill
                      className="w-2/3 h-2/3"/>
            
          </div>
          <span className="absolute bottom-5 left-14 scale-0 rounded bg-purple-dark p-1 text-[10px] font-roboto text-white group-hover:scale-100">✨ Je me suis même dessinée !✨</span>
        </div>
         
    </div>
  )
}

export default WhoAmI
