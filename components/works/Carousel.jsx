"use client"

import Image from "next/image";

import { useEffect, useState } from "react";

//FA Icons
import { FaChevronLeft, FaChevronRight, FaCircle, FaGithub } from 'react-icons/fa'

//Loader
import Loader from "./Loader";

const Carousel = () => {
  const [isLoading, setIsLoading] = useState(true)

  const [works, setWorks] = useState()
 
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=>{    
   getWorksData()
  }, [])

  const getWorksData = async () => {
    const res = await fetch('../api/works',{
      method: 'GET',
      headers: {
        "Content-type": "application/json",
      },
    })
    const resData = await res.json()
    setWorks(resData)
    setIsLoading(false)
  }

  const handleNextSlide = () => {
    let newSlide = currentSlide === works.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? works.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="flex flex-col justify-center w-1/2 mb-8 mobiles:w-11/12 mobiles:mb-4">
      <div className="flex flex-row">
        <FaChevronLeft onClick={handlePrevSlide} className=" text-5xl sm-devices:text-4xl mobile:text-3xl mobile-sm:text-2xl cursor-pointer text-gray-400 place-self-center z-20 ml-2 hover:text-gray-500 mobile-sm:ml-0" />
        <div className="h-[250px] overflow-hidden m-auto sm-devices:h-[180px] mobile:h-[220px] mobile-sm:h-[200px]">
          {isLoading ? <Loader /> :null}
          {works && works.map((work, index) => {
            if (index === currentSlide) {
              return (
                <Image key={work.title} src={work.imageUrl} width={500} height={300} className="opacity-75 dark:opacity-100 dark:hover:opacity-80 hover:opacity-100 rounded-sm h-full w-full object-cover mobile:w-[300px] mobile-sm:w-[175px]" alt={`Screenshot of the project: ${work.title}`} />
              )
            }
          })}
        </div>
        <FaChevronRight onClick={handleNextSlide} className=" text-5xl sm-devices:text-4xl mobile:text-3xl mobile-sm:text-2xl cursor-pointer text-gray-400 place-self-center z-20 mr-2 hover:text-gray-500 mobile-sm:mr-0" />
      </div>
      <div className="relative flex justify-center pb-3 z-30">
        {works && works.map((_, index) => {
          return (
            <FaCircle className={index === currentSlide ? "text-sm sm-devices:text-[10px] mobile-sm:text-[8px] text-carousel-dot dark:text-carousel-light-dot mx-1 my-2 cursor-pointer" : "text-sm sm-devices:text-[10px] mobile-sm:text-[8px] text-carousel-light-dot dark:text-carousel-dot mx-1 my-2 cursor-pointer hover:text-gray-400"} key={index} onClick={() => {setCurrentSlide(index)}} />
          )
        })}
      </div>
      {works && works.map((work, index) => {
        if(index === currentSlide){
          return (
            <div className=" bg-light-gray-form dark:bg-dark-gray-form rounded-2xl p-4 m-4 border-2 border-zinc-400" key={work.title}>
              <h3 className="font-sansita font-semibold text-2xl tracking-wide text-center">{work.title}</h3>
              <div className="my-4">
              <h4 className="font-sansita text-base underline underline-offset-2">Description du projet</h4>
                <p className="font-gentium text-justify text-base mobile-sm:text-[13px]">{work.description}</p>
              </div>
              <div className="my-6">
                <h4 className="font-sansita text-base underline underline-offset-2">Diffultés rencontrées</h4>
                <p className="font-gentium text-justify text-base mobile-sm:text-[13px]">{work.issues}</p>
              </div>
              <div className="flex justify-between items-end">
                <ul className="flex flex-row flex-wrap">
                  {work.technos.map((techno) => {
                    if(index===currentSlide){
                      return(
                        <li className="font-roboto font-bold mx-2 inline text-base mobile-sm:text-[12px]" key={`${work.title} + ${techno}`}>#{techno}</li>
                      )
                    }
                  })}
                </ul>
                {work.githubLink ? <a href={work.githubLink} target="_blank"><FaGithub className="text-4xl" /></a> : <></>}
              </div> 
             </div>
          )
        }
      })}
    </div>
  )
}

export default Carousel