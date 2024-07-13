import React, { useState } from "react";
import dogLeft from "../../assets/images/dogleft.png";
import catRight from "../../assets/images/catright.png";
import dog1 from "../../assets/images/dog1.png";

const slides = [
  { src: dogLeft, caption: "Dog Left" },
  { src: catRight, caption: "Cat Right" },
  { src: dog1, caption: "Dog 1" },
];

const ImageGallery = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative mx-auto max-w-[375px] lg:max-w-[1440px] lg:py-10">
      <div className="lg:flex lg:gap-4 lg:justify-center lg:items-center">
        {slides.map((slide, index) => (
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
              src={slide.src}
              className="w-full max-w-[375px] max-h-[281px] lg:max-w-[550px] lg:max-h-[413px]"
              alt={slide.caption}
            />
          </div>
        ))}
      </div>
      <button
        className="prev absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-white font-bold text-lg transition-all ease-in-out rounded-r bg-black bg-opacity-50 hover:bg-opacity-80"
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






// import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // ต้องนำเข้ามาเพื่อให้มีสไตล์

// import dog1 from "../../assets/images/dog1.png";
// import dog2 from "../../assets/images/dog2.png";
// import dog3 from "../../assets/images/dog3.png";
// import arrowRight from "../../assets/svgs/icons/icon-carousel-arrowr.svg";
// import arrowLeft from "../../assets/svgs/icons/icon-carousel-arrowl.svg";

// // import catRight from "../../assets/images/catright.png" ภาพขนาดไม่เท่ากันรูปก็ไม่เท่ากัน
// // import dogLeft from "../../assets/images/dogleft.png"

// const ImageGallery  = () => {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="lg:py-[40px] bg-primarygray-100  ">
//       {width > 550 ? (
//         <Carousel
//           className=" custom-carousel bg-primarygray-100 " // เพิ่ม className เพื่อใช้ CSS ที่กำหนดเอง
//           showThumbs={false}
//           infiniteLoop={true}
//           autoPlay={false}
//           interval={3000}
//           showStatus={false}
//           showArrows={true}
//           renderArrowNext={(clickHandler) => {
//             return (
//               <div
//                 className="w-[50px] h-[50px] right-0 top-[45%] flex justify-center items-center
//                p-3  hover:opacity-100 cursor-pointer z-20 absolute"
//                 onClick={clickHandler}
//               >
//                 <img width="25" height="25" src={arrowRight} className="" />
//               </div>
//             );
//           }}
//           renderArrowPrev={(clickHandler) => {
//             return (
//               <div
//                 className="w-[50px] h-[50px] left-0 top-[45%] flex justify-center items-center
//                p-3  hover:opacity-100 cursor-pointer z-20 absolute"
//                 onClick={clickHandler}
//               >
//                 <img width="25" height="25" src={arrowLeft} className="" />
//               </div>
//             );
//           }}
//           centerMode={true}
//           centerSlidePercentage={50} // ปรับเปอร์เซ็นต์ของสไลด์ตรงกลาง
//         >
//         {/* 1440 */}
//           <div className="flex justify-between px-[8px] min-h-[281px] min-w-[375] ">
//             <img src={dog1} alt="Dog 1" className="" />
//           </div>
//           <div className="flex justify-between px-[8px] min-h-[281px] min-w-[375] ">
//             <img src={dog2} alt="Dog 2" className="" />
//           </div>
//           <div className="flex justify-between px-[8px] min-h-[281px] min-w-[375]">
//             <img src={dog3} alt="Dog 3" className="" />
//           </div>
//         </Carousel>
//       ) : (
//         <Carousel
//           className=" custom-carousel flex  bg-primarygray-100 " // เพิ่ม className เพื่อใช้ CSS ที่กำหนดเอง
//           showThumbs={false}
//           infiniteLoop={true}
//           autoPlay={false}
//           interval={3000}
//           showStatus={false}
//           showArrows={true}
//           renderArrowNext={(clickHandler) => {
//             return (
//               <div
//                 className="w-[50px] h-[50px] right-0 top-[45%] flex justify-center items-center
//                p-3  hover:opacity-100 cursor-pointer z-20 absolute"
//                 onClick={clickHandler}
//               >
//                 <img width="25" height="25" src={arrowRight} className="  " />
//               </div>
//             );
//           }}
//           renderArrowPrev={(clickHandler) => {
//             return (
//               <div
//                 className="w-[50px] h-[50px] left-0 top-[45%] flex justify-center items-center
//                p-3  hover:opacity-100 cursor-pointer z-20 absolute"
//                 onClick={clickHandler}
//               >
//                 <img width="25" height="25" src={arrowLeft} className="  " />
//               </div>
//             );
//           }}
//           centerMode={true}
//           centerSlidePercentage={100} // ปรับเปอร์เซ็นต์ของสไลด์ตรงกลาง
//         >
//         {/* Mobile */}
//           <div className="flex justify-between  min-h-[281px] min-w-[375] ">
//             <img src={dog1} alt="Dog 1" className="" />
//           </div>
//           <div className="flex justify-between   min-h-[281px] min-w-[375] ">
//             <img src={dog2} alt="Dog 2" className="" />
//           </div>
//           <div className="flex justify-between  min-h-[281px] min-w-[375] ">
//             <img src={dog3} alt="Dog 3" className="" />
//           </div>
//         </Carousel>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;

// import React from "react";

// import dogLeft from "../../assets/images/dogleft.png";
// import dog1 from "../../assets/images/dog1.png";
// import catRight from "../../assets/images/catright.png";


// const ImageGallerry = () => {
//   return (
//     <div className="bg-red-500 sm:py-[40px]">
//       <div className="flex overflow-hidden justify-center gap-[16px]">
//         <img src={dogLeft} alt="Dog 1" className="h-[281px] xs:h-auto" />
//         <img src={dog1} alt="Dog 2" className="h-[281px] xs:h-auto" />
//         <img src={catRight} alt="Dog 3" className="h-[281px] xs:h-auto" />
//       </div>
//     </div>
//   );
// };

// export default ImageGallerry;

