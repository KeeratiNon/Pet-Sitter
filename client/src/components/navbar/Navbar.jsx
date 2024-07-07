import { useState } from "react";
import logoNavbar from "../../assets/svgs/logo-navbar.svg";
import iconNotify from "../../assets/svgs/icons/icon-notify.svg";
import iconBell from "../../assets/svgs/icons/icon-bell.svg";
import iconMessage from "../../assets/svgs/icons/icon-message.svg";
import iconHamburg from "../../assets/svgs/icons/icon-hamburger.svg";
import iconProfile from "../../assets/svgs/icons/icon-profile.svg";
import iconYourPet from "../../assets/svgs/icons/icon-your-pet.svg";
import iconBooking from "../../assets/svgs/icons/icon-booking.svg";
import iconLogout from "../../assets/svgs/icons/icon-logout.svg";
import ProfileInfo from "../cards/ProfileInfo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between py-3 px-5 md:px-20">
        <button onClick={() => {}}>
          <img src={logoNavbar} alt="logo-navbar" />
        </button>

        {/* Toggle Menu Button*/}
        <div className="md:hidden">
          <div className="flex gap-6">
            <button className="relative">
              <img src={iconBell} alt="icon-bell" />
              <img
                src={iconNotify}
                alt="icon-bell"
                className="absolute top-0 right-0"
              />
            </button>

            <button className="relative">
              <img src={iconMessage} alt="icon-message" />
              <img
                src={iconNotify}
                alt="icon-message"
                className="absolute top-0 right-0"
              />
            </button>

            <button onClick={toggleMenu}>
              <img src={iconHamburg} alt="icon-hamburger" />
            </button>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-10">
          <li>
            <a href="#">Become a Pet Sitter</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <button className="btn-primary">Find A Pet Sitter</button>
          </li>
        </ul>

        {/* <ProfileInfo /> */}
      </div>

      {/* Mobile Menu*/}
      {isMenuOpen && (
        <ul className="flex-col py-10 px-4 md:hidden">
          <li className="p-4">
            <a href="#">Become a Pet Sitter</a>
          </li>
          <li className="p-4">
            <a href="#">Login</a>
          </li>
          <li className="p-4">
            <button className="btn-primary w-full">Find A Pet Sitter</button>
          </li>
        </ul>
      )}

      <ul className="flex-col py-10 px-4 md:hidden">
        <li className="flex gap-3 p-4">
          <img src={iconProfile} alt="icon-profile" />
          <a href="#">Profile</a>
        </li>
        <li className="flex gap-3 p-4">
          <img src={iconYourPet} alt="icon-your-pet" />
          <a href="#">Your Pet</a>
        </li>
        <li className="flex gap-3 p-4">
          <img src={iconBooking} alt="icon-booking" />
          <a href="#">Booking History</a>
        </li>
        <hr />
        <li className="flex gap-3 p-4">
          <img src={iconLogout} alt="icon-logout" />
          <a href="#">Log out</a>
        </li>
        <li className="p-4">
          <button className="btn-primary w-full">Find A Pet Sitter</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
