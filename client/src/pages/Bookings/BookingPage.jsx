import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import FormNavigation from "../../components/booking/FormNavigation";
import BookingForms from "../../components/booking/BookingForms";
import BookingIllustrations from "../../components/booking/BookingIllustrations";
import BookingSummary from "../../components/booking/BookingSummary";
import BookingConfirm from "../../components/booking/BookingConfirm";

const BookingPage = () => {
  const { getItem } = useLocalStorage();
  const petSitterId = getItem("petSitterId");
  const bookingData = getItem("bookingData");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const formList = ["Your Pet", "Information", "Payment"];

  const initialData = {
    pet_sitter_id: petSitterId || "",
    booking_time_start: bookingData?.startTime || "",
    booking_time_end: bookingData?.endTime || "",
    pet_name: [],
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    status: "",
    message: "",
    card_number: "",
    card_owner: "",
    expiry_date: "",
    cvv: "",
  };

  const [data, setData] = useState(initialData);

  const handleSubmit = async () => {
    navigate("/booking-confirmation");
  };

  const handleNext = () =>
    setPage((prevPage) =>
      prevPage === formList.length - 1 ? 0 : prevPage + 1
    );
  const handlePrev = () =>
    setPage((prevPage) =>
      prevPage === 0 ? formList.length - 1 : prevPage - 1
    );

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(data);

  return (
    <section className="overflow-hidden bg-[#F6F6F9] relative md:pt-10 md:px-20 md:flex md:justify-center md:gap-9 min-h-[calc(100dvh-72px)]">
      <div className="flex flex-col gap-4 flex-auto z-0">
        <FormNavigation formList={formList} page={page} />
        <div className="md:bg-white md:rounded-2xl">
          <BookingForms
            page={page}
            data={data}
            setData={setData}
            handlePrev={handlePrev}
            handleNext={handleNext}
            setIsModalOpen={setIsModalOpen}
            width={width}
          />
        </div>
      </div>
      <BookingIllustrations />
      <BookingSummary data={data} width={width} />
      <BookingConfirm
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default BookingPage;
