import React from "react";

import locationIcon from "../../assets/images/location-icon.png";
import girl from "../../assets/images/girl.png";

const PetSitterInfoCard = () => {
  return (
    <div className="relative">
      <div className="bg-white  md:shadow-sm rounded-xl flex flex-col items-center w-full md:w-auto sticky top-0">
        <div className="flex flex-col items-center py-[40px] px-[24px] gap-[24px]">
          <img src={girl} className=""></img>
          <div className="flex flex-col gap-[16px] items-center">
            <h1 className="text-black text-[24px] leading-[32px] font-bold ]">
              Happy House!
            </h1>
            <div className="flex gap-[8px]">
              <p className="text-black text-[18px] leading-[26px] font-medium">
                Jane Maison
              </p>
              <p className="text-secondarygreen-200  text-[18px] leading-[26px] font-medium">
                1.5 Years Exp.
              </p>
            </div>
            <div className="flex  ">
              <p className="">⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>
            <div className="flex gap-[6px] ">
              <img src={locationIcon}></img>
              <p className="text-primarygray-400 text-[14px] leading-[24px] font-medium ">
                Senanikom, Bangkok
              </p>
            </div>
            <div className="flex gap-[8px]">
              <p className="bg-secondarygreen-100 border-secondarygreen-200 text-secondarygreen-200 rounded-full border text-[16px] leading-[24px] font-medium py-[4px] px-[16px]">
                Dog
              </p>
              <p className="bg-secondarypink-100  border-secondarypink-200 text-secondarypink-200 rounded-full border text-[16px] leading-[24px] font-medium py-[4px] px-[16px]">
                Cat
              </p>
              <p className="bg-secondaryblue-100 border-secondaryblue-200 text-secondaryblue-200 rounded-full border text-[16px] leading-[24px] font-medium py-[4px] px-[16px] hidden">
                Bird
              </p>
              <p className="bg-primaryorange-100 border-primaryorange-400 text-primaryorange-400 rounded-full border text-[16px] leading-[24px] font-medium py-[4px] px-[16px]">
                Rabbit
              </p>
            </div>
          </div>
        </div>
        <div className="border-primarygray-200 border-t   p-[24px] gap-[16px] w-[328px] md:w-[368px]   ">
          <button type="submit" className="btn-primary">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default PetSitterInfoCard;
