import React from "react";

import map from "../../assets/images/map.png";

import davidM from "../../assets/images/david-m.png";
import girl from "../../assets/images/girl.png";
import locationIcon from "../../assets/images/location-icon.png";
const ContentPetSitterTopLeft = () => {
  return (
    <div className="bg-primarygray-100  flex flex-col lg:px-[80px] gap-[40px] ">
      <div className="lg:flex   lg:rounded-md lg:gap-[16px]">
        <div className="flex flex-col py-[40px] px-[16px]  lg:py-[24px] gap-[24px] lg:gap-[48px] lg:px-[80px]   ">
          <h1 className="text-black text-[36px] leading-[44px] font-bold md:text-[56px] md:leading-[64px] ">
            Happy House!
          </h1>
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-black text-[20px] leading-[28px] font-bold md:text-[24px] md:leading-[32px] ">
              Introduction
            </h3>
            <p className="text-primarygray-500 text-[14px] leading-[24px] font-medium md:text-[16] md:leading-[28px] ">
              Hello there! My name is Jane Maison, and I'm your friendly and
              reliable pet sitter in Senanikom, Bangkok. I am passionate about
              animals and have dedicated myself to ensuring the well-being
              andsaa happiness of your furry, feathery, and hoppy companions.
              With a big heart and a spacious house, I provide a safe and loving
              environment for cats, dogs, and rabbits while you're away. Let me
              introduce myself and tell you a bit more about the pet care
              services I offer.
            </p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-black text-[20px] leading-[28px] font-bold md:text-[24px] md:leading-[32px]">
              Service
            </h3>
            <p className="text-primarygray-500 text-[14px] leading-[24px] font-medium md:text-[16] md:leading-[28px] ">
              🐱 Cat Sitting: Cats are fascinating creatures, and I take joy in
              catering to their independent yet affectionate nature. Whether
              your feline friend needs playtime, cuddles, or just a cozy spot to
              relax, I ensure they feel right at home.
            </p>
            <p className="text-primarygray-500 text-[14px] leading-[24px] font-medium md:text-[16] md:leading-[28px] ">
              🐶 Dog Sitting: Dogs are not just pets; they're family. From
              energetic walks and engaging playtime to soothing belly rubs, I
              provide a balanced and fun experience for dogs of all sizes and
              breeds. Safety and happiness are my top priorities.
            </p>
            <p className="text-primarygray-500 text-[14px] leading-[24px] font-medium md:text-[16] md:leading-[28px] ">
              🐇 Rabbit Sitting: With their adorable antics and gentle
              personalities, rabbits require a special kind of care. I am
              well-versed in providing them with a comfortable environment,
              appropriate diet, and ample playtime to keep them content and
              hopping with joy.
            </p>
          </div>
          <div className="flex flex-col gap-[24px] ">
            <h3 className="text-black text-[20px] leading-[28px] font-bold md:text-[24px] md:leading-[32px]">
              My Place
            </h3>
            <p className="text-primarygray-500 text-[14px] leading-[24px] font-medium md:text-[16] md:leading-[28px] ">
              My residence is a spacious house nestled in the serene
              neighborhood of Senanikom. Your beloved pets will have plenty of
              room to roam and explore while enjoying a safe and secure
              environment. I have designated areas for play, relaxation, and
              sleep, ensuring your pets feel comfortable and at ease throughout
              their stay.
            </p>
            <img src={map} className="rounded-[8px]"></img>
          </div>
        </div>
        <div className="bg-white  rounded-xl flex flex-col items-center max-h-[562px] ">
          <div className="flex flex-col items-center py-[40px] px-[24px] gap-[24px]">
            <img src={girl} className="w-[120px] max-w-[160px]"></img>
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
          <div className="p-[24px] gap-[16px] w-[328px] md:w-[368px]  ">
            <button type="submit" className="btn-primary">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 flex flex-col gap-[24px] p-[16px] lg:p-[24px] md:gap-[40px] ">
        <div className="flex flex-col p-[24px]  gap-[16px] md:gap-[24px] ">
          <div className="flex items-center justify-center bg-black text-white rounded-full  w-[146px] h-[146px]">
            <div className="flex flex-col items-center  ">
              <h1 className="text-[36px] leading-[44px] font-bold">4.5</h1>
              <p className="text-[14px] leading-[24px] font-medium">
                27 Reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] w-full">
            <p className="text-black text-20px leading-[28px] font-bold ">
              Rating & Reviews
            </p>
            <div className="flex flex-wrap gap-[8px]">
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
        <div className="flex flex-col md:flex-row gap-[16px]  ">
          <div className="flex justify-between ">
            <div className="flex gap-[16px]">
              <img src={davidM} className="h-fit "></img>
              <div className="w-[148px] w-max-[220px] ">
                <h1>David M.</h1>
                <p>Aug 16, 2023</p>
              </div>
            </div>
            <div className="flex gap-[2px] md:hidden">
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>
          </div>
          <div className="flex flex-col text-primarygray-500 text-[14px] leading-[24px] font-medium ">
            <div className="hidden gap-[2px] md:flex">
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>
            <p>
              I recently had the pleasure of entrusting Jane Maison with the
              care of my two energetic Labrador Retrievers, Max and Bella, while
              I was away on a business trip. I can confidently say that Jane
              exceeded all my expectations as a pet sitter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPetSitterTopLeft;
