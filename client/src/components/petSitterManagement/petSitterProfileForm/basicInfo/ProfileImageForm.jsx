import React, { useState } from 'react';
import petSitterWhiteProfile from "../../../../assets/svgs/pet-sitter-management/pet-sitter-whiteProfile.svg";
import petSitterAddImage from "../../../../assets/svgs/pet-sitter-management/pet-sitter-addImage.svg";

const ProfileImage = ({handleProfileImage}) => {
  const [profileImage, setProfileImage] = useState('');

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
        handleProfileImage(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[10px]">
        Profile Image
        <div className="w-[240px] h-[240px] rounded-full bg-[#DCDFED] relative flex items-center justify-center">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="w-[240px] h-[240px] rounded-full object-cover" />
          ) : (
            <img
              src={petSitterWhiteProfile}
              alt="Default Profile"
              className="w-[104px] h-[104px]"
            />
          )}
          <label className="absolute right-0 bottom-0 cursor-pointer">
            <input
              type="file"
              name="profile_image"
              className="hidden"
              onChange={handleChange}
            />
            <img
              src={petSitterAddImage}
              alt="Add Image"
              className="w-[60px] h-[60px]"
            />
          </label>
        </div>
      </label>
    </div>
  );
};

export default ProfileImage;