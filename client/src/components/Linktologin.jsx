import React from "react";
import ellpesb from "../assets/svgs/ellipesb.svg";
import ellpesa from "../assets/svgs/ellipesa.svg";
import star1 from "../assets/svgs/star1.svg";

const Linktologin = () => {
  return (
    <main
      className="  flex justify-center items-center  p-0  md:p-[80px]  object-cover  bg-slate-500  "
    >
      <body className=" overflow-hidden container bg-secondaryyellow-100 rounded-none w-[375px] h-[469px]  flex flex-col-reverse  relative md:rounded-[10px] md:w-[608px] lg:w-[864px] xl:w-[1280px] xl:h-[448px] ">
        <div className="  absolute w-[248px] h-[124px]  left-[-28px]  md:left-[0px] xl:w-[337px] xl:h-[167px]  ">
          <img className="rounded-bl-lg" src={ellpesb} alt="half circle" />
        </div>
        <div className="  text-primaryorange-100 top-[130px] left-[15px] gap-3  z-50 flex flex-col absolute  md:left-[130px] lg:left-[300px] xl:left-[400px] " >
          <h1 className="text-[36px] leading-[44px]  text-center  font-bold text-black xl:text-[56px] xl:leading-[64px] ">
            Perfect Pet Sitter <br /> <span>For Your Pet</span>
          </h1>
          <div className=" gap-6 mt-10 flex flex-col items-center xl:flex-row xl:justify-center " >
            <button className="text-primaryorange-500 ">
              Become a Pet Sitter
            </button>
            <button className="  w-[344px] h-[48px]  bg-primaryorange-500 rounded-[99px]  text-[16px] pt-[12px] pr-[24px] pb-[12px] pl-[24px]  xl:w-[168px] xl:h-[48px]  ">
              Find A Pet Sitter
            </button>
          </div>
        </div>
        <div className="w-[188px] h-[161px] top-[0px] left-[187px] absolute overflow-hidden md:left-[400px] md:top-[50px] md:z-0 md:overflow-visible lg:left-[656px] xl:left-[1011px] xl:top-[45px] ">
          <div className=" absolute w-[133.76px] h-[133.81px]  top-[-65.98px] left-[75.38px]  rotate-[-15.01deg] md:top-[-50px] xl:w-[229px] xl:h-[229px]  ">
            <img src={ellpesa} alt="circle" className="  rounded-tr-lg  md:rotate-[15deg]  " />
          </div>
          <div className="absolute w-[111.57px] h-[108.68px]  top-[33.41px] left-[18.12px] rotate-[-7.01deg]  md:top-[50px] lg:w-[130px] lg:left-[10px] xl:w-[191px] xl:h-[186px] xl:left-[-23.14px] 
              xl:top-[99px] ">
            <img src={star1} alt="star"  />
          </div>
        </div>
      </body>
    </main>
  );
};

export default Linktologin;
