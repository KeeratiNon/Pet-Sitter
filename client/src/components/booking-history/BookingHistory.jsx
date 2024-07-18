import BookingHistoryWaiting from "./BookingHistoryWaiting";
import BookingHistoryService from "./BookingHistoryService";
import BookingHistorySuccess from "./BookingHistorySuccess";
import { useState } from "react";

const BookingHistory = () => {
  // Initialize the state 'booking' to store booking data
  const [booking, setBooking] = useState([]);

  // Sample data (to be replaced with data fetched from API, e.g., using axios)
  // data = [
  //   { name: "non", status: "success" },
  //   ...
  // ]

  return (
    <div className="bg-white flex flex-col lg:rounded-[16px] py-[24px] px-[16px] lg:p-[40px] gap-[24px] lg:gap-[60px] w-full max-w-[956px]">
      {/* Header */}
      <div className="flex gap-[10px]">
        <p className="text-black text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-bold">
          Booking History
        </p>
      </div>

      {/* Render booking history based on status */}
      {booking.map((list) => {
        return (
          <div> 
            {list.status === "success" ? (
              <BookingHistorySuccess list = {list} />
            ) : list.status === "In service" ? (
              <BookingHistoryService />
            ) : <BookingHistoryWaiting />}
          </div>
        );
      })}

      
      
    </div>
  );
};

export default BookingHistory;
