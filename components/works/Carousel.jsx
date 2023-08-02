"use client"

import Image from "next/image";
import { useState } from "react";


import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa'

import GithubLogo from '@/public/icons/black-github.png'

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="flex flex-col justify-center w-8/12 mb-8">
      <div className="flex flex-row">
        <FaChevronLeft onClick={handlePrevSlide} className=" text-5xl cursor-pointer text-gray-400 place-self-center z-20 ml-2 hover:text-gray-500" />
        <div className="h-[300px] flex overflow-hidden m-auto place-content-center">
          {images.map((image, index) => {
              if (index === currentSlide) {
                return (
                  <Image key={image.id} src={image.picture} width={500} height={300} className="animate-fadeIn opacity-75 hover:opacity-100 rounded-sm w-full h-auto" alt={image.title} />
                )
              }
            })}
        </div>
        <FaChevronRight onClick={handleNextSlide} className=" text-5xl cursor-pointer text-gray-400 place-self-center z-20 mr-2 hover:text-gray-500" />
      </div>
      <div className="relative flex justify-center pb-3 z-30">
        {images.map((_, index) => {
          return (
            <FaCircle className={index === currentSlide ? "text-sm text-carousel-dot mx-1 my-2 cursor-pointer" : "text-sm text-carousel-light-dot mx-1 my-2 cursor-pointer hover:text-gray-400"} key={index} onClick={() => {setCurrentSlide(index)}} />
          )
        })}
      </div>
      {images.map((image, index) => {
        if(index === currentSlide){
          return (
            <div className=" bg-light-grey-form rounded-2xl p-4 m-4 border-2 border-zinc-400" key={image.title}>
              <h3 className="font-sansita font-semibold text-xl tracking-wide text-center">{image.title}</h3>
              <div className="my-4">
              <h4 className="font-sansita text-base underline underline-offset-2">Description du projet</h4>
                <p className="font-gentium">{image.description}</p>
              </div>
              <div className="my-6">
                <h4 className="font-sansita text-base underline underline-offset-2">Diffultés rencontrées</h4>
                <p className="font-gentium">{image.issues}</p>
              </div>
              <div className="flex justify-between items-end">
                <ul>
                  {image.technos.map((techno) => {
                    if(index===currentSlide){
                      return(
                        <li className="font-roboto font-extrabold mx-2 inline text-sm" key={techno}>#{techno}</li>
                      )
                    }
                  })}
                </ul>
                <a href={image.githubLink}><Image src={GithubLogo} height={40} width={40} alt="Logo of Github, black version, associated to a link to project's repository"/></a>
              </div>  
            </div>
          )
        }
      })}
    </div>
  )
}

export default Carousel