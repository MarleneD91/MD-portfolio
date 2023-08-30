"use client"

import Image from 'next/image'

import {Slide} from 'react-awesome-reveal'

import { FaBook, FaPalette, FaPagelines } from 'react-icons/fa'

import RightGingkoLeaf from '@/public/images/right-gingko-leaf.webp'
import LeftGingkoLeaf from '@/public/images/left-gingko-leaf.webp'


const Skills = () => {
  return (
    <>
        <h2 className='font-sansita font-bold text-5xl mb-4 mt-5 text-center mobile-sm:text-4xl'>Compétences.</h2>
        <div className='grid grid-cols-5'>
          <Image src={LeftGingkoLeaf} width={250} alt='Drawing of a Gingko biloba leaf' className='h-auto self-end'/>
          <div className='col-span-3 my-6 gap-12 px-5 tablet:px-0 mobiles:flex mobiles:flex-col mobiles:gap-2'>
            <div className='grid grid-cols-2 justify-between mx-4 h-[350px] tablet:h-[370px] mobiles:flex mobiles:flex-col mobiles:h-[450px] mobiles:items-center'>
              <div className='pt-15 justify-self-start mobiles:text-center'>
                <h3 className='font-sansita font-semibold text-xl tracking-widest my-4 mobiles:my-2 mobile-sm:text-lg'>HARD SKILLS</h3>
                <Slide>
                  <ul className='leading-8 font-gentium text-lg mobile:text-base mobile-sm:leading-5 mobile-sm:text-sm'>
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
              <div className='place-self-end pt-16 mobiles:text-center mobiles:pt-4 mobiles:place-self-center'>
                <h3 className='font-sansita font-semibold text-xl tracking-widest my-4 mobiles:my-2 mobile-sm:text-lg'>SOFT SKILLS</h3>
                <Slide direction='right'>
                  <ul className='leading-8 font-gentium text-lg mobile:text-base mobile-sm:leading-5 mobile-sm:text-sm'>
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
          </div>
          <Image src={RightGingkoLeaf} width={250} alt='Drawing of a Gingko biloba leaf' className='h-auto justify-self-end'/>
        </div> 
    </>
  )
}

export default Skills