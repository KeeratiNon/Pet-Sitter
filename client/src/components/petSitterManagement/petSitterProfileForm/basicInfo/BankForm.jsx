const BankForm = ({handleBank, bank}) => {
 
  return (
    <div>
      <label className="text-lg leading-6 text-black font-medium flex flex-col gap-1 basis-1/2">
        Bank
        <select
          name="bank"
          value={bank}
          onChange={handleBank}
          className="border border-gray-200 rounded-lg h-12 p-3 text-lg leading-6 font-normal"
          defaultValue=""
        >
          <option value="" hidden></option>
          <option value="Bangkok Bank">Bangkok Bank</option>
          <option value="Bank of Ayudhya">Bank of Ayudhya</option>
          <option value="CIMB Thai Bank">CIMB Thai Bank</option>
          <option value="ICBC Thai">ICBC Thai</option>
          <option value="Kasikornbank">Kasikornbank</option>
          <option value="Kiatnakin Phatra Bank">Kiatnakin Phatra Bank</option>
          <option value="Krung Thai Bank">Krung Thai Bank</option>
          <option value="Land & Houses Bank">Land & Houses Bank</option>
          <option value="Siam Commercial Bank">Siam Commercial Bank</option>
          <option value="Standard Chartered Bank">Standard Chartered Bank</option>
          <option value="Tisco Bank">Tisco Bank</option>
          <option value="TMBThanachart Bank">TMBThanachart Bank</option>
          <option value="United Overseas Bank (Thai)">United Overseas Bank (Thai)</option>
          <option value="Thai Credit Bank">Thai Credit Bank</option>
        </select>
      </label>
    </div>
  );
};

export default BankForm;
