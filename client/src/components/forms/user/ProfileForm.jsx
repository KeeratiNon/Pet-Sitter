import defaultProfile from "../../../assets/svgs/pet-sitter-management/pet-sitter-whiteProfile.svg";
import buttonAddImage from "../../../assets/svgs/pet-sitter-management/pet-sitter-addImage.svg";

const ProfileForm = ({ setUserData, userData }) => {
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserData({ ...userData, image: event.target.result });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 py-10 px-4 bg-white w-full md:p-10 md:rounded-2xl md:gap-[60px]"
      onSubmit={() => {}}
    >
      <h1 className="text-[20px] leading-[28px] font-bold">Profile</h1>

      <div className="size-[120px] rounded-full bg-[#DCDFED] relative flex items-center justify-center md:size-60">
        {userData?.image ? (
          <img
            src={userData.image}
            alt="Profile"
            className="size-[120px] rounded-full object-cover md:size-60"
          />
        ) : (
          <img
            src={defaultProfile}
            alt="Default Profile"
            className="size-8 md:size-[86px]"
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
            src={buttonAddImage}
            alt="Add Image"
            className="size-10 md:size-[60px]"
          />
        </label>
      </div>

      <div className="flex flex-col gap-4 md:gap-10">
        <div className="flex flex-wrap gap-4 md:gap-10">
          <div className="w-full flex flex-col gap-1 md:flex-1">
            <label htmlFor="firstname" className="input-label">
              First Name*
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              className="input-box"
              value={userData.first_name}
              onChange={(event) =>
                setUserData({ ...userData, first_name: event.target.value })
              }
            />
          </div>

          <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
            <label htmlFor="lastname" className="input-label">
              Last Name*
            </label>
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              className="input-box"
              value={userData.last_name}
              onChange={(event) =>
                setUserData({ ...userData, last_name: event.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-10">
          <div className="w-full flex flex-col gap-1 md:flex-1">
            <label htmlFor="email" className="input-label">
              Email*
            </label>
            <input
              type="email"
              name="email"
              placeholder="youremail@company.com"
              className="input-box"
              value={userData.email}
              onChange={(event) =>
                setUserData({ ...userData, email: event.target.value })
              }
            />
          </div>

          <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
            <label htmlFor="phone" className="input-label">
              Phone*
            </label>
            <input
              type="text"
              name="phone_number"
              placeholder="xxx-xxx-xxxx"
              className="input-box"
              value={userData.phone_number}
              onChange={(event) =>
                setUserData({ ...userData, phone_number: event.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-10">
          <div className="w-full flex flex-col gap-1 md:flex-1">
            <label htmlFor="email" className="input-label">
              ID Number
            </label>
            <input
              type="text"
              name="id_number"
              placeholder="Your ID number"
              className="input-box"
              value={userData.id_number}
              onChange={(event) =>
                setUserData({ ...userData, id_number: event.target.value })
              }
            />
          </div>

          <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
            <label htmlFor="phone" className="input-label">
              Date of Birth
            </label>
            <input
              type="date"
              name="date_of_birth"
              placeholder="Select your date of birth"
              className="input-box"
              value={userData.date_of_birth.slice(0, 10)}
              onChange={(event) =>
                setUserData({ ...userData, date_of_birth: event.target.value })
              }
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn-primary w-[159px]">
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
