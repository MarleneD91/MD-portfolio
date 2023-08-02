"use client"

import React from 'react'

import Image from 'next/image'

import {Slide} from 'react-awesome-reveal'

import { FaBook, FaPalette, FaPagelines } from 'react-icons/fa'

import RightGingkoLeaf from '@/public/images/right-gingko-leaf.png'
import LeftGingkoLeaf from '@/public/images/left-gingko-leaf.png'


const Skills = () => {
  return (
    <>
        <h2 className='font-sansita font-bold text-5xl mb-4 mt-5 text-center'>Compétences.</h2>
        <div className='grid grid-cols-5'>
          <Image src={LeftGingkoLeaf} width={250} alt='Drawing of a Gingko biloba leaf' className='h-auto self-end '/>
          <div className='col-span-3 my-6 gap-12 px-5'>
            <div className='grid grid-cols-2 justify-between mx-4 h-[350px]'>
              <div className='pt-15 justify-self-start'>
                <h3 className='font-sansita font-semibold text-xl tracking-widest my-4'>HARD SKILLS</h3>
                <Slide>
                  <ul className='leading-8 font-gentium text-lg'>
                    <li>Base de données</li>
                    <li>Concepts de programmation</li>
                    <li>Création graphique et maquettage</li>
                    <li>Gestion de projet</li>
                    <li>Langages de programmation</li>
                    <li>SEO</li>
                    <li>Versionning</li>
                  </ul>
                </Slide>
              </div>
              <div className='place-self-end pt-16'>
                <h3 className='font-sansita font-semibold text-xl tracking-widest my-4'>SOFT SKILLS</h3>
                <Slide direction='right'>
                  <ul className='leading-8 font-gentium text-lg'>
                    <li>Autonomie</li>
                    <li>Créativité</li>
                    <li>Curiosité</li>
                    <li>Organisation</li>
                    <li>Patience</li>
                    <li>Rigueur</li>
                  </ul>
                </Slide>
              </div>
            </div>
            <div className='flex flex-col items-center mt-10'>
              <h3 className='font-sansita font-semibold text-xl tracking-widest my-4'>HOBBIES</h3>
              <div className='flex flex-row justify-between text-4xl mt-2'>
                <FaBook className='m-2'/>
                <FaPalette className='m-2'/>
                <FaPagelines className='m-2'/>
              </div>
            </div>
          </div>
          <Image src={RightGingkoLeaf} width={250} alt='Drawing of a Gingko biloba leaf' className='h-auto justify-self-end'/>
        </div> 
    </>
  )
}

export default Skills