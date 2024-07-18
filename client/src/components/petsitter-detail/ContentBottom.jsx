import React from "react";

import davidM from "../../assets/images/david-m.png";

const ContentBottom = () => {
  return (
    <div className="bg-gray-100 flex flex-col p-[16px] lg:p-[24px] gap-[24px] lg:gap-[16] lg:rounded-tl-[120px] lg:rounded-tr-[16px] lg:rounded-br-[16px] lg:rounded-bl-[16px] ">
      <div className="bg-white flex flex-col lg:flex-row rounded-tl-[99px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px] lg:rounded-tl-[99px] lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[99px] p-[24px]  lg:p-[24px] gap-[16px] lg:gap-[40px] ">
      
          <div className="bg-black relative rounded-full flex flex-col items-center justify-center text-white  w-[146px] min-w-[146px] h-[146px] ">
            <div className="text-center z-10  ">
              <h1 className="text-[36px] leading-[44px] font-bold">4.5</h1>
              <p className="text-[14px] leading-[24px] font-medium">
                27 Reviews
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-black rounded-tl-full   "></div>
          </div>
        <div className=" flex flex-col gap-[12px] lg:gap-[16px] ">
          <p className="text-black text-20px lg:text-[24px] lg:leading-[32px] font-bold ">
            Rating & Reviews
          </p>
          <div className="flex flex-wrap gap-[8px] lg:gap-[12px]">
            <button className="bg-#FFF5EC text-primaryorange-500 border-primaryorange-500 border rounded-[8px] text-[16px] leading-[28px] w-[105px] h-[36px] pt-[4px] px-[12px]">
              All Reviews
            </button>
            <button className="text-primarygray-400  border-primarygray-200 border rounded-[8px] text-[16px] leading-[28px] w-[142px] h-[36px] pt-[4px] px-[8px]">
              5⭐⭐⭐⭐⭐
            </button>
            <button className="text-primarygray-400  border-primarygray-200 border rounded-[8px] text-[16px] leading-[28px] w-[120px] h-36px pt-[4px] px-[8px]">
              4⭐⭐⭐⭐
            </button>
            <button className="text-primarygray-400  border-primarygray-200 border rounded-[8px] text-[16px] leading-[28px] w-[98px] h-[36px] pt-[4px] px-[8px]">
              3⭐⭐⭐
            </button>
            <button className="text-primarygray-400  border-primarygray-200 border rounded-[8px] text-[16px] leading-[28px] w-[76px] h-[36px] pt-[4px] px-[8px]">
              2⭐⭐
            </button>
            <button className="text-primarygray-400  border-primarygray-200 border rounded-[8px] text-[16px] leading-[28px] w-[54px] h-[36px] pt-[4px] px-[8px]">
              1⭐
            </button>
          </div>
        </div>
      </div>
      <div className="#F6F6F9 flex flex-col lg:flex-row gap-[16px]  ">
        <div className="flex justify-between ">
          <div className="flex gap-[16px]">
            <img src={davidM} className="h-fit "></img>
            <div className="w-[148px] w-max-[220px] ">
              <h1>David M.</h1>
              <p>Aug 16, 2023</p>
            </div>
          </div>
          <div className="flex gap-[2px] lg:hidden">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
          </div>
        </div>
        <div className="flex flex-col text-primarygray-500 text-[14px] leading-[24px] font-medium ">
          <div className="hidden gap-[2px] lg:flex">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
          </div>
          <p>
            I recently had the pleasure of entrusting Jane Maison with the care
            of my two energetic Labrador Retrievers, Max and Bella, while I was
            away on a business trip. I can confidently say that Jane exceeded
            all my expectations as a pet sitter.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContentBottom;
