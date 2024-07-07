import React from "react";
import catLogo from "./main-content-imgs/cat-logo.png";
import blueStar from "./main-content-imgs/Star-blue.png";
import pinkStar from "./main-content-imgs/Star-pink.png";
import greenStar from "./main-content-imgs/Star-green.png";
import yellowStar from "./main-content-imgs/Star-yellow.png";

const MainContent = () => {
  return (
    <main>
      <div className="main-content-container flex flex-col items-center mb-[80px] lg:mb-[120px]">
        <div className="main-content-header mb-[80px] mt-[80px] lg:mb-[120px] lg:mt-[120px] text-center pl-5 pr-5 lg:pl-0 lg:pr-0">
          <h2 className="font-bold text-[24px] leading-[32px] sm:text-[36px] sm:leading-[44px]">
            "Your Pets, Our Priority: Perfect Care, Anytime, Anywhere."
          </h2>
        </div>
        <div className="main-content-body flex flex-col w-full lg:flex-row lg:w-8/12">
          <div className="main-content-text flex flex-col justify-center items-center gap-12">
            <div className="boarding-content w-full pl-6 pr-6 lg:w-8/12 lg:pl-0 lg:pr-0">
              <h3 className="font-bold text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] flex flex-row mb-3">
                <img
                  src={blueStar}
                  alt="blue-star"
                  className="w-[24px] h-[24px] mr-2"
                />
                Boarding
              </h3>
              <p className="text-[16px] leading-[28px] sm:text-[18px] sm:leading-[26px] ml-8">
                Your pets stay overnight in your sitter's home. They'll be
                treated like part of the family in a comfortable environment.
              </p>
            </div>
            <div className="house-sitting-content w-full pl-6 pr-6 lg:w-8/12 lg:pl-0 lg:pr-0">
              <h3 className="font-bold text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] flex flex-row mb-3">
                <img
                  src={pinkStar}
                  alt="pink-star"
                  className="w-[24px] h-[24px] mr-2"
                />
                House Sitting
              </h3>
              <p className="text-[16px] leading-[28px] sm:text-[18px] sm:leading-[26px] ml-8">
                Your sitter takes care of your pets and your home. Your pets
                will get all the attention they need without leaving home.
              </p>
            </div>
            <div className="dog-walking-content w-full pl-6 pr-6 lg:w-8/12 lg:pl-0 lg:pr-0">
              <h3 className="font-bold text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] flex flex-row mb-3">
                <img
                  src={greenStar}
                  alt="green-star"
                  className="w-[24px] h-[24px] mr-2"
                />
                Dog Walking
              </h3>
              <p className="text-[16px] leading-[28px] sm:text-[18px] sm:leading-[26px] ml-8">
                Your dog gets a walk around your neighborhood. Perfect for busy
                days and dogs with extra energy to burn.
              </p>
            </div>
            <div className="drop-in-visits-content w-full pl-6 pr-6 lg:w-8/12 lg:pl-0 lg:pr-0">
              <h3 className="font-bold text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] flex flex-row mb-3">
                <img
                  src={yellowStar}
                  alt="yellow-star"
                  className="w-[24px] h-[24px] mr-2"
                />
                Drop-In Visits
              </h3>
              <p className="text-[16px] leading-[28px] sm:text-[18px] sm:leading-[26px] ml-8">
                Your sitter drops by your home to play with your pets, offer
                food, and give potty breaks or clean the litter box.
              </p>
            </div>
          </div>
          <div className="cat-logo-main w-full lg:w-7/12 mt-12 lg:mt-0 flex items-center justify-center pl-5 pr-5 lg:pl-0 lg:pr-0">
            <img
              src={catLogo}
              alt="Cat being rubbed on the head"
              className="h-auto max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
