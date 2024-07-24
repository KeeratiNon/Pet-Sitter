import TypeList from "../../searchs/TypeList";

const PetProfileList = ({
  petData,
  handlePetOnClick,
  handleCreatePetProfile,
}) => {
  return (
    <section className="flex flex-col gap-6 py-6 px-4 w-full md:bg-white md:rounded-2xl md:p-10 md:gap-[60px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[20px] leading-[28px] font-bold">Your Pet</h1>
        <button
          className="btn-primary w-[127px]"
          onClick={handleCreatePetProfile}
        >
          Create Pet
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {petData?.map((pet) => (
          <button
            onClick={() => handlePetOnClick(pet.id)}
            className="w-full bg-white border border-primarygray-200 rounded-2xl p-6 flex flex-col justify-center items-center gap-4 relative md:size-60"
            key={pet.id}
          >
            <figure>
              <img
                src={pet.image}
                alt="image-user"
                className="w-[104px] h-[104px] rounded-full object-cover"
              />
            </figure>

            <figcaption className="flex flex-col justify-center items-center gap-2">
              <span>{pet.pet_name}</span>
              <TypeList types={[pet.pet_type]} />
            </figcaption>
          </button>
        ))}
      </div>
    </section>
  );
};

export default PetProfileList;
