"use client"

import Image from "next/image";
import { useState } from "react";


import { FaChevronLeft, FaChevronRight, FaCircle, FaGithub } from 'react-icons/fa'


const Carousel = ({ works }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === works.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? works.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="flex flex-col justify-center w-8/12 mb-8">
      <div className="flex flex-row">
        <FaChevronLeft onClick={handlePrevSlide} className=" text-5xl cursor-pointer text-gray-400 place-self-center z-20 ml-2 hover:text-gray-500" />
        <div className="h-[300px] overflow-hidden m-auto place-content-center">
          {works.map((work, index) => {
              if (index === currentSlide) {
                return (
                  <Image key={work.title} src={work.imageUrl} width={500} height={300} className="opacity-75 hover:opacity-100 rounded-sm h-full w-full object-cover" alt={work.title} />
                )
              }
            })}
        </div>
        <FaChevronRight onClick={handleNextSlide} className=" text-5xl cursor-pointer text-gray-400 place-self-center z-20 mr-2 hover:text-gray-500" />
      </div>
      <div className="relative flex justify-center pb-3 z-30">
        {works.map((_, index) => {
          return (
            <FaCircle className={index === currentSlide ? "text-sm text-carousel-dot dark:text-carousel-light-dot mx-1 my-2 cursor-pointer" : "text-sm text-carousel-light-dot dark:text-carousel-dot mx-1 my-2 cursor-pointer hover:text-gray-400"} key={index} onClick={() => {setCurrentSlide(index)}} />
          )
        })}
      </div>
      {works.map((work, index) => {
        if(index === currentSlide){
          return (
            <div className=" bg-light-gray-form dark:bg-dark-gray-form rounded-2xl p-4 m-4 border-2 border-zinc-400" key={work.title}>
              <h3 className="font-sansita font-semibold text-xl tracking-wide text-center">{work.title}</h3>
              <div className="my-4">
              <h4 className="font-sansita text-base underline underline-offset-2">Description du projet</h4>
                <p className="font-gentium">{work.description}</p>
              </div>
              <div className="my-6">
                <h4 className="font-sansita text-base underline underline-offset-2">Diffultés rencontrées</h4>
                <p className="font-gentium">{work.issues}</p>
              </div>
              <div className="flex justify-between items-end">
                <ul>
                  {work.technos.map((techno) => {
                    if(index===currentSlide){
                      return(
                        <li className="font-roboto font-extrabold mx-2 inline text-sm" key={techno}>#{techno}</li>
                      )
                    }
                  })}
                </ul>
                <a href={work.githubLink}><FaGithub className="text-4xl" /></a>
              </div>  
            </div>
          )
        }
      })}
    </div>
  )
}

export default Carousel