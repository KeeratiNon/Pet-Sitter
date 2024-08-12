import React, { useState, useEffect } from "react";
import logoNavbar from "../../assets/svgs/logo-navbar.svg";
import iconNotify from "../../assets/svgs/icons/icon-notify.svg";
import iconBell from "../../assets/svgs/icons/icon-bell.svg";
import iconMessage from "../../assets/svgs/icons/icon-message.svg";
import iconHamburg from "../../assets/svgs/icons/icon-hamburger.svg";
import iconUser from "../../assets/svgs/pet-sitter-management/pet-sitter-whiteProfile.svg";
import iconProfile from "../../assets/svgs/icons/icon-profile.svg";
import iconBooking from "../../assets/svgs/icons/icon-booking.svg";
import iconLogout from "../../assets/svgs/icons/icon-logout.svg";
import iconPetsitterPayment from "../../assets/svgs/pet-sitter-management/pet-sitter-payment.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import useBookingStatus from "../../hooks/useBookingStatus";
import axios from "axios";
import { SERVER_API_URL } from "../../core/config.mjs";
import { useSocket } from "../../contexts/socket";
import ChatManuNavbar from "./ChatMenuNavbar";

const PetsitterNavbar = () => {
  const { logout, state } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const hasWaitingForConfirm = useBookingStatus();
  const {
    socket,
    chatRoomList,
    joinChatRoom,
    getChatRoomList,
    hasNewNotification,
    setHasNewNotification,
  } = useSocket();
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (state.user) {
      fetchProfileData();
    }
  }, [state.user]);

  useEffect(() => {
    if (socket) {
      socket.on("newNotification", () => {
        setHasNewNotification(true);
        getChatRoomList();
      });
    }
    return () => {
      if (socket) {
        socket.off("newNotification");
      }
    };
  }, [socket]);

  useEffect(() => {
    if (socket) {
      getChatRoomList();
    }
  }, [socket]);

  const fetchProfileData = async () => {
    try {
      const { data } = await axios.get(`${SERVER_API_URL}/petsitter`);
      if (
        data &&
        data.result &&
        data.result.length > 0 &&
        data.result[0].profile_image
      ) {
        setProfilePic(data.result[0].profile_image);
      } else {
        console.warn("Profile data is missing or malformed:", data);
      }
    } catch (error) {
      console.error("Error fetching profile data", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white z-50 fixed w-full top-0 left-0">
        <div className="flex items-center justify-between py-3 px-5 md:px-20">
          <Link to="/" onClick={() => setHasNewNotification(false)}>
            <img src={logoNavbar} alt="logo-navbar" />
          </Link>
          <div className="md:hidden">
            <div className="flex gap-6">
              {hasWaitingForConfirm ? (
                <Link to="/petsitter/booking" className="relative">
                  <button className="relative">
                    <img src={iconBell} alt="icon-bell" />
                    {hasWaitingForConfirm && (
                      <img
                        src={iconNotify}
                        alt="notification-icon"
                        className="absolute top-0 right-0"
                      />
                    )}
                  </button>
                </Link>
              ) : (
                <button className="relative">
                  <img src={iconBell} alt="icon-bell" />
                  {hasWaitingForConfirm && (
                    <img
                      src={iconNotify}
                      alt="notification-icon"
                      className="absolute top-0 right-0"
                    />
                  )}
                </button>
              )}
              <Link to="/chat">
                <button className="relative">
                  <img src={iconMessage} alt="icon-message" />
                  <img
                    src={iconNotify}
                    alt="icon-message"
                    className="absolute top-0 right-0"
                  />
                </button>
              </Link>
              <button onClick={toggleMenu}>
                <img src={iconHamburg} alt="icon-hamburger" />
              </button>
            </div>
          </div>

          <ul
            className={`hidden md:flex items-center ${
              !state.user ? "gap-10" : "gap-6"
            }`}
          >
            {!state.user ? (
              <>
                <Link to="/auth/login/petsitter">
                  <li>Become a Pet Sitter</li>
                </Link>
                <Link to="/auth/login/user">
                  <li>Login</li>
                </Link>
                <Link to="/search">
                  <li>
                    <button className="btn-primary">Find A Pet Sitter</button>
                  </li>
                </Link>
              </>
            ) : (
              <>
                <li>
                  <button className="icon-btn relative">
                    {hasWaitingForConfirm ? (
                      <Link to="/petsitter/booking">
                        <img src={iconBell} alt="icon-bell" />
                        <img
                          src={iconNotify}
                          alt="notification-icon"
                          className="absolute top-1 right-1"
                        />
                      </Link>
                    ) : (
                      <>
                        <img src={iconBell} alt="icon-bell" />
                        {hasWaitingForConfirm && (
                          <img
                            src={iconNotify}
                            alt="notification-icon"
                            className="absolute top-1 right-1"
                          />
                        )}
                      </>
                    )}
                  </button>
                </li>
                <li>
                  <button
                    className="icon-btn relative"
                    onClick={() => {
                      setIsChatOpen(!isChatOpen);
                    }}
                  >
                    <img src={iconMessage} alt="icon-message" />
                    {hasNewNotification && (
                      <img
                        src={iconNotify}
                        alt="icon-message"
                        className="absolute top-1 right-1"
                      />
                    )}
                  </button>
                  {isChatOpen && (
                    <ul className="absolute right-0 w-[400px] mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50">
                      {chatRoomList.map((chatRoom, index) => {
                        return (
                          <li
                            className="flex gap-3"
                            key={index}
                            onClick={() => {
                              joinChatRoom(chatRoom);
                              setIsChatOpen(false);
                            }}
                          >
                            <ChatManuNavbar chatRoom={chatRoom} />
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    className="w-12 h-12 rounded-full bg-[#DCDFED] flex items-center justify-center"
                    onClick={toggleMenu}
                  >
                    {profilePic ? (
                      <img
                        src={profilePic}
                        alt="icon-user"
                        className="rounded-full w-12 h-12 object-cover"
                      />
                    ) : (
                      <img src={iconUser} alt="icon-user" className="w-5 h-5" />
                    )}
                  </button>

                  {isMenuOpen && (
                    <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
                      <Link to="/petsitter/profile" onClick={closeMenu}>
                        <li className="flex gap-3 p-4 hover:bg-gray-100">
                          <img src={iconProfile} alt="icon-profile" />
                          Profile
                        </li>
                      </Link>
                      <Link to="/petsitter/booking" onClick={closeMenu}>
                        <li className="flex gap-3 p-4 hover:bg-gray-100">
                          <img src={iconBooking} alt="icon-petsitter-booking" />
                          Booking List
                        </li>
                      </Link>
                      <Link to="/petsitter/payout-option" onClick={closeMenu}>
                        <li className="flex gap-3 p-4 hover:bg-gray-100">
                          <img
                            src={iconPetsitterPayment}
                            alt="icon-petsitter-payment"
                          />
                          Payout Option
                        </li>
                      </Link>
                      <hr />
                      <li className=" hover:bg-gray-100 ">
                        <button
                          className="flex gap-3 p-4 w-full"
                          onClick={() => {
                            logout();
                            closeMenu();
                          }}
                        >
                          <img src={iconLogout} alt="icon-logout" />
                          Log out
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
                <Link to="/search">
                  <li>
                    <button className="btn-primary">Find A Pet Sitter</button>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>

      <div className="pt-16">
        {isMenuOpen && (
          <ul className="flex-col py-10 px-4 md:hidden bg-white w-full shadow-md absolute top-0 left-0 z-40">
            {!state.user ? (
              <>
                <Link to="/auth/register/petsitter">
                  <li className="p-4 pt-8 hover:bg-gray-100">
                    Become a Pet Sitter
                  </li>
                </Link>
                <Link to="/auth/login/user">
                  <li className="p-4">Login</li>
                </Link>
                <Link to="/search">
                  <li className="p-4 hover:bg-gray-100">
                    <button className="btn-primary w-full">
                      Find A Pet Sitter
                    </button>
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/petsitter/profile" onClick={closeMenu}>
                  <li className="flex gap-3 p-4 pt-8 hover:bg-gray-100">
                    <img src={iconProfile} alt="icon-profile" />
                    Profile
                  </li>
                </Link>
                <Link to="/petsitter/booking" onClick={closeMenu}>
                  <li className="flex gap-3 p-4 hover:bg-gray-100">
                    <img src={iconBooking} alt="icon-petsitter-booking" />
                    Booking List
                  </li>
                </Link>
                <Link to="/petsitter/payout-option" onClick={closeMenu}>
                  <li className="flex gap-3 p-4 hover:bg-gray-100">
                    <img
                      src={iconPetsitterPayment}
                      alt="icon-petsitter-payment"
                    />
                    Payout Option
                  </li>
                </Link>
                <hr />
                <li className="hover:bg-gray-100">
                  <button
                    className="flex gap-3 p-4 w-full"
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                  >
                    <img src={iconLogout} alt="icon-logout" />
                    Log out
                  </button>
                </li>
                <Link to="/search" onClick={closeMenu}>
                  <li className="p-4">
                    <button className="btn-primary w-full">
                      Find A Pet Sitter
                    </button>
                  </li>
                </Link>
              </>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default PetsitterNavbar;
