import BookingDetail from "../cards/BookingDetail";

const InfomationForm = ({ onPrev, onNext, data, setData }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onNext();
  };

  return (
    <form
      className="flex flex-col gap-4 py-10 px-4 rounded-2xl md:bg-white md:p-10"
      onSubmit={handleOnSubmit}
    >
      <div className="flex flex-wrap gap-4 md:gap-10">
        <div className="w-full flex flex-col gap-1 md:flex-1">
          <label htmlFor="firstname" className="input-label">
            First Name*
          </label>
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            className="input-box"
            value={data.first_name}
            onChange={(event) =>
              setData({ ...data, first_name: event.target.value })
            }
          />
        </div>

        <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
          <label htmlFor="lastname" className="input-label">
            Last Name*
          </label>
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            className="input-box"
            value={data.last_name}
            onChange={(event) =>
              setData({ ...data, last_name: event.target.value })
            }
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-10">
        <div className="w-full flex flex-col gap-1 md:flex-1">
          <label htmlFor="email" className="input-label">
            Email*
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@company.com"
            className="input-box"
            value={data.email}
            onChange={(event) =>
              setData({ ...data, email: event.target.value })
            }
          />
        </div>

        <div className="w-full flex flex-col flex-1 gap-1 md:flex-1">
          <label htmlFor="phone" className="input-label">
            Phone*
          </label>
          <input
            type="tel"
            name="phone_number"
            placeholder="xxx-xxx-xxxx"
            className="input-box"
            value={data.phone_number}
            onChange={(event) =>
              setData({ ...data, phone_number: event.target.value })
            }
          />
        </div>
      </div>

      <div className="w-full flex flex-col flex-1 gap-1 mt-5 border-t-[1px] md:flex-1">
        <label htmlFor="message" className="input-label mt-8">
          Additional Message (To pet sitter)
        </label>
        <input
          type="text"
          name="message"
          as="textarea"
          rows={4}
          resize={false}
          className="input-box"
          value={data.message}
          onChange={(event) =>
            setData({ ...data, message: event.target.value })
          }
        />
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

        <button type="submit" className="btn-primary md:w-[120px]">
          Next
        </button>
      </div>
    </form>
  );
};

export default InfomationForm;
