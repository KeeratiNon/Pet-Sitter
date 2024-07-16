const ExpForm = ({ handleExp, experience, errors }) => {
  return (
    <div>
      <label className="text-lg leading-6 text-black font-medium flex flex-col gap-1">
        Experience*
        <select
          name="experience"
          value={experience}
          onChange={handleExp}
          className="border border-gray-200 rounded-lg h-12 p-3 text-lg leading-6 font-normal"
          defaultValue=""
        >
          <option value="" hidden></option>
          <option value="0-2 Years">0-2 Years</option>
          <option value="3-5 Years">3-5 Years</option>
          <option value="5+ Years">5+ Years</option>
        </select>
      </label>
      {errors.experience && <div className="error text-[16px] leading-[24px] text-red-500">{errors.experience}</div>}
    </div>
  );
};

export default ExpForm;
