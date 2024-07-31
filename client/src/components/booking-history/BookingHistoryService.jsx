import { useEffect, useState } from "react";
import axios from "axios";
import girl from "../../assets/images/girl.png";
import changeIcon from "../../assets/svgs/icons/icon-change.svg";
import phone from "../../assets/svgs/icons/icon-phone.svg";
import { SERVER_API_URL } from "../../core/config.mjs";

const BookingHistoryService = () => {
  const [bookings, setBookings] = useState([]);
  const [reviewedBookings, setReviewedBookings] = useState({});

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${SERVER_API_URL}/booking-history`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching booking history:", error);
      }
    };

    fetchBookings();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Waiting for service":
        return "#FFCA62";
      case "Waiting for confirm":
        return "#FA8AC0";
      case "In service":
        return "#76D0FC";
      case "Success":
        return "#1CCD83";
      case "Canceled":
        return "#EA1010";
      default:
        return "#000000";
    }
  };

  const getStatusMessage = (status, formattedDate) => {
    switch (status) {
      case "Waiting for confirm":
        return "Waiting Pet Sitter for confirm booking";
      case "Waiting for service":
        return "Pet Sitter is confirm booking";
      case "In service":
        return "Your pet is already in Pet Sitter care!";
      case "Success":
        return (
          <>
            Success date:
            <br />
            {formattedDate}
          </>
        );
      case "Canceled":
        return "Booking has canceled";
      default:
        return "";
    }
  };

  const handleReviewClick = (bookingId) => {
    setReviewedBookings((prev) => ({ ...prev, [bookingId]: true }));
  };

  return (
    <div className="flex flex-col gap-[24px]">
      {bookings.map((booking, index) => (
        <div
          key={index}
          className="flex flex-col border-primarygray-200 border rounded-[16px] p-[16px] lg:p-[24px] gap-[16px] lg:gap-[36px] w-full"
        >
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col lg:flex-row border-primarygray-200 border-b pb-[16px] gap-[8px] lg:gap-[16px]">
              <div className="flex gap-[16px]">
                <img
                  src={booking.profile_image || girl}
                  alt="Profile"
                  className="w-[36px] h-[36px] lg:w-[64px] lg:h-[64px] rounded-full"
                />
                <div className="flex flex-col lg:gap-[4px]">
                  <p className="text-black text-[24px] leading-[32px] font-bold">
                    {booking.pet_sitter_name}
                  </p>
                  <p className="text-black text-18px leading-[26px] font-medium">
                    By {booking.firstname} {booking.lastname}
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:items-end lg:gap-[12px] lg:ml-auto">
                <p className="text-primarygray-300 text-[14px] leading-[24px]">
                  Transaction date: {booking.formatted_payment_created_at}
                </p>
                <div className="flex gap-[8px] items-center">
                  <p
                    className="w-[6px] h-[6px] rounded-full inline-block"
                    style={{ backgroundColor: getStatusColor(booking.status) }}
                  ></p>
                  <p
                    className="text-[16px] leading-[24px] font-medium"
                    style={{
                      color: getStatusColor(booking.status),
                    }}
                  >
                    {booking.status}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px] lg:items-center ">
              <div className="flex flex-col lg:w-[382px]">
                <p className="text-primarygray-400 text-[14px] leading-[24px] font-medium">
                  Date & Time:
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center w-full space-x-0">
                  <div className="flex items-center gap-[12px] flex-grow">
                    <p className="text-primarygray-600 text-[16px] leading-[28px] font-medium whitespace-nowrap">
                      {booking.formatted_booking_date}
                    </p>
                    <p className="text-primarygray-400 text-[16px] leading-[28px] font-medium whitespace-nowrap">
                      |
                    </p>
                    <p className="text-primarygray-600 text-[16px] leading-[28px] font-medium whitespace-nowrap">
                      {booking.formatted_booking_time_start} -{" "}
                      {booking.formatted_booking_time_end}
                    </p>
                  </div>
                  {booking.status === "Waiting for confirm" && (
                    <div className="flex-shrink-0 mt-2 sm:mt-0 ml-0 sm:ml-4 ">
                      <button
                        type="button"
                        className="inline-flex  items-center rounded-[99px] py-[4px] px-0 sm:px-[8px]"
                      >
                        <img
                          src={changeIcon}
                          alt="Change"
                          className="h-[24px] mr-2 w-[24px]"
                        />
                        <p className="text-primaryorange-500 text-[16px] leading-[24px] font-bold">
                          Change
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p className="hidden lg:block border-l border-primarygray-200 h-[36px]"></p>
              <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px] lg:w-[382px] lg:items-center">
                <div className="flex flex-col w-full">
                  <p className="text-primarygray-400 text-[14px] leading-[24px] font-medium">
                    Duration
                  </p>
                  <p className="text-primarygray-600 text-[16px] leading-[28px] font-medium">
                    3 hours
                  </p>
                </div>
                <p className="hidden lg:block border-l border-primarygray-200 h-[36px]"></p>
                <div className="flex flex-col w-full">
                  <p className="text-primarygray-400 text-[14px] leading-[24px] font-medium">
                    Pet:
                  </p>
                  <p className="text-primarygray-600 text-[16px] leading-[28px] font-medium">
                    {booking.pet_names.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              booking.status === "Success" ? "bg-[#E7FDF4]" : "bg-gray-100"
            } flex flex-col lg:flex-row p-[16px] gap-[8px] lg:gap-[16px] rounded-[8px] lg:h-[80px]`}
          >
            <p
              className={`${
                booking.status === "Success"
                  ? "text-[#1CCD83]"
                  : "text-primarygray-400"
              } flex items-center text-[14px] leading-[24px] font-medium`}
            >
              {getStatusMessage(booking.status, booking.formatted_booking_date)}
            </p>
            <div className="flex gap-[16px] lg:ml-auto">
              {booking.status === "Success" ? (
                <div className="flex lg:flex-row gap-[16px] lg:gap-[36px] items-center ">
                  <button
                    type="button"
                    className="flex rounded-[99px] py-[4px] px-[2px] gap-[4px]"
                  >
                    <p className="text-primaryorange-500 text-[16px] leading-[24px] font-bold">
                      Report
                    </p>
                  </button>
                  {reviewedBookings[booking.id] ? (
                    <button
                      type="button"
                      className="bg-primaryorange-100 flex rounded-[99px] py-[12px] px-[24px] gap-[8px]"
                    >
                      <p className="text-primaryorange-500 text-[16px] leading-[24px] font-bold">
                        Your Review
                      </p>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-primaryorange-500 flex rounded-[99px] py-[12px] px-[24px] gap-[8px]"
                      onClick={() => handleReviewClick(booking.id)}
                    >
                      <p className="text-white text-[16px] leading-[24px] font-bold">
                        Review
                      </p>
                    </button>
                  )}
                </div>
              ) : booking.status !== "Waiting for confirm" &&
                booking.status !== "Canceled" ? (
                <>
                  <button
                    type="button"
                    className="bg-primaryorange-500 flex rounded-[99px] py-[12px] px-[24px] gap-[8px]"
                  >
                    <p className="text-white text-[16px] leading-[24px] font-bold">
                      Send Message
                    </p>
                  </button>
                  <button
                    type="button"
                    className="flex bg-primaryorange-100 rounded-[99px] py-[12px] px-[12px] gap-[8px]"
                  >
                    <img src={phone} alt="phone" />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingHistoryService;
