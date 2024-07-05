import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SocialButton from "../components/buttons/SocialButton";
import GhostButton from "../components/buttons/GhostButton";
import DogFoot from "../assets/svgs/dog-foot.svg";
import DogFootLg from "../assets/svgs/dog-foot-lg.svg"
import StarGreen from "../assets/svgs/star-green.svg";
import CurveBlue from "../assets/svgs/curve-blue.svg";

const RegisterOwnerPetPage = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="w-screen flex items-center justify-center px-[16px] pt-[60px]">
        <img src={CurveBlue} alt="CurveBlue" className="hidden sm:flex sm:absolute sm:bottom-[250px] sm:left-[12.66px]" />
        <img src={StarGreen} alt="StarGreen" className="hidden sm:flex sm:absolute sm:bottom-0 sm:left-0" />
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
            <PrimaryButton text="Register" />
            <div className="w-[100%] flex gap-[20px] items-center">
              <span className="flex flex-1 h-[1px] bg-gray-200"></span>
              <span className="text-gray-400 text-[18px] leading-[26px] font-medium">Or Continue With</span>
              <span className="flex flex-1 h-[1px] bg-gray-200"></span>
            </div>
            <div className="w-[100%] flex justify-center items-center gap-[12px]">
              <SocialButton
                text="Facebook"
                svg={
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5 10.0611C20.5 4.50451 16.0229 0 10.5 0C4.97715 0 0.5 4.50451 0.5 10.0611C0.5 15.0828 4.15684 19.2452 8.9375 20V12.9694H6.39844V10.0611H8.9375V7.84452C8.9375 5.32296 10.4305 3.93012 12.7146 3.93012C13.8084 3.93012 14.9531 4.12663 14.9531 4.12663V6.60261H13.6922C12.45 6.60261 12.0625 7.37822 12.0625 8.17465V10.0611H14.8359L14.3926 12.9694H12.0625V20C16.8432 19.2452 20.5 15.0828 20.5 10.0611Z"
                      fill="#1877F2"
                    />
                  </svg>
                }
              />
              <SocialButton
                text="Google"
                svg={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6047 12.2301C21.6047 11.5504 21.5496 10.867 21.432 10.1982H12V14.0489H17.4013C17.1771 15.2908 16.457 16.3895 15.4024 17.0876V19.5861H18.6248C20.5171 17.8445 21.6047 15.2725 21.6047 12.2301Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M11.9984 22C14.6954 22 16.9698 21.1145 18.6269 19.586L15.4045 17.0874C14.508 17.6974 13.3506 18.0428 12.0021 18.0428C9.39334 18.0428 7.18141 16.2828 6.38775 13.9165H3.0625V16.4922C4.76003 19.8689 8.21756 22 11.9984 22Z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.38529 13.9165C5.96642 12.6746 5.96642 11.3298 6.38529 10.0879V7.51221H3.06371C1.64543 10.3378 1.64543 13.6667 3.06371 16.4922L6.38529 13.9165Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M11.9984 5.95791C13.4241 5.93586 14.8019 6.47231 15.8344 7.45703L18.6894 4.60209C16.8816 2.90456 14.4823 1.97128 11.9984 2.00067C8.21756 2.00067 4.76003 4.13178 3.0625 7.51214L6.38408 10.0878C7.17406 7.71791 9.38967 5.95791 11.9984 5.95791Z"
                      fill="#EA4335"
                    />
                  </svg>
                }
              />
            </div>
            <div className="flex justify-center items-center gap-[8px]">
              <span>
                <p className="">Already have an account?</p>
              </span>
              <span>
                <GhostButton text="Login" />
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
