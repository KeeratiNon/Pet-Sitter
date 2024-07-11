import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ต้องนำเข้ามาเพื่อให้มีสไตล์

import dog1 from "../../assets/images/dog1.png";
import dog2 from "../../assets/images/dog2.png";
import dog3 from "../../assets/images/dog3.png";
import arrowRight from "../../assets/svgs/icons/icon-carousel-arrowr.svg";
import arrowLeft from "../../assets/svgs/icons/icon-carousel-arrowl.svg";

// import catRight from "../../assets/images/catright.png" ภาพขนาดไม่เท่ากันรูปก็ไม่เท่ากัน
// import dogLeft from "../../assets/images/dogleft.png"

const ImageGallery = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="md:py-[40px] bg-primarygray-100  ">
      {width > 550 ? (
        <Carousel
          className=" custom-carousel bg-primarygray-100 " // เพิ่ม className เพื่อใช้ CSS ที่กำหนดเอง
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          interval={3000}
          showStatus={false}
          showArrows={true}
          renderArrowNext={(clickHandler) => {
            return (
              <div
                className="w-[50px] h-[50px] right-0 top-[45%] flex justify-center items-center
               p-3  hover:opacity-100 cursor-pointer z-20 absolute"
                onClick={clickHandler}
              >
                <img width="25" height="25" src={arrowRight} className="" />
              </div>
            );
          }}
          renderArrowPrev={(clickHandler) => {
            return (
              <div
                className="w-[50px] h-[50px] left-0 top-[45%] flex justify-center items-center
               p-3  hover:opacity-100 cursor-pointer z-20 absolute"
                onClick={clickHandler}
              >
                <img width="25" height="25" src={arrowLeft} className="" />
              </div>
            );
          }}
          centerMode={true}
          centerSlidePercentage={50} // ปรับเปอร์เซ็นต์ของสไลด์ตรงกลาง
        >
        {/* 1440 */}
          <div className="flex justify-between px-[8px] min-h-[281px] min-w-[375] ">
            <img src={dog1} alt="Dog 1" className="" />
          </div>
          <div className="flex justify-between px-[8px] min-h-[281px] min-w-[375] ">
            <img src={dog2} alt="Dog 2" className="" />
          </div>
          <div className="flex justify-between px-[8px] min-h-[281px] min-w-[375]">
            <img src={dog3} alt="Dog 3" className="" />
          </div>
        </Carousel>
      ) : (
        <Carousel
          className=" custom-carousel flex  bg-primarygray-100 " // เพิ่ม className เพื่อใช้ CSS ที่กำหนดเอง
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          interval={3000}
          showStatus={false}
          showArrows={true}
          renderArrowNext={(clickHandler) => {
            return (
              <div
                className="w-[50px] h-[50px] right-0 top-[45%] flex justify-center items-center
               p-3  hover:opacity-100 cursor-pointer z-20 absolute"
                onClick={clickHandler}
              >
                <img width="25" height="25" src={arrowRight} className="  " />
              </div>
            );
          }}
          renderArrowPrev={(clickHandler) => {
            return (
              <div
                className="w-[50px] h-[50px] left-0 top-[45%] flex justify-center items-center
               p-3  hover:opacity-100 cursor-pointer z-20 absolute"
                onClick={clickHandler}
              >
                <img width="25" height="25" src={arrowLeft} className="  " />
              </div>
            );
          }}
          centerMode={true}
          centerSlidePercentage={100} // ปรับเปอร์เซ็นต์ของสไลด์ตรงกลาง
        >
        {/* Mobile */}
          <div className="flex justify-between  min-h-[281px] min-w-[375] ">
            <img src={dog1} alt="Dog 1" className="" />
          </div>
          <div className="flex justify-between   min-h-[281px] min-w-[375] ">
            <img src={dog2} alt="Dog 2" className="" />
          </div>
          <div className="flex justify-between  min-h-[281px] min-w-[375] ">
            <img src={dog3} alt="Dog 3" className="" />
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default ImageGallery;

// import React from "react";

// import dog1 from "../assets/images/dog1.png";
// import dog2 from "../assets/images/dog2.png";
// import dog3 from "../assets/images/dog3.png";

// const ImageGallerry = () => {
//   return (
//     <div className="bg-red-500 sm:py-[40px]">
//       <div className="flex overflow-hidden justify-center gap-[16px]">
//         <img src={dog1} alt="Dog 1" className="h-[281px] xs:h-auto" />
//         <img src={dog2} alt="Dog 2" className="h-[281px] xs:h-auto" />
//         <img src={dog3} alt="Dog 3" className="h-[281px] xs:h-auto" />
//       </div>
//     </div>
//   );
// };

// export default ImageGallerry;
