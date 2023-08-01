import React from 'react'

import Image from 'next/image'

import { FaBook, FaPalette, FaPagelines } from 'react-icons/fa'

import RightGingkoLeaf from '@/public/images/right-gingko-leaf.png'
import LeftGingkoLeaf from '@/public/images/left-gingko-leaf.png'

const Skills = () => {
  return (
    <>
        <h2 className='font-sansita font-bold text-5xl p-4 mb-4 text-center'>Compétences.</h2>
        <div className='flex flex-row'>
          <Image src={LeftGingkoLeaf} width={300} alt='Drawing of a Gingko biloba leaf' className='h-[300px]] self-end'/>
          <div className='flex flex-col w-[70vh] m-auto my-6'>
            <div className='flex flex-row'>
              <div>
                <h3 className='font-sansita font-regular text-xl tracking-widest'>HARD SKILLS</h3>
                <ul className='leading-6 font-gentium text-xl'>
                  <li>Base de données</li>
                  <li>Concepts de programmation</li>
                  <li>Création graphique et maquettage</li>
                  <li>Gestion de projet</li>
                  <li>Langages de programmation</li>
                  <li>SEO</li>
                  <li>Versionning</li>
                </ul>
              </div>
              <div className='place-self-end'>
                <h3 className='font-sansita font-semibold text-xl tracking-widest m-4'>SOFT SKILLS</h3>
                <ul className='leading-6 font-gentium text-xl'>
                  <li>Autonomie</li>
                  <li>Créativité</li>
                  <li>Curiosité</li>
                  <li>Organisation</li>
                  <li>Patience</li>
                  <li>Rigueur</li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='font-sansita font-regular text-xl tracking-widest'>HOBBIES</h3>
              <div className='flex flex-row justify-between text-5xl mt-2'>
                <FaBook className='m-2'/>
                <FaPalette className='m-2'/>
                <FaPagelines className='m-2'/>
              </div>
            </div>
          </div>
          <Image src={RightGingkoLeaf} width={300} alt='Drawing of a Gingko biloba leaf' className='h-[300px] -mr-2 '/>
        </div> 
    </>
  )
}

export default Skills