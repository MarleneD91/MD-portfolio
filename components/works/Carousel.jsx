"use client"

import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa'

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
    <div className="flex flex-col justify-center w-5/12">
      <div className="grid grid-cols-2 justify-between items-center z-20">
        <FaChevronLeft onClick={handlePrevSlide} className=" text-5xl cursor-pointer text-gray-400 z-20" />
        <FaChevronRight onClick={handleNextSlide} className=" text-5xl cursor-pointer text-gray-400 z-20" />
      </div>
      
      <div className="w-6/12 h-[50vh] flex overflow-hidden m-auto place-content-center">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="z-10 h-100 w-100 place-items-center"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={image.id}
                  src={image.picture}
                  width={500}
                  height={300}
                  className="animate-fadeIn object-contain"
                />
              );
            }
          })}
        </Swipe>
      </div>


      <div className="relative flex justify-center p-2 z-30">
        {images.map((_, index) => {
          return (
            <FaCircle
              className={
                index === currentSlide
                  ? "text-sm text-carousel-dot mx-1 my-2 cursor-pointer"
                  : "text-sm text-carousel-light-dot mx-1 my-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel