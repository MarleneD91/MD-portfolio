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
    <div className='mt-16 mb-8'>
        <h2 className='font-sansita font-semibold text-4xl tracking-wide text-center'>Formation</h2>
        <div className='flex flex-col items-center mx-20'>
            <h3 className='font-gentium tracking-wider font-bold text-2xl mt-10'>2023</h3>
            <div className='flex flex-row m-4'>
                <Image src={OPC} height={70} alt='OpenClassrooms logo' className='w-[70px]'/>
                <FaCircle className='text-[6px] place-self-center ml-4'/>
                <hr className='w-1/12 border-black border-[1px] place-self-center mr-4'/>
                <Fade><p className='place-self-center font-gentium font-normal tracking-wide text-lg'>Développeur intégrateur web - Certification RCPN (bac+2)</p></Fade>
            </div>
            <h3 className='font-gentium tracking-wider font-bold text-2xl mt-10'>2015</h3>
            <div className='flex flex-row m-4'>
                <Fade><p className='place-self-center font-gentium font-normal tracking-wide text-lg'>Master 2 Toxicologie Environnement Santé</p></Fade>
                <hr className='w-1/12 border-black border-[1px] place-self-center ml-4'/>
                <FaCircle className='text-[6px] place-self-center mr-2'/>
                <Image src={ParisDiderot} height={160} alt='Paris Diderot (P7) University Logo' className='rotate-90 ml-28 -mt-20 -mb-20 w-[70px]'/>
            </div>
            <h3 className='font-gentium tracking-wider font-bold text-2xl mt-10'>2013</h3>
            <div className='flex flex-row justify-center items-center align-middle m-4'>
                <Image src={UJF} height={60} alt='Joseph Fourier (Grenoble) University Logo' className='w-[305px]'/>
                <FaCircle className='text-[6px] place-self-center ml-2'/>
                <hr className='w-1/12 border-black border-[1px] place-self-center mr-4'/>
                <Fade><p className='place-self-center font-gentium font-normal tracking-wide text-lg'>Master 2 Biologie Écologie Environnement</p></Fade>
            </div>
        </div>
    </div>
  )
}

export default Curriculum