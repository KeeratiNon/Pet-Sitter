import axios from "axios";
import { SERVER_API_URL } from "../../core/config.mjs";
import { useEffect, useState } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import BookingInfo from "../../components/booking/BookingInfo";

const BookingConfirmationPage = () => {
  const { removeItem } = useLocalStorage();

  const [bookingInformation, setBookingInformation] = useState();
  const [loading, setLoading] = useState(true);

  const removeKeyLocalStorage = () => {
    removeItem("petSitterId");
    removeItem("petSitterFirstname");
    removeItem("petSitterLastname");
    removeItem("bookingDate");
    removeItem("bookingStart");
    removeItem("bookingEnd");
  };

  const getBookingInformationData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${SERVER_API_URL}/bookings/information`
      );
      console.log(response.data.data);

      setBookingInformation(response.data.data);
    } catch (error) {
      console.error("Error fetching booking information:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookingInformationData();
    removeKeyLocalStorage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bookingInformation) {
    return <div>No booking information found</div>;
  }

  console.log("booking information", bookingInformation);

  return (
    <section className="overflow-hidden bg-[#F6F6F9] relative md:shadow-md md:pt-10 md:px-20 md:flex md:flex-col md:gap-10 md:justify-center md:items-center min-h-[calc(100dvh-72px)]">
      <BookingInfo bookingInformation={bookingInformation} />
    </section>
  );
};

export default BookingConfirmationPage;
