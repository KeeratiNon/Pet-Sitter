const ServicesForm = ({handleServices, services}) => {

  return (
    <div>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px] basis-1">
        Services (Describe all of your services for pet sitting)
        <input
          type="text"
          name="services"
          value={services}
          onChange={handleServices}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </div>
  );
};

export default ServicesForm;