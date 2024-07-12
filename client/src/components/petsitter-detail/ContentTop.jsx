import React from "react";

import map from "../../assets/images/map.png";

const ContentTop = () => {
  return (
    <div className="flex flex-col py-[40px] px-[16px]  lg:py-[24px] gap-[24px] lg:gap-[48px] lg:px-[80px]   ">
      <h1 className="text-black text-[36px] leading-[44px] font-bold md:text-[56px] md:leading-[64px] ">
        Happy House!
      </h1>
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-black text-[20px] leading-[28px] font-bold md:text-[24px] md:leading-[32px] ">
          Introduction
        </h3>
        <p className="text-primarygray-500 text-[14px] leading-[24px] font-medium md:text-[16px] md:leading-[28px] ">
          Hello there! My name is Jane Maison, and I'm your friendly and
          reliable pet sitter in Senanikom, Bangkok. I am passionate about
          animals and have dedicated myself to ensuring the well-being andsaa
          happiness of your furry, feathery, and hoppy companions. With a big
          heart and a spacious house, I provide a safe and loving environment
          for cats, dogs, and rabbits while you're away. Let me introduce myself
          and tell you a bit more about the pet care services I offer.
        </p>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-black text-[20px] leading-[28px] font-bold md:text-[24px] md:leading-[32px]">
          Service
        </h3>
        <p className="text-primarygray-500 text-[14px] leading-[24px] font-medium md:text-[16px] md:leading-[28px] ">
          🐱 Cat Sitting: Cats are fascinating creatures, and I take joy in
          catering to their independent yet affectionate nature. Whether your
          feline friend needs playtime, cuddles, or just a cozy spot to relax, I
          ensure they feel right at home.
        </p>
        <p className="text-primarygray-500 text-[14px] leading-[24px] font-medium md:text-[16px] md:leading-[28px] ">
          🐶 Dog Sitting: Dogs are not just pets; they're family. From energetic
          walks and engaging playtime to soothing belly rubs, I provide a
          balanced and fun experience for dogs of all sizes and breeds. Safety
          and happiness are my top priorities.
        </p>
        <p className="text-primarygray-500 text-[14px] leading-[24px] font-medium md:text-[16px] md:leading-[28px] ">
          🐇 Rabbit Sitting: With their adorable antics and gentle
          personalities, rabbits require a special kind of care. I am
          well-versed in providing them with a comfortable environment,
          appropriate diet, and ample playtime to keep them content and hopping
          with joy.
        </p>
      </div>
      <div className="flex flex-col gap-[24px] ">
        <h3 className="text-black text-[20px] leading-[28px] font-bold md:text-[24px] md:leading-[32px]">
          My Place
        </h3>
        <p className="text-primarygray-500 text-[14px] leading-[24px] font-medium md:text-[16px] md:leading-[28px] ">
          My residence is a spacious house nestled in the serene neighborhood of
          Senanikom. Your beloved pets will have plenty of room to roam and
          explore while enjoying a safe and secure environment. I have
          designated areas for play, relaxation, and sleep, ensuring your pets
          feel comfortable and at ease throughout their stay.
        </p>
        <img src={map} className="rounded-[8px]"></img>
      </div>
    </div>
  );
};
export default ContentTop;
