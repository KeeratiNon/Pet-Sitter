import petSitterGreenCircle from "../../assets/svgs/pet-sitter-management/pet-sitter-greenCircle.svg";

import Sidebar from "../../components/PetSitterProfileForm/PetProfileSidebar";
import Navbar from "../../components/PetSitterProfileForm/PetSitterNavbar";

// FORM 1: basic info
import ProfileImageForm from "../../components/PetSitterProfileForm/basicInfo/ProfileImageForm";
import FirstnameForm from "../../components/PetSitterProfileForm/basicInfo/FirstnameForm";
import LastnameForm from "../../components/PetSitterProfileForm/basicInfo/LastnameForm";
import ExpForm from "../../components/PetSitterProfileForm/basicInfo/ExpForm";
import PhoneNumberForm from "../../components/PetSitterProfileForm/basicInfo/PhoneNumberForm";
import EmailForm from "../../components/PetSitterProfileForm/basicInfo/EmailForm";
import IntroductionForm from "../../components/PetSitterProfileForm/basicInfo/IntroductionForm";
import BankForm from "../../components/PetSitterProfileForm/basicInfo/BankForm";
import AccountNumberForm from "../../components/PetSitterProfileForm/basicInfo/AccountNumberForm";

// FORM 2: pet sitter
import PetSitterNameForm from "../../components/PetSitterProfileForm/petSitterDetail/PetSitterNameForm";
import PetTypeForm from "../../components/PetSitterProfileForm/petSitterDetail/PetTypeForm";
import ServicesForm from "../../components/PetSitterProfileForm/petSitterDetail/ServicesForm";
import MyPlaceForm from "../../components/PetSitterProfileForm/petSitterDetail/MyPlaceForm";
import ImageGalleryForm from "../../components/PetSitterProfileForm/petSitterDetail/ImageGalleryForm";

// FORM 3: address
import AdressDetailForm from "../../components/PetSitterProfileForm/address/AddressDetailForm";
import DistrictForm from "../../components/PetSitterProfileForm/address/DistrictForm";
import SubDistrictForm from "../../components/PetSitterProfileForm/address/SubDistrictForm";
import ProvinceForm from "../../components/PetSitterProfileForm/address/ProvinceForm";
import PostCodeForm from "../../components/PetSitterProfileForm/address/PostCodeForm";

const PetSitterProfileTest = () => {
  return (
    <div className="flex bg-primarygray-100">
      {/*-- PAGE BG CONTAINER -- */}
      <Sidebar />
      <div className="flex flex-col gap-[8px] min-w-[1024px] w-full">
        {/*-- NAV BAR AND PROFILE FORM CONTAINER -- */}
        <Navbar />
        <main className="flex flex-col gap-[24px] bg-[#F6F6F9] pb-[80px]">
          {/*-- PROFILE FORM CONTAINER -- */}
          <div className="flex items-center justify-between mx-[48px] mt-[54px]">
            {/*-- PROFILE FORM HEADER -- */}
            <div className="flex gap-[24px]">
              <span className="text-[#2A2E3F] text-[24px] leading-[32px] font-bold">
                Pet Sitter Profile
              </span>
              <div className="flex items-center gap-[8px]">
                <img src={petSitterGreenCircle} className="w-[6px] h-[6px]" />
                <span className="text-[#1CCD83] text-[16px] leading-[24px]">
                  Approved
                </span>
              </div>
            </div>
            <button type="submit" className="btn-primary w-[120px] h-[48px]">
              Update
            </button>
          </div>
          <section className="flex flex-col items-center gap-[24px]">
            {/*-- PROFILE FORM 1-3 CONTAINER -- */}
            <div className="w-[93%] border rounded-2xl bg-primarygray-100 px-[80px] py-[40px] flex flex-col gap-[24px]">
              {/*-- PROFILE FORM 1 -- */}
              <p className="text-[20px] leading-[28px] text-primarygray-300 font-bold">
                Basic Information
              </p>
              <div className="max-w-[240px]">
                <ProfileImageForm />
              </div>
              <div className="grid grid-cols-3 gap-[24px]">
                <FirstnameForm />
                <LastnameForm />
                <ExpForm />
              </div>
              <div className="grid grid-cols-2 gap-[24px]">
                <PhoneNumberForm />
                <EmailForm />
              </div>
              <div>
                <IntroductionForm />
              </div>
              <div className="grid grid-cols-2 gap-[24px]">
                <BankForm />
                <AccountNumberForm />
              </div>
            </div>
            <div className="w-[93%] border rounded-2xl bg-primarygray-100 px-[80px] py-[40px] flex flex-col gap-[24px]">
              {/*-- PROFILE FORM 2 -- */}
              <p className="text-[20px] leading-[28px] text-primarygray-300 font-bold">
                Pet Sitter
              </p>
              <div>
                <PetSitterNameForm />
              </div>
              <div>
                <PetTypeForm />
              </div>
              <div>
                <ServicesForm />
              </div>
              <div>
                <MyPlaceForm />
              </div>
              <div>
                <ImageGalleryForm />
              </div>
            </div>
            <div className="w-[93%] border rounded-2xl bg-primarygray-100 px-[80px] py-[40px] flex flex-col gap-[24px]">
              {/*-- PROFILE FORM 3 -- */}
              <p className="text-[20px] leading-[28px] text-primarygray-300 font-bold">
                Address
              </p>
              <div>
                <AdressDetailForm />
              </div>
              <div className="grid grid-cols-2 gap-[24px]">
                <DistrictForm />
                <SubDistrictForm />
              </div>
              <div className="grid grid-cols-2 gap-[24px]">
                <ProvinceForm />
                <PostCodeForm />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PetSitterProfileTest;
