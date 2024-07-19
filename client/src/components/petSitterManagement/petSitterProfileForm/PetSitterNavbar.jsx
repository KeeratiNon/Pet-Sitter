import petSitterProfilePic from "../../../assets/svgs/pet-sitter-management/pet-sitter-whiteProfile.svg";
import petSitterChatLogo from "../../../assets/svgs/pet-sitter-management/pet-sitter-chatLogo.svg";

const Navbar = ({ formData }) => {
    const isDefaultProfilePic = formData.profile_image === "";
    const profileImage = isDefaultProfilePic ? petSitterProfilePic : formData.profile_image;
    const displayName = (formData.first_name && formData.last_name) 
        ? `${formData.first_name} ${formData.last_name}` 
        : "Anonymous";

    return (
        <nav className="flex justify-between items-center h-[72px] text-primarygray-600 text-[16px] leading-[28px] bg-primarygray-100">
          <div className="flex items-center ml-[60px] gap-[8px]">
            <div className="relative w-[40px] h-[40px] rounded-full bg-primarygray-200 flex items-center justify-center">
              <img
                src={profileImage}
                className={`${isDefaultProfilePic ? 'w-[20px] h-[20px]' : 'w-[40px] h-[40px]'} rounded-full`}
              />
            </div>
            <span>{displayName}</span>
          </div>
          <img
            src={petSitterChatLogo}
            className="w-[40px] h-[40px] mr-[60px]"
          />
        </nav>
    )
}

export default Navbar;