import iconGuest from "../../assets/svgs/icons/icon-image-guest.svg";
import iconPlus from "../../assets/svgs/icons/icon-plus-circle.svg";

const PetForm = () => {
  return (
    <section className="px-4 py-10 md:p-10 md:rounded-t-2xl md:bg-white">
      <p className="text-[18px] leading-[26px]">Choose your pet</p>

      <div className="flex flex-col items-center gap-4 mt-2 md:flex-row">
        <div className="w-full bg-white border border-primarygray-200 rounded-2xl p-6 flex flex-col justify-center items-center gap-4 relative md:size-60">
          <input
            type="checkbox"
            className="size-6 absolute top-4 right-4 accent-[#FF7037]"
          />

          <figure>
            <img src={iconGuest} alt="image-guest" className="size-[104px]" />
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
      </div>
    </section>
  );
};

export default PetForm;
