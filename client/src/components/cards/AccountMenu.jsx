import { useLocation, Link } from "react-router-dom";
import { IconUser } from "../../assets/svgs/icons/IconUser";
import { IconYourPet } from "../../assets/svgs/icons/IconYourPet";
import { IconUserBooking } from "../../assets/svgs/icons/IconUserBooking";

const AccountMenu = () => {
  const location = useLocation();

  return (
    <ul className="bg-white flex h-fit justify-between shadow-md md:flex-col md:py-6 md:rounded-2xl md:min-w-[292px]">
      <li className="hidden md:block md:px-6 md:pb-3">
        <span className="text-[20px] leading-[28px] font-bold">Account</span>
      </li>
      <li>
        <Link
          to="/user/profile"
          className={`group w-full flex items-center gap-3 py-3 px-6 ${
            location.pathname === "/user/profile" ? "bg-[#FFF1EC]" : ""
          } md:py-5 md:px-6`}
        >
          <IconUser
            fill={location.pathname === "/user/profile" ? "#FF7037" : "#AEB1C3"}
          />
          <span
            className={`text-[18px] leading-[27px] font-bold group-hover:text-[#FF7037] ${
              location.pathname === "/user/profile"
                ? "text-[#FF7037]"
                : "text-[#5B5D6F]"
            } md:block`}
          >
            Profile
          </span>
        </Link>
      </li>
      <li>
        <Link
          to="/user/pet"
          className={`group w-full flex items-center gap-3 py-3 px-6 ${
            location.pathname === "/user/pet" ? "bg-[#FFF1EC]" : ""
          } md:py-5 md:px-6`}
        >
          <IconYourPet
            fill={location.pathname === "/user/pet" ? "#FF7037" : "#AEB1C3"}
          />
          <span
            className={`text-[18px] leading-[27px] font-bold group-hover:text-[#FF7037] ${
              location.pathname === "/user/pet"
                ? "text-[#FF7037]"
                : "text-[#5B5D6F]"
            } md:block`}
          >
            Your Pet
          </span>
        </Link>
      </li>
      <li>
        <Link
          className={`group w-full flex items-center gap-3 py-3 px-6 ${
            location.pathname === "/user/booking" ? "bg-[#FFF1EC]" : ""
          } md:py-5 md:px-6`}
        >
          <IconUserBooking fill={"#AEB1C3"} />
          <span
            className={`text-[18px] leading-[27px] font-bold group-hover:text-[#FF7037] ${
              location.pathname === "/user/booking-history"
                ? "text-[#FF7037]"
                : "text-[#5B5D6F]"
            } md:block`}
          >
            Booking History
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default AccountMenu;
