import React from 'react'

import Navbar from './Navbar'

import ThemeImg from '../ThemeImg'
import BlackLogo from '@/public/images/dark-logo.png'
import WhiteLogo from '@/public/images/white-logo.png'

const Header = () => {
  return (
    <div className='bg-green-light  dark:bg-purple-dark flex flex-row items-center justify-between p-3 w-auto sm-devices:flex-col sm-devices:max-w-[100vw]'>
      <a href="/" className="relative">
        <ThemeImg LightImage={BlackLogo}
                  DarkImage={WhiteLogo}
                  height={102}
                  width={102}
                  altLight={'Logo of MD, black version, MD letters and Cymothoe (butterfly) in an arrowed circle'} 
                  altDark={'Logo of MD, white version, MD letters and Cymothoe (butterfly) in an arrowed circle'}
                  className='h-auto mobiles:h-4'
        />
      </a>
      <Navbar />
    </div>
  )
}

export default Header