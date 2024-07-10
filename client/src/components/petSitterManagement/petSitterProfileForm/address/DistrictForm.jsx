const DistrictForm = ({handleDistrict, district}) => {

  return (
    <div>
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[4px]">
        District*
        <input
          type="text"
          name="district"
          value={district}
          onChange={handleDistrict}
          className="border border-gray-200 rounded-[8px] h-[48px] p-[12px] text-[16px] leading-[24px] font-normal"
        />
      </label>
    </div>
  );
};

export default DistrictForm;