import sitterLogo from "../../assets/svgs/logo-navbar.svg";
import petSitterBookingList from "../../assets/svgs/pet-sitter-management/pet-sitter-booking-list.svg";
import petSitterOrangeProfile from "../../assets/svgs/pet-sitter-management/pet-sitter-orangeProfile.svg";
import petSitterPayment from "../../assets/svgs/pet-sitter-management/pet-sitter-payment.svg";
import petSitterLogout from "../../assets/svgs/pet-sitter-management/pet-sitter-logout.svg";
import petSitterOrangeCircle from "../../assets/svgs/pet-sitter-management/pet-sitter-orangeCircle.svg";

const Sidebar = () => {
  return (
    <section className="w-[240px] h-[1024px] bg-[#FAFAFB] flex flex-col text-primarygray-500 text-[16px] leading-[24px] flex-none">
      <div className="mt-[16px]">
        <img
          src={sitterLogo}
          alt="sitter-logo"
          className="w-[131.61px] h-[40px] mt-[24px] mb-[48px] ml-[24px]"
        />
      </div>

      <div className="flex gap-[16px] px-[24px] py-[16px] bg-primaryorange-100 text-primaryorange-500 font-medium">
        <img src={petSitterOrangeProfile} className="w-[24px] h-[24px]" />
        <span>Pet Sitter Profile</span>
      </div>

      <div className="flex items-center px-[24px] py-[16px]">
        <img
          src={petSitterBookingList}
          className="w-[24px] h-[24px] mr-[16px]"
        />
        <span className="mr-[6px]">Booking List</span>
        <img src={petSitterOrangeCircle} className="w-[6px] h-[6px]" />
      </div>

      <div className="flex gap-[16px] px-[24px] py-[16px]">
        <img src={petSitterPayment} className="w-[24px] h-[24px]" />
        <span>Payment Option</span>
      </div>
      <div className="flex gap-[16px] mt-[664px] pl-[24px] pt-[16px] border-t-[1px] border-primarygray-200">
        <img src={petSitterLogout} className="w-[24px] h-[24px]" />
        <span>Logout</span>
      </div>
    </section>
  );
};

export default Sidebar;
