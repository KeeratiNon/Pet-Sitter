import iconUser from "../../assets/svgs/icons/icon-image-user.svg";
import iconPlus from "../../assets/svgs/icons/icon-plus-circle.svg";
import BookingDetail from "../cards/BookingDetail";

const PetForm = ({ onPrev, onNext, data, setData }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onNext();
  };

  const handlePetSelection = (petName, checked) => {
    if (checked) {
      setData({ ...data, pet_name: [...data.pet_name, petName] });
    } else {
      setData({
        ...data,
        pet_name: data.pet_name.filter((name) => name !== petName),
      });
    }
  };

  return (
    <form
      className="flex flex-col px-4 py-10 md:gap-4 md:p-10 md:rounded-2xl md:bg-white"
      onSubmit={handleOnSubmit}
    >
      <h1 className="text-[18px] leading-[26px]">Choose your pet</h1>

      <div className="flex flex-col items-center gap-4 mt-2 md:flex-row">
        <div className="w-full bg-white border border-primarygray-200 rounded-2xl p-6 flex flex-col justify-center items-center gap-4 relative md:size-60">
          <input
            type="checkbox"
            className="size-6 absolute top-4 right-4 accent-[#FF7037]"
            value={`John`}
            onChange={(event) =>
              handlePetSelection(`John`, event.target.checked)
            }
            checked={data.pet_name.includes(`John`)}
          />

          <figure>
            <img src={iconUser} alt="image-user" className="size-[104px]" />
          </figure>

          <figcaption className="flex flex-col justify-center items-center gap-2">
            <span>John Wick</span>
            <span className="border rounded-full py-1 px-4">Hunter</span>
          </figcaption>
        </div>

        <div className="w-full bg-white border border-primarygray-200 rounded-2xl p-6 flex flex-col justify-center items-center gap-4 relative md:size-60">
          <input
            type="checkbox"
            className="size-6 absolute top-4 right-4 accent-[#FF7037]"
            value={`Wick`}
            onChange={(event) =>
              handlePetSelection(`Wick`, event.target.checked)
            }
            checked={data.pet_name.includes(`Wick`)}
          />

          <figure>
            <img src={iconUser} alt="image-user" className="size-[104px]" />
          </figure>

          <figcaption className="flex flex-col justify-center items-center gap-2">
            <span>John Wick</span>
            <span className="border rounded-full py-1 px-4">Hunter</span>
          </figcaption>
        </div>

        <button className="w-full btn-secondary rounded-2xl flex flex-col gap-2 p-6 md:size-60">
          <img src={iconPlus} alt="icon-plus" className="size-[60px]" />
          <p className="px-6 py-3">Create New Pet</p>
        </button>

        <div className="w-full md:hidden">
          <BookingDetail data={data} />
        </div>
      </div>

      <div className="flex justify-between gap-[10px] py-6 px-4 bg-white">
        <button
          type="submit"
          className="btn-secondary md:w-[120px]"
          onClick={onPrev}
        >
          Back
        </button>

        <button
          type="submit"
          className="btn-primary md:w-[120px]"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default PetForm;
