import { IoChevronBack } from "react-icons/io5";
import defaultProfile from "../../../assets/svgs/pet-sitter-management/pet-sitter-whiteProfile.svg";
import buttonAddImage from "../../../assets/svgs/pet-sitter-management/pet-sitter-addImage.svg";

const PetProfileForm = ({
  setShowForm,
  showForm,
  petData,
  setPetFormData,
  petFormData,
  handlePetOnSubmit,
}) => {
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPetFormData({ ...petFormData, image: event.target.result });
      };

      reader.readAsDataURL(file);
    }
  };

  console.log(petFormData);

  return (
    <form
      className={`flex flex-col gap-6 py-6 px-4 w-full ${
        showForm ? "bg-white" : null
      } md:bg-white md:rounded-2xl md:p-10 md:gap-[60px]`}
      onSubmit={handlePetOnSubmit}
    >
      <div className="flex justify-start items-center gap-[10px]">
        <IoChevronBack
          className="text-[#7B7E8F] size-5 cursor-pointer md:size-6"
          onClick={() => setShowForm(false)}
        />
        <h1 className="text-[20px] leading-[28px] font-bold">Your Pet</h1>
      </div>

      <div className="size-[120px] rounded-full bg-[#DCDFED] relative flex items-center justify-center md:size-60">
        {petFormData.image ? (
          <img
            src={petFormData.image}
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
        <div className="w-full flex flex-col gap-1 md:flex-1">
          <label htmlFor="pet_name" className="input-label">
            Pet Name*
          </label>
          <input
            type="text"
            name="pet_name"
            placeholder="Pet name"
            className="input-box"
            value={petFormData.pet_name || ""}
            onChange={(event) =>
              setPetFormData({
                ...petFormData,
                pet_name: event.target.value,
              })
            }
          />
        </div>

        <div className="flex flex-wrap gap-4 md:gap-10">
          <div className="w-full flex flex-col gap-1 md:flex-1">
            <label htmlFor="pet_type" className="input-label">
              Pet Type*
            </label>
            <select
              name="pet_type"
              className="input-box"
              value={petFormData.pet_type || ""}
              onChange={(event) =>
                setPetFormData({
                  ...petFormData,
                  pet_type: event.target.value,
                })
              }
            >
              <option value="" disabled>
                Select your pet type
              </option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
            </select>
          </div>

          <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
            <label htmlFor="breed" className="input-label">
              Breed*
            </label>
            <input
              type="text"
              name="breed"
              placeholder="Breed of your pet"
              className="input-box"
              value={petFormData.breed || ""}
              onChange={(event) =>
                setPetFormData({
                  ...petFormData,
                  breed: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-10">
          <div className="w-full flex flex-col gap-1 md:flex-1">
            <label htmlFor="sex" className="input-label">
              Sex*
            </label>
            <select
              name="sex"
              className="input-box"
              value={petFormData.sex || ""}
              onChange={(event) =>
                setPetFormData({
                  ...petFormData,
                  sex: event.target.value,
                })
              }
            >
              <option value="" disabled>
                Select sex of your pet
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
            <label htmlFor="age" className="input-label">
              Age (Month)*
            </label>
            <input
              type="text"
              name="age"
              placeholder="Age of your pet"
              className="input-box"
              value={petFormData.age || ""}
              onChange={(event) =>
                setPetFormData({
                  ...petFormData,
                  age: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-10">
          <div className="w-full flex flex-col gap-1 md:flex-1">
            <label htmlFor="color" className="input-label">
              Color*
            </label>
            <input
              type="text"
              name="color"
              placeholder="Describe color of your pet"
              className="input-box"
              value={petFormData.color || ""}
              onChange={(event) =>
                setPetFormData({
                  ...petFormData,
                  color: event.target.value,
                })
              }
            />
          </div>

          <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
            <label htmlFor="weight" className="input-label">
              Weight (Kilogram)
            </label>
            <input
              type="text"
              name="weight"
              placeholder="Weight of your pet"
              className="input-box"
              value={petFormData.weight || ""}
              onChange={(event) =>
                setPetFormData({
                  ...petFormData,
                  weight: event.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="w-full flex flex-col flex-1 gap-1 mt-5 border-t-[1px] md:flex-1">
          <label htmlFor="about" className="input-label mt-8">
            About
          </label>
          <input
            type="textarea"
            name="about"
            placeholder="Describe more about your pet..."
            className="input-box"
            value={petFormData.about || ""}
            onChange={(event) =>
              setPetFormData({
                ...petFormData,
                about: event.target.value,
              })
            }
          />
        </div>
      </div>
    </form>
  );
};

export default PetProfileForm;
