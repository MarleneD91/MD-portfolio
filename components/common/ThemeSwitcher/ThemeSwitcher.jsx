"use client"

import React from 'react'

import { useTheme } from 'next-themes'

import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeSwitcher = () => {
  const {theme, setTheme} = useTheme()
  return (
    <div  className='fixed bottom-10 right-4 w-[85px] h-10 rounded-[35px] bg-switcher-sun-bg dark:bg-switcher-moon-bg z-0'>
      <div className='flex flex-row justify-between dark:flex-row-reverse'>
        <FaSun className='dark:hidden place-self-center ml-2 text-3xl text-sun'/>
        <FaMoon className='hidden dark:block place-self-center mr-2 text-3xl text-moon '/>
        <button onClick={()=> setTheme( theme === "dark"? "light": "dark" )} className='rounded-full h-10 w-10 bg-light-footer-txt dark:bg-switcher-button-white z-10'></button>
      </div>
    </div>
  )
}

export default ThemeSwitcher