import PrimaryButton from "../buttons/PrimaryButton";
import iconBell from "../../assets/svgs/icons/icon-bell.svg";
import iconMessage from "../../assets/svgs/icons/icon-message.svg";
import iconGuest from "../../assets/svgs/icons/icon-image-guest.svg";
import iconNotify from "../../assets/svgs/icons/icon-notify.svg";
import iconHamburg from "../../assets/svgs/icons/icon-hamburger.svg";

const ProfileInfo = () => {
  return (
    <section className="flex gap-6">
      {/* <div className="flex gap-3">
        <button className="icon-btn relative">
          <img src={iconBell} alt="icon-bell" />
          <img
            src={iconNotify}
            alt="icon-bell"
            className="absolute top-1 right-1"
          />
        </button>

        <button className="icon-btn relative">
          <img src={iconMessage} alt="icon-message" />
          <img
            src={iconNotify}
            alt="icon-message"
            className="absolute top-1 right-1"
          />
        </button>

        <button>
          <img src={iconGuest} alt="icon-guest" />
        </button>
      </div>

      <button className="btn-primary">Find A Pet Sitter</button> */}

      <ul className="hidden md:flex items-center gap-6">
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
          <button>
            <button className="btn-primary">Find A Pet Sitter</button>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default ProfileInfo;
