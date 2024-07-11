const ProvinceForm = ({handleProvince, province}) => {

  return (
    <div>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        Province*
        <input
          type="text"
          name="province"
          value={province}
          onChange={handleProvince}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </div>
  );
};

export default ProvinceForm;