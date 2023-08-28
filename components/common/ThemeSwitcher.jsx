"use client"

import React from 'react'

import { useTheme } from 'next-themes'

import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeSwitcher = () => {
  const {theme, setTheme} = useTheme()
  const screenSize = window.innerWidth
  return (
    <div  className='fixed bottom-12 right-4 w-[85px] h-10 rounded-[35px] bg-switcher-sun-bg dark:bg-switcher-moon-bg z-0 mobiles:top-3 mobiles:right-3 mobiles:w-11 mobiles:z-50 mobiles:h-11' onClick={screenSize < 581 ? ()=> setTheme( theme === "dark"? "light": "dark" ) : null }>
      <div className='flex flex-row justify-between dark:flex-row-reverse mobiles:flex-none mobiles:p-[6px]'>
        <FaSun className='dark:hidden place-self-center ml-2 text-3xl text-sun mobiles:hidden'/>
        <FaMoon className='hidden dark:block place-self-center mr-2 text-3xl text-moon mobiles:hidden'/>
        {screenSize < 581 ? <FaSun className='dark:hidden place-self-center ml-2 text-3xl text-sun mobiles:z-10  mobiles:m-[1px]'/> : null}
        {screenSize < 581 ? <FaMoon className='hidden place-self-center mr-2 text-3xl text-moon  mobiles:z-10 mobiles:mr-0 mobiles:ml-2'/> : null}
        <button onClick={ screenSize > 580 ? ()=> setTheme( theme === "dark"? "light": "dark" ) : null} className='rounded-full h-10 w-10 bg-black dark:bg-switcher-button-white z-10 mobiles:hidden'></button>
   
        
      </div>
    </div>
  )
}

export default ThemeSwitcher