"use client"

import React from 'react'

import{Fade} from 'react-awesome-reveal'

//Next Image component
import Image from 'next/image'

//Universities logos
import UJF from '@/public/universities/Joseph-Fourier.png'
import ParisDiderot from '@/public/universities/Paris-Diderot.png'
import OPC from '@/public/universities/OpenClassrooms.png'

//Font Awesome Icon
import { FaCircle } from "react-icons/fa";

const Curriculum = () => {
  return (
    <div className='mt-16 mb-8 mobiles:mt-12'>
        <h2 className='font-sansita font-semibold text-4xl tracking-wide text-center mobiles:text-3xl'>Formation</h2>
        <div className='flex flex-col items-center mx-20 sm-devices:mx-10'>
            <h3 className='font-gentium tracking-wider font-bold text-2xl mt-10 tablet:text-3xl mobiles:mt-8'>2023</h3>
            <div className='flex flex-row m-4 sm-devices:flex-col-reverse sm-devices:items-center'>
                <Image src={OPC} height={70} alt='OpenClassrooms logo' className='w-[70px] sm-devices:mt-4'/>
                <FaCircle className='text-[6px] place-self-center ml-4 sm-devices:hidden'/>
                <hr className='w-1/12 border-black border-[1px] place-self-center mr-4 dark:border-white sm-devices:hidden'/>
                <Fade><p className='place-self-center font-gentium font-normal tracking-wide text-lg tablet:text-xl sm-devices:text-center'>Développeur intégrateur web - Certification RCPN (bac+2)</p></Fade>
            </div>
            <h3 className='font-gentium tracking-wider font-bold text-2xl mt-10 sm-devices:mt-5 tablet:text-3xl'>2015</h3>
            <div className='flex flex-row m-4 sm-devices:flex-col sm-devices:items-center'>
                <Fade><p className='place-self-center font-gentium font-normal tracking-wide text-lg tablet:text-xl sm-devices:text-center'>Master 2 Toxicologie Environnement Santé</p></Fade>
                <hr className='w-1/12 border-black border-[1px] place-self-center ml-4 dark:border-white sm-devices:hidden'/>
                <FaCircle className='text-[6px] place-self-center mr-2 sm-devices:hidden'/>
                <Image src={ParisDiderot} height={160} alt='Paris Diderot (P7) University Logo' className='rotate-90 ml-28 -mt-20 -mb-20 w-[70px] dark:w-[82px] dark:bg-white  dark:border-4 dark:border-white sm-devices:-mb-20 sm-devices:ml-0 sm-devices:-mt-8 sm-devices:w-[50px]'/>
            </div>
            <h3 className='font-gentium tracking-wider font-bold text-2xl mt-10 tablet:text-3xl'>2013</h3>
            <div className='flex flex-row justify-center items-center align-middle m-4 sm-devices:flex-col-reverse sm-devices:items-center'>
                <Image src={UJF} height={60} alt='Joseph Fourier (Grenoble) University Logo' className='w-[305px] dark:bg-white sm-devices:mt-5'/>
                <FaCircle className='text-[6px] place-self-center ml-2 sm-devices:hidden'/>
                <hr className='w-1/12 border-black border-[1px] place-self-center mr-4 dark:border-white sm-devices:hidden'/>
                <Fade><p className='place-self-center font-gentium font-normal tracking-wide text-lg tablet:text-xl sm-devices:text-center'>Master 2 Biologie Écologie Environnement</p></Fade>
            </div>
        </div>
    </div>
  )
}

export default Curriculum