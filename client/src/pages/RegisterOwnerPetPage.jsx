import React from "react";
import DogFoot from "../assets/svgs/dog-foot.svg";
import DogFootLg from "../assets/svgs/dog-foot-lg.svg";
import StarGreen from "../assets/svgs/star-green.svg";
import CurveBlue from "../assets/svgs/curve-blue.svg";
import Google from "../assets/svgs/logo-google.svg"
import Facebook from "../assets/svgs/logo-facebook.svg"

const RegisterOwnerPetPage = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="w-screen flex items-center justify-center px-[16px] pt-[60px]">
        <img
          src={CurveBlue}
          alt="CurveBlue"
          className="hidden sm:flex sm:absolute sm:bottom-[250px] sm:left-[12.66px]"
        />
        <img
          src={StarGreen}
          alt="StarGreen"
          className="hidden sm:flex sm:absolute sm:bottom-0 sm:left-0"
        />
        <div className="w-[100%] flex flex-col items-center max-w-[440px] min-w-[343px] z-10">
          <header className="flex flex-col items-center justify-center gap-[8px] mb-[40px]">
            <h1 className="text-black text-[36px] sm:text-[56px] leading-[44px] sm:leading-[64px] font-bold">
              Join Us!
            </h1>
            <h3 className="text-gray-400 text-[18px] sm:text-[24px] leading-[26px] sm:leading-[32px] font-medium sm:font-bold">
              Find your perfect pet sitter with us
            </h3>
          </header>
          <main className="flex flex-col items-center justify-center gap-[32px] w-[100%]">
            <div className="flex flex-col gap-[4px] w-[100%]">
              <label
                htmlFor="email"
                className="font-medium text-[16px] leading-[24px]"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="email@company.com"
                className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
              />
            </div>
            <div className="flex flex-col gap-[4px] w-[100%]">
              <label
                htmlFor="tel"
                className="font-medium text-[16px] leading-[24px]"
              >
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
              />
            </div>
            <div className="flex flex-col gap-[4px] w-[100%]">
              <label
                htmlFor="password"
                className="font-medium text-[16px] leading-[24px]"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Create your password"
                className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
              />
            </div>
            <button type="submit" className="btn-primary">
              Register
            </button>
            <div className="w-[100%] flex gap-[20px] items-center">
              <span className="flex flex-1 h-[1px] bg-gray-200"></span>
              <span className="text-gray-400 text-[18px] leading-[26px] font-medium">
                Or Continue With
              </span>
              <span className="flex flex-1 h-[1px] bg-gray-200"></span>
            </div>
            <div className="w-[100%] flex justify-center items-center gap-[12px]">
              <button className="btn-social">
                <span>
                  <img
                    src={Facebook}
                    alt="facebook"
                  />
                </span>
                <span>Facebook</span>
              </button>
              <button className="btn-social">
                <span>
                  <img
                    src={Google}
                    alt="Google"
                  />
                </span>
                <span>Google</span>
              </button>
            </div>
            <div className="flex justify-center items-center gap-[8px]">
              <span>
                <p className="">Already have an account?</p>
              </span>
              <span>
                <button className="btn-ghost">
                  Login
                </button>
              </span>
            </div>
          </main>
        </div>
        <img
          src={DogFoot}
          alt="DogFoot"
          className="absolute right-0 top-0 sm:hidden"
        />
        <img
          src={DogFootLg}
          alt="DogFoot"
          className="hidden sm:absolute sm:flex sm:top-[49px] sm:right-0"
        />
      </div>
    </form>
  );
};

export default RegisterOwnerPetPage;
