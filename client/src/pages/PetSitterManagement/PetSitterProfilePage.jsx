import { useState } from "react";
import petSitterGreenCircle from "../../assets/svgs/pet-sitter-management/pet-sitter-greenCircle.svg";

import Sidebar from "../../components/petSitterManagement/petSitterProfileForm/PetProfileSidebar";
import Navbar from "../../components/petSitterManagement/petSitterProfileForm/PetSitterNavbar";

// FORM 1: basic info
import ProfileImageForm from "../../components/petSitterManagement/petSitterProfileForm/basicInfo/ProfileImageForm";
import FirstnameForm from "../../components/petSitterManagement/petSitterProfileForm/basicInfo/FirstnameForm";
import LastnameForm from "../../components/petSitterManagement/petSitterProfileForm/basicInfo/LastnameForm";
import ExpForm from "../../components/petSitterManagement/petSitterProfileForm/basicInfo/ExpForm";
import PhoneNumberForm from "../../components/petSitterManagement/petSitterProfileForm/basicInfo/PhoneNumberForm";
import EmailForm from "../../components/petSitterManagement/petSitterProfileForm/basicInfo/EmailForm";
import IntroductionForm from "../../components/petSitterManagement/petSitterProfileForm/basicInfo/IntroductionForm";
import BankForm from "../../components/petSitterManagement/petSitterProfileForm/basicInfo/BankForm";
import AccountNumberForm from "../../components/petSitterManagement/petSitterProfileForm/basicInfo/AccountNumberForm";

// FORM 2: pet sitter
import PetSitterNameForm from "../../components/petSitterManagement/petSitterProfileForm/petSitterDetail/PetSitterNameForm";
import PetTypeForm from "../../components/petSitterManagement/petSitterProfileForm/petSitterDetail/PetTypeForm";
import ServicesForm from "../../components/petSitterManagement/petSitterProfileForm/petSitterDetail/ServicesForm";
import MyPlaceForm from "../../components/petSitterManagement/petSitterProfileForm/petSitterDetail/MyPlaceForm";
import ImageGalleryForm from "../../components/petSitterManagement/petSitterProfileForm/petSitterDetail/ImageGalleryForm";

// FORM 3: address
import AddressDetailForm from "../../components/petSitterManagement/petSitterProfileForm/address/AddressDetailForm";
import DistrictForm from "../../components/petSitterManagement/petSitterProfileForm/address/DistrictForm";
import SubDistrictForm from "../../components/petSitterManagement/petSitterProfileForm/address/SubDistrictForm";
import ProvinceForm from "../../components/petSitterManagement/petSitterProfileForm/address/ProvinceForm";
import PostCodeForm from "../../components/petSitterManagement/petSitterProfileForm/address/PostCodeForm";

const PetSitterProfilePage = () => {
  const [formData, setFormData] = useState({
    profile_image: "",
    first_name: "",
    last_name: "",
    experience: "",
    phone_number: "",
    email: "",
    introduction: "",
    bank: "",
    account_number: "",
    petsitter_name: "",
    pet_type: [],
    services: "",
    my_place: "",
    image_gallery: [],
    address_detail: "",
    district: "",
    sub_district: "",
    province: "",
    post_code: "",
  });

  const handleProfileImage = (imageData) => {
    setFormData((prev) => ({
      ...prev,
      profile_image: imageData,
    }));
  };

  const handleFirstName = (event) => {
    setFormData((prev) => ({
      ...prev,
      first_name: event.target.value,
    }));
  };

  const handleLastName = (event) => {
    setFormData((prev) => ({
      ...prev,
      last_name: event.target.value,
    }));
  };

  const handleExp = (event) => {
    setFormData((prev) => ({
      ...prev,
      experience: event.target.value,
    }));
  };

  const handlePhoneNumber = (event) => {
    setFormData((prev) => ({
      ...prev,
      phone_number: event.target.value,
    }));
  };

  const handleEmail = (event) => {
    setFormData((prev) => ({
      ...prev,
      email: event.target.value,
    }));
  };

  const handleIntroduction = (event) => {
    setFormData((prev) => ({
      ...prev,
      introduction: event.target.value,
    }));
  };

  const handleBank = (event) => {
    setFormData((prev) => ({
      ...prev,
      bank: event.target.value,
    }));
  };

  const handleAccountNumber = (event) => {
    setFormData((prev) => ({
      ...prev,
      account_number: event.target.value,
    }));
  };

  const handlePetSitterName = (event) => {
    setFormData((prev) => ({
      ...prev,
      petsitter_name: event.target.value,
    }));
  };

  const petOptions = ["Dog", "Cat", "Bird", "Fish", "Other"];

  const handlePetTypeSelect = (event) => {
    const selectedPet = event.target.value;
    if (selectedPet && !formData.pet_type.includes(selectedPet)) {
      setFormData((prev) => ({
        ...prev,
        pet_type: [...prev.pet_type, selectedPet],
        currentSelection: "",
      }));
    }
  };

  const handlePetTypeRemove = (pet) => {
    setFormData((prev) => ({
      ...prev,
      pet_type: prev.pet_type.filter((p) => p !== pet),
    }));
  };

  const handleServices = (event) => {
    setFormData((prev) => ({
      ...prev,
      services: event.target.value,
    }));
  };

  const handleMyPlace = (event) => {
    setFormData((prev) => ({
      ...prev,
      my_place: event.target.value,
    }));
  };

  const handleImageUpload = (event) => {
    if (formData.image_gallery.length < 10) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            ...prev,
            image_gallery: [...prev.image_gallery, reader.result],
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      alert('You can only upload up to 10 images.');
    }
  };

  const handleRemoveImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      image_gallery: prev.image_gallery.filter((_, i) => i !== index),
    }));
  };

  const handleAddressDetail = (event) => {
    setFormData((prev) => ({
      ...prev,
      address_detail: event.target.value,
    }));
  };

  const handleDistrict = (event) => {
    setFormData((prev) => ({
      ...prev,
      district: event.target.value,
    }));
  };

  const handleSubDistrict = (event) => {
    setFormData((prev) => ({
      ...prev,
      sub_district: event.target.value,
    }));
  };

  const handleProvince = (event) => {
    setFormData((prev) => ({
      ...prev,
      province: event.target.value,
    }));
  };

  const handlePostCode = (event) => {
    setFormData((prev) => ({
      ...prev,
      post_code: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex bg-primarygray-100">
      {/*-- PAGE BG CONTAINER -- */}
      <Sidebar />
      <div className="flex flex-col gap-[8px] min-w-[1024px] w-full">
        {/*-- NAV BAR AND PROFILE FORM CONTAINER -- */}
        <Navbar />
        <main className="flex flex-col gap-[24px] bg-[#F6F6F9] pb-[80px]">
          {/*-- PROFILE FORM CONTAINER -- */}
          <div className="flex items-center justify-between pl-[60px] mr-[48px] mt-[54px] w-[96%]">
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
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn-primary w-[120px] h-[48px]"
            >
              Update
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-[24px]"
          >
            {/*-- PROFILE FORM -- */}
            <div className="w-[93%] border rounded-2xl bg-primarygray-100 px-[80px] py-[40px] flex flex-col gap-[24px]">
              {/*-- PROFILE FORM 1 -- */}
              <p className="text-[20px] leading-[28px] text-primarygray-300 font-bold">
                Basic Information
              </p>
              <div className="max-w-[240px]">
                <ProfileImageForm handleProfileImage={handleProfileImage} />
              </div>
              <div className="grid grid-cols-3 gap-[24px]">
                <FirstnameForm handleFirstName={handleFirstName} firstName={formData.first_name}/>
                <LastnameForm handleLastName={handleLastName} lastName={formData.last_name}/>
                <ExpForm handleExp={handleExp} experience={formData.experience}/>
              </div>
              <div className="grid grid-cols-2 gap-[24px]">
                <PhoneNumberForm handlePhoneNumber={handlePhoneNumber} phoneNumber={formData.phone_number}/>
                <EmailForm handleEmail={handleEmail} email={formData.email}/>
              </div>
              <div>
                <IntroductionForm handleIntroduction={handleIntroduction} introduction={formData.introduction}/>
              </div>
              <div className="grid grid-cols-2 gap-[24px]">
                <BankForm handleBank={handleBank} />
                <AccountNumberForm handleAccountNumber={handleAccountNumber} accountNumber={formData.account_number}/>
              </div>
            </div>
            <div className="w-[93%] border rounded-2xl bg-primarygray-100 px-[80px] py-[40px] flex flex-col gap-[24px]">
              {/*-- PROFILE FORM 2 -- */}
              <p className="text-[20px] leading-[28px] text-primarygray-300 font-bold">
                Pet Sitter
              </p>
              <div>
                <PetSitterNameForm handlePetSitterName={handlePetSitterName} petSitterName={formData.petsitter_name}/>
              </div>
              <div>
                <PetTypeForm
                  pet_type={formData.pet_type}
                  currentSelection={formData.currentSelection}
                  handlePetTypeSelect={handlePetTypeSelect}
                  handlePetTypeRemove={handlePetTypeRemove}
                  petOptions={petOptions}
                />
              </div>
              <div>
                <ServicesForm handleServices={handleServices} services={formData.services}/>
              </div>
              <div><MyPlaceForm handleMyPlace={handleMyPlace} myPlace={formData.my_place}/></div>
              <div>
                <ImageGalleryForm image_gallery={formData.image_gallery}
                  handleImageUpload={handleImageUpload}
                  handleRemoveImage={handleRemoveImage}/>
              </div>
            </div>
            <div className="w-[93%] border rounded-2xl bg-primarygray-100 px-[80px] py-[40px] flex flex-col gap-[24px]">
              {/*-- PROFILE FORM 3 -- */}
              <p className="text-[20px] leading-[28px] text-primarygray-300 font-bold">
                Address
              </p>
              <div>
                <AddressDetailForm handleAddressDetail={handleAddressDetail} addressDetail={formData.address_detail}/>
              </div>
              <div className="grid grid-cols-2 gap-[24px]">
                <DistrictForm handleDistrict={handleDistrict} district={formData.district}/>
                <SubDistrictForm handleSubDistrict={handleSubDistrict} subDistrict={formData.sub_district}/>
              </div>
              <div className="grid grid-cols-2 gap-[24px]">
                <ProvinceForm handleProvince={handleProvince} province={formData.province}/>
                <PostCodeForm handlePostCode={handlePostCode} postCode={formData.post_code}/>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default PetSitterProfilePage;
