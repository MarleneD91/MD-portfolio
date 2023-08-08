import React from 'react'

import Navbar from './Navbar'

import ThemeImg from '../ThemeImg'
import BlackLogo from '@/public/images/dark-logo.png'
import WhiteLogo from '@/public/images/white-logo.png'

const Header = () => {
  return (
    <div className='bg-green-light  dark:bg-purple-dark flex flex-row items-center justify-between p-3 w-auto'>
      <a href="/" className="relative">
        <ThemeImg LightImage={BlackLogo}
                  DarkImage={WhiteLogo}
                  height={102}
                  width={102}
                  altLight={'Logo of MD, black version, MD letters and Cymothoe (butterfly) in an arrowed circle'} 
                  altDark={'Logo of MD, white version, MD letters and Cymothoe (butterfly) in an arrowed circle'}
                  className='h-auto'
        />
        {/*<Image src={DarkLogo} height={102} alt='Logo of MD, black version, MD letters and Cymothoe (butterfly) in an arrow circle' className='h-auto block dark:hidden'/>
        <Image src={WhiteLogo} height={102} alt='Logo of MD, white version, MD letters and Cymothoe (butterfly) in an arrow circle' className='h-auto hidden dark:block'/>*/}
      </a>
      <Navbar/>
    </div>
  )
}

export default Header