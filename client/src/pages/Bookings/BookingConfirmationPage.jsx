import { useNavigate } from "react-router-dom";

const BookingConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden bg-[#F6F6F9] relative md:shadow-md md:pt-10 md:px-20 md:flex md:flex-col md:gap-10 md:justify-center md:items-center min-h-[calc(100dvh-72px)]">
      <div>
        <div className="bg-black py-6 px-4 flex flex-col justify-center items-center md:min-w-[632px] md:rounded-t-2xl">
          <h1 className="text-[20px] leading-[28px] text-white font-bold md:text-2xl">
            Thank You For Booking
          </h1>
          <p className="text-[#AEB1C3]">
            We will send your booking information to Pet Sitter.
          </p>
        </div>

        <ul className="list-detail bg-white py-6 px-4 gap-4 md:rounded-b-2xl md:min-w-[632px]">
          <li className="list-detail">
            <span className="text-[#AEB1C3] text-[14px] leading-[24px]">
              Transaction Date: ...
            </span>
            <span className="text-[#AEB1C3] text-[14px] leading-[24px]">
              Transaction No: ...
            </span>
          </li>
          <li className="list-detail">
            <span className="text-[#7B7E8F] text-[14px] leading-[24px] font-medium">
              Pet Sitter:
            </span>
            <span className="text-[#3A3B46] text-[16px] leading-[28px] font-medium">
              Happy House! By Jane Maison
            </span>
          </li>
          <li className="list-detail">
            <span className="text-[#7B7E8F] text-[14px] leading-[24px] font-medium">
              Date & Time:
            </span>
            <span className="text-[#3A3B46] text-[16px] leading-[28px] font-medium">
              25 Aug, 2023 | 7 AM - 10 AM
            </span>
          </li>
          <li className="list-detail">
            <span className="text-[#7B7E8F] text-[14px] leading-[24px] font-medium">
              Duration:
            </span>
            <span className="text-[#3A3B46] text-[16px] leading-[28px] font-medium">
              3 hours
            </span>
          </li>
          <li className="list-detail">
            <span className="text-[#7B7E8F] text-[14px] leading-[24px] font-medium">
              Pet:
            </span>
            <span className="text-[#3A3B46] text-[16px] leading-[28px] font-medium">
              Bubba, Daisy
            </span>
          </li>
          <li className="flex justify-between border-t pt-4">
            <span className="text-black text-[16px] leading-[28px] font-medium">
              Total
            </span>
            <span className="text-black text-[16px] leading-[28px] font-medium">
              0.00 THB
            </span>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center gap-4 py-6 px-4 md:py-0 md:px-0">
        <button
          onClick={() => navigate("/booking")}
          className="bg-[#FFF1EC] text-[#FF7037] text-base py-3 px-6 rounded-full"
        >
          Booking Detail
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-[#FF7037] text-white text-base py-3 px-6 rounded-full"
        >
          Back To Home
        </button>
      </div>
    </section>
  );
};

export default BookingConfirmationPage;
