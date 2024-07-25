import BookingDetail from "../cards/BookingDetail";

const PayMentForm = ({ onPrev, onConfirm, data, setData }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onConfirm(true);
  };

  return (
    <form
      className="flex flex-col gap-4 py-10 px-4 rounded-2xl md:bg-white md:p-10"
      onSubmit={handleOnSubmit}
    >
      <h3 className="text-[24px] leading-[32px] font-bold text-[#3A3B46]">
        Credit Card
      </h3>
      <div className="flex flex-wrap gap-4 md:gap-10">
        <div className="w-full flex flex-col gap-1 md:flex-1">
          <label htmlFor="firstname" className="input-label">
            Card Number*
          </label>
          <input
            type="text"
            name="card_number"
            placeholder="xxx-xxxx-x-xx-xx"
            className="input-box"
            value={data.card_number}
            onChange={(event) =>
              setData({ ...data, card_number: event.target.value })
            }
          />
        </div>

        <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
          <label htmlFor="lastname" className="input-label">
            Card Owner*
          </label>
          <input
            type="text"
            name="card_owner"
            placeholder="Card owner name"
            className="input-box"
            value={data.card_owner}
            onChange={(event) =>
              setData({ ...data, card_owner: event.target.value })
            }
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-10">
        <div className="w-full flex flex-col gap-1 md:flex-1">
          <label htmlFor="email" className="input-label">
            Expiry Date*
          </label>
          <input
            type="text"
            name="expiry_date"
            placeholder="xxx-xxx-xxxx"
            className="input-box"
            value={data.expiry_date}
            onChange={(event) =>
              setData({ ...data, expiry_date: event.target.value })
            }
          />
        </div>

        <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
          <label htmlFor="phone" className="input-label">
            CVC/CVV*
          </label>
          <input
            type="text"
            name="cvv"
            placeholder="xxx"
            className="input-box"
            value={data.cvv}
            onChange={(event) => setData({ ...data, cvv: event.target.value })}
          />
        </div>
      </div>

      <div className="md:hidden">
        <BookingDetail data={data} />
      </div>

      <div className="flex justify-between gap-[10px] py-6 px-4 bg-white md:rounded-b-2xl">
        <button
          type="submit"
          className="btn-secondary md:w-[120px]"
          onClick={onPrev}
        >
          Back
        </button>

        <button type="submit" className="btn-primary md:w-[175px]">
          Confirm Booking
        </button>
      </div>
    </form>
  );
};

export default PayMentForm;
