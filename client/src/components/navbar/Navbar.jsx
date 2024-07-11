import { useAuth } from "../../contexts/authentication";
import { Link } from "react-router-dom";
import logoNavbar from "../../assets/svgs/logo-navbar.svg";
import iconNotify from "../../assets/svgs/icons/icon-notify.svg";
import iconBell from "../../assets/svgs/icons/icon-bell.svg";
import iconMessage from "../../assets/svgs/icons/icon-message.svg";
import iconHamburg from "../../assets/svgs/icons/icon-hamburger.svg";
import iconGuest from "../../assets/svgs/icons/icon-image-guest.svg";
import iconProfile from "../../assets/svgs/icons/icon-profile.svg";
import iconYourPet from "../../assets/svgs/icons/icon-your-pet.svg";
import iconBooking from "../../assets/svgs/icons/icon-booking.svg";
import iconLogout from "../../assets/svgs/icons/icon-logout.svg";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const { state } = useAuth();
  console.log("state user", state.user);

  return (
    <>
      <nav className="bg-white sticky top-0 z-50">
        <div className="flex items-center justify-between py-3 px-5 md:px-20">
          <img src={logoNavbar} alt="logo-navbar" />

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
            {!state.user ? (
              <>
                <li>
                  <Link to="/auth/register/petsitter">Become a Pet Sitter</Link>
                </li>
                <li>
                  <Link to="/auth/login/user">Login</Link>
                </li>
                <li>
                  <button className="btn-primary w-full">
                    <Link to="/search">Find A Pet Sitter</Link>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button className="icon-btn relative">
                    <img src={iconBell} alt="icon-bell" />
                    <img
                      src={iconNotify}
                      alt="icon-bell"
                      className="absolute top-1 right-1"
                    />
                  </button>
                </li>
                <li>
                  <button className="icon-btn relative">
                    <img src={iconMessage} alt="icon-message" />
                    <img
                      src={iconNotify}
                      alt="icon-message"
                      className="absolute top-1 right-1"
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <img src={iconGuest} alt="icon-guest" />
                  </button>
                </li>
                <li>
                  <button className="btn-primary w-full">
                    <Link to="/search">Find A Pet Sitter</Link>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <ul className="flex-col py-10 px-4 sticky top-[48px] bg-white h-[calc(100dvh-60px)] z-50 md:hidden">
          {!state.user ? (
            <>
              <li className="p-4">
                <Link to="/auth/register/petsitter">Become a Pet Sitter</Link>
              </li>
              <li className="p-4">
                <Link to="/auth/login/user">Login</Link>
              </li>
              <li className="p-4">
                <button className="btn-primary w-full">
                  <Link to="/search">Find A Pet Sitter</Link>
                </button>
              </li>{" "}
            </>
          ) : (
            <>
              <li className="flex gap-3 p-4">
                <img src={iconProfile} alt="icon-profile" />
                <Link to="/petsitter/profile">Profile</Link>
              </li>
              <li className="flex gap-3 p-4">
                <img src={iconYourPet} alt="icon-your-pet" />
                <Link>Your Pet</Link>
              </li>
              <li className="flex gap-3 p-4">
                <img src={iconBooking} alt="icon-booking" />
                <Link>Booking History</Link>
              </li>
              <hr />
              <li className="flex gap-3 p-4">
                <img src={iconLogout} alt="icon-logout" />
                <Link>Log out</Link>
              </li>
              <li className="p-4">
                <button className="btn-primary w-full">
                  <Link to="/search">Find A Pet Sitter</Link>
                </button>
              </li>{" "}
            </>
          )}
        </ul>
      )}
    </>
  );
};

export default Navbar;
