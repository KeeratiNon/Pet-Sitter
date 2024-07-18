import { useState, useEffect } from "react";
import iconStar from "../../assets/svgs/star1.svg";
import iconCurveBlue from "../../assets/svgs/curve-blue.svg";
import PetForm from "../../components/forms/PetForm";
import InfomationForm from "../../components/forms/InfomationForm";
import PayMentForm from "../../components/forms/PayMentForm";
import BookingDetail from "../../components/cards/BookingDetail";
import axios from "axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import BookingConfirm from "../../components/cards/BookingConfirm";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const { getItem } = useLocalStorage("value");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const formList = ["Your Pet", "Infomation", "Payment"];
  const formLength = formList.length;
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    pet_sitter_name: localStorage.getItem(""),
    booking_data: localStorage.getItem(""),
    booking_time: localStorage.getItem(""),
    pet_name: [],
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    status: "Waiting for confirm",
    message: "",
    card_number: "",
    card_owner: "",
    expiry_date: "",
    cvv: "",
  });

  const handleSumbit = async () => {
    navigate("/booking-confirmation");
  };

  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };

  const handleRenderForm = () => {
    switch (page) {
      case 0: {
        return (
          <PetForm
            width={width}
            onPrev={handlePrev}
            onNext={handleNext}
            data={data}
            setData={setData}
          />
        );
      }
      case 1: {
        return (
          <InfomationForm
            width={width}
            onPrev={handlePrev}
            onNext={handleNext}
            data={data}
            setData={setData}
          />
        );
      }
      case 2: {
        return (
          <PayMentForm
            width={width}
            onPrev={handlePrev}
            onConfirm={setIsModalOpen}
            data={data}
            setData={setData}
          />
        );
      }
      default:
        return null;
    }
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="overflow-hidden bg-[#F6F6F9] relative md:pt-10 md:px-20  md:flex md:justify-center md:gap-9 min-h-[calc(100dvh-72px)]">
      <div className="flex flex-col gap-4 flex-auto z-0">
        <ul className="bg-white flex justify-around p-4 md:rounded-2xl md:p-6 md:gap-12 md:justify-center">
          {formList.map((form, index) => (
            <li key={index} className="flex justify-center items-center gap-3">
              <div
                className={`size-7 rounded-full bg-[#F6F6F9] flex items-center justify-center md:size-12 ${
                  page === index
                    ? "bg-[#FF7037] text-white"
                    : index < page
                    ? "bg-black text-[#FF7037]"
                    : null
                }`}
              >
                {index + 1}
              </div>
              <p className="text-[14px] leading-[24px] md:text-[18px] md:leading-[26px]">
                {form}
              </p>
            </li>
          ))}
        </ul>

        <div className="md:bg-white md:rounded-2xl">{handleRenderForm()}</div>
      </div>

      <figure className="hidden md:block absolute md:w-[388px] h-[300px] right-0 bottom-0">
        <img
          src={iconStar}
          alt="icon-star"
          className="rotate-90 absolute -bottom-20"
        />

        <img
          src={iconCurveBlue}
          alt="icon-curve-blue"
          className="absolute right-0"
        />
      </figure>

      {width > 768 && (
        <div className="z-0 w-[396px] rounded-2xl overflow-hidden h-fit min-w-[396px]">
          <BookingDetail data={data} />
        </div>
      )}

      <BookingConfirm
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSumbit}
      />
    </section>
  );
};

export default BookingPage;
