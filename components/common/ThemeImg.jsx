"use client"

import React from 'react'

import Image from 'next/image'

import { useTheme } from 'next-themes'

export const ThemeImg = ({LightImage, DarkImage, height, width, altLight, altDark}) => {
    const {theme, setTheme} = useTheme()
        if(theme === "dark"){
            return (
                <Image src={DarkImage} height={height} width={width} alt={altLight} priority={false} className='object-cover'/>
            )
            } else {
            return(
                <Image src={LightImage} height={height} width={width} alt={altDark} priority={false} className='object-cover'/> 
            )
        }
        

    }

export default ThemeImg
