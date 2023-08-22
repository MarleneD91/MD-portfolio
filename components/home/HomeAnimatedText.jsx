"use client"

import React from 'react'

import {Fade} from 'react-awesome-reveal'

const HomeAnimatedText = () => {
  return (
    <>
      <Fade cascade damping={0.1} duration='1000' className='flex flex-col items-center justify-between text-black dark:text-dark-mode-white'>
            <h1 className='font-sansita font-extrabold text-6xl text-center p-6 tablet:text-5xl mobiles:text-4xl'>Bienvenue sur mon site</h1>
            <div className='text-center p-4 w-6/12 mobiles:w-5/6 tablet:w-2/3'>
              <p className='font-gentium text-lg'>
              Je suis Marlène, <span className='font-bold'>développeuse web junior</span>. Je vous présente mon 
              <span className='font-bold'> parcours</span>, mes <span className='font-bold'>réalisations</span>, 
              les <span className='font-bold'>technologies</span> avec lesquelles j’ai pu travailler jusqu’à présent. 
              </p>
              <p className='font-roboto italic text-gray-txt dark:text-dark-footer-txt text-sm pt-6'>N'hésitez pas à vous balader ...</p>
            </div>
      </Fade>
    </>
  )
}

export default HomeAnimatedText

