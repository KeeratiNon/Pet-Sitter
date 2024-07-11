import { Link } from "react-router-dom";
import iconProfile from "../../assets/svgs/icons/icon-profile.svg";
import iconYourPet from "../../assets/svgs/icons/icon-your-pet.svg";
import iconBooking from "../../assets/svgs/icons/icon-booking.svg";

const AccountMenu = () => {
  return (
    <ul className="flex overflow-hidden">
      <li className="hidden">
        <span>Account</span>
      </li>
      <li className="flex gap-3 py-3 px-6">
        <img src={iconProfile} alt="icon-profile" />
        <Link>Profile</Link>
      </li>
      <li className="flex gap-3 py-3 px-6">
        <img src={iconYourPet} alt="icon-your-pet" />
        <Link>Your Pet</Link>
      </li>
      <li className="flex gap-3 py-3 px-6">
        <img src={iconBooking} alt="icon-booking" />
        <Link>Booking History</Link>
      </li>
    </ul>
  );
};

export default AccountMenu;
