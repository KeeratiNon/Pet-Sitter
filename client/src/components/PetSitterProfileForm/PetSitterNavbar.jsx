import petSitterProfilePic from "../../assets/svgs/pet-sitter-management/pet-sitter-profilePic.png";
import petSitterChatLogo from "../../assets/svgs/pet-sitter-management/pet-sitter-chatLogo.svg";


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-[72px] text-primarygray-600 text-[16px] leading-[28px] bg-primarygray-100">
          <div className="flex items-center ml-[60px] gap-[8px]">
            <img
              src={petSitterProfilePic}
              className="rounded-full w-[40px] h-[40px]"
            />
            <span>Jane Maison</span>
          </div>
          <img
            src={petSitterChatLogo}
            className="w-[40px] h-[40px] mr-[60px]"
          />
        </nav>
    )
}

export default Navbar;