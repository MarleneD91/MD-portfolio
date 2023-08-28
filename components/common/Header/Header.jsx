import React from 'react'

import Navbar from './Navbar'

import ThemeImg from '../ThemeImg'
import BlackLogo from '@/public/images/dark-logo.png'
import WhiteLogo from '@/public/images/white-logo.png'

const Header = () => {
  return (
    <div className='bg-green-light  dark:bg-purple-dark flex flex-row items-center justify-between p-3 w-auto sm-devices:flex-col sm-devices:max-w-[100vw] mobiles:pt-1'>
      <a href="/" className="mobile-sm:h-[40px] mobile-sm:w-[40px] mobile:place-self-start mobile:mt-2 mobile:h-[50px] mobile:w-[50px]">
        <ThemeImg LightImage={BlackLogo}
                  DarkImage={WhiteLogo}
                  height={100}
                  width={100}
                  layout="responsive"
                  altLight={'Logo of MD, black version, MD letters and Cymothoe (butterfly) in an arrowed circle'} 
                  altDark={'Logo of MD, white version, MD letters and Cymothoe (butterfly) in an arrowed circle'}
                  className='h-auto'
        />
      </a>
      <Navbar />
    </div>
  )
}

export default Header