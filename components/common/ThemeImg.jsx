"use client"

import React, { useEffect } from 'react'

import Image from 'next/image'

import { useTheme } from 'next-themes'

export const ThemeImg = ({LightImage, DarkImage, height, width, altLight, altDark}) => {
    const {theme, setTheme} = useTheme()
    
    useEffect(() => {
        let clientTheme = localStorage.getItem('theme')
        setTheme(clientTheme)
    })

        if(theme === "dark"){
            return (
                <Image src={DarkImage} height={height} width={width} alt={altLight} priority={true} className='object-cover'/>
            )
        } else if(theme === "light") {
            return(
                <Image src={LightImage} height={height} width={width} alt={altDark} priority={true} className='object-cover'/> 
            )
        }

    }

export default ThemeImg
