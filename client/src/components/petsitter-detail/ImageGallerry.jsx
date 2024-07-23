import React, { useState } from "react";
import dogLeft from "../../assets/images/dogleft.png";
import catRight from "../../assets/images/catright.png";
import dog1 from "../../assets/images/dog1.png";

const slides = [
  { src: dogLeft, caption: "Dog Left" },
  { src: catRight, caption: "Cat Right" },
  { src: dog1, caption: "Dog 1" },
];

const ImageGallery = ({ profiles }) => {
  const [slideIndex, setSlideIndex] = useState(0);
console.log(profiles)
  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative mx-auto max-w-[375px] lg:max-w-[1440px] lg:py-10">
      <div className="lg:flex lg:gap-4 lg:justify-center lg:items-center">
        {profiles.map((slide, index) => (
          <div
            key={index}
            className={`mySlides fade ${
              index === slideIndex ? "block" : "hidden"
            } lg:block`}
            style={{
              order:
                index === slideIndex
                  ? 1
                  : index === (slideIndex + 1) % slides.length
                  ? 2
                  : index === (slideIndex + 2) % slides.length
                  ? 3
                  : 0,
            }}
          >
            <img
              src={slide}
              className="w-full max-w-[375px] h-[281px] lg:max-w-[550px] lg:h-[413px]"
              alt={slide.caption}
            />
          </div>
        ))}
      </div>
      <button
        className="prev absolute top-1/2 left-0 transform -translate-y-1/2 size-[50px] text-white font-bold text-lg transition-all ease-in-out  bg-red-500 bg-opacity-50 hover:bg-opacity-80 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="next absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-white font-bold text-lg transition-all ease-in-out rounded-l bg-black bg-opacity-50 hover:bg-opacity-80"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageGallery;