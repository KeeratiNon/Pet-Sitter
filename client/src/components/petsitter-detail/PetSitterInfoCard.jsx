import React, { useState } from "react";

import locationIcon from "../../assets/images/location-icon.png";
import girl from "../../assets/images/girl.png";

import ModalPopup from "../BookingPopup";

const PetSitterInfoCard = () => {
  const [showModal, setShowModal] = useState(false); // State สำหรับ modal
  return (
    <div className="relative">
      <div className="bg-white  lg:shadow-[4px_4px_24px_0px_rgba(0,0,0,0.04)] rounded-2xl flex flex-col items-center w-full h-auto lg:m lg:w-auto sticky top-0">
        <div className="flex flex-col items-center py-[40px] px-[24px] gap-[24px] border-primarygray-200 border-b w-full">
          <img src={girl} alt="Girl" className="w-[120px] lg:w-[160px]"></img>
          <div className="flex flex-col gap-[16px] items-center">
            <h1 className="text-black text-[24px] leading-[32px] lg:text-[36px] lg:leading-[44px]  font-bold ]">
              Happy House!
            </h1>
            <div className="flex gap-[8px]">
              <p className="text-black text-[18px] leading-[26px] lg:text-[20px] lg:leading-[28px] font-medium">
                Jane Maison
              </p>
              <p className="text-secondarygreen-200  text-[16px] leading-[28px] font-medium">
                1.5 Years Exp.
              </p>
            </div>
            <div className="flex text-[16px] lg:text-[20px]">
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>
            <div className="flex gap-[6px] ">
              <img src={locationIcon}></img>
              <p className="text-primarygray-400 text-[14px] leading-[24px] lg:text-[16px] lg:leading-[28px] font-medium ">
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
        <div className=" p-[24px] gap-[16px] min-w-[375px] lg:min-w-[416px] w-full">
          <button
            type="submit"
            className="btn-primary"
            onClick={() => setShowModal(true)} // แสดง modal เมื่อคลิกปุ่ม
          >
            Book Now
          </button>
        </div>
      </div>
      <ModalPopup showModal={showModal} setShowModal={setShowModal} /> 
    </div>
  );
};
export default PetSitterInfoCard;
