import React, { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_API_URL } from "../core/config.mjs";
import cross from "../assets/svgs/icons/icon-cross.svg"; // Assume you have an icon for closing
import changeIcon from "../assets/svgs/icons/icon-change.svg"; // Assume you have an icon for change
import BookingPopup from "./BookingPopup"; // Import BookingPopup component

const BookingHistoryDetailPopup = ({ showDetail, setShowDetail, bookingId }) => {
  const [bookingDetail, setBookingDetail] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for showing BookingPopup

  useEffect(() => {
    if (bookingId) {
      const fetchBookingDetail = async () => {
        try {
          const response = await axios.get(`${SERVER_API_URL}/booking-history/${bookingId}`);
          setBookingDetail(response.data);
        } catch (error) {
          console.error("Error fetching booking detail:", error);
        }
      };

      fetchBookingDetail();
    }
  }, [bookingId]);

  if (!showDetail || !bookingDetail) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center lg:items-center items-start z-50 pt-[24px] lg:pt-0">
      <div className="bg-white rounded-t-[16px] lg:rounded-[16px] w-full max-w-[632px] mx-auto flex flex-col h-[calc(100vh-24px)] max-h-[788px] lg:h-[644px]">
        <div className="flex justify-between border-b-[1px] p-[16px] gap-[10px] lg:py-[24px] lg:px-[40px] items-center">
          <h1 className="text-primarygray-600 text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] font-bold">
            Booking Detail
          </h1>
          <img
            src={cross}
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => setShowDetail(false)}
            alt="Close"
          />
        </div>
        <div className="flex flex-col flex-grow py-[24px] px-[16px] lg:p-[40px] gap-[16px] lg:gap-[24px]">
          <div className="flex gap-[8px] items-center">
            <p
              className="w-[6px] h-[6px] rounded-full inline-block"
              style={{ backgroundColor: "#FFCA62" }} // You can use your color logic here
            ></p>
            <p
              className="text-[16px] leading-[24px] font-medium"
              style={{
                color: "#FFCA62", // You can use your color logic here
              }}
            >
              {bookingDetail.status}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-primarygray-300 text-[16px] leading-[28px] font-medium ">
              Transaction date: {bookingDetail.formatted_payment_created_at}
            </p>
            <p className="text-primarygray-300 text-[16px] leading-[28px] font-medium ">
              Transaction No. : {bookingDetail.booking_id}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-primarygray-400 text-[14px] leading-[24px] font-medium ">
              Pet Sitter:
            </p>
            <div className="flex justify-between gap-[12px]">
              <p className="text-primarygray-600 text-[16px] leading-[28px] font-medium ">
                {bookingDetail.pet_sitter_name} By {bookingDetail.firstname} {bookingDetail.lastname}
              </p>
              <button
                type="button"
                className="inline-flex items-center rounded-[99px] py-[4px] px-[2px] gap-[4px]"
              >
                <p className="text-primaryorange-500 text-[16px] leading-[24px] font-bold">
                  View Map
                </p>
              </button>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <p className="text-primarygray-400 text-[14px] leading-[24px] font-bold ">
                Date & Time:
              </p>
              <div className="flex gap-[12px] items-center">
                <p className="text-primarygray-600 text-[16px] leading-[28px] font-bold ">
                  {bookingDetail.formatted_booking_date}
                </p>
                <p className="text-primarygray-600 text-[16px] leading-[28px] font-bold ">
                  |
                </p>
                <p className="text-primarygray-600 text-[16px] leading-[28px] font-bold ">
                  {bookingDetail.formatted_booking_time_start} - {bookingDetail.formatted_booking_time_end}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex items-end   rounded-[99px] py-[4px] px-[2px] gap-[4px]"
              onClick={() => setShowModal(true)} // เปิด BookingPopup
            >
              <img
                src={changeIcon}
                alt="Change"
                className="h-[24px] w-[24px]"
              />
              <p className="text-primaryorange-500 text-[16px] leading-[24px] font-bold">
                Change
              </p>
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-primarygray-400 text-[14px] leading-[24px] font-bold">Duration:</p>
            <p className="text-primarygray-400 text-[14px] leading-[24px] font-bold">
              {/* Logic to calculate and display duration */}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-primarygray-400 text-[14px] leading-[24px] font-bold">Pet:</p>
            <p className="text-primarygray-400 text-[14px] leading-[24px] font-bold">
              {bookingDetail.pet_names.join(", ")}
            </p>
          </div>
          <div className="flex justify-between gap-[16px] border-primarygray-200 border-t pt-[16px]">
            <p className="text-black text-[16px] leading-[28px] font-medium  ">Total</p>
            <p className="text-black text-[18px] leading-[26px] font-medium  ">{bookingDetail.amount} THB</p>
          </div>
        </div>
      </div>
      {/* BookingPopup Component */}
      <BookingPopup showModal={showModal} setShowModal={setShowModal} text="Change date" />
    </div>
  );
};

export default BookingHistoryDetailPopup;












// import { useEffect, useState } from "react";
// import ModalPopup from "./BookingPopup"
// import changeIcon from "../assets/svgs/icons/icon-change.svg"
// import axios from "axios";
// import { SERVER_API_URL } from "../core/config.mjs";

// const BookingHistoryDetailPopup = ({ showDetail, setShowDetail }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get(`${SERVER_API_URL}/booking-history`);
//         setBookings(response.data);
//       } catch (error) {
//         console.error("Error fetching booking history:", error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Waiting for service":
//         return "#FFCA62";
//       case "Waiting for confirm":
//         return "#FA8AC0";
//       case "In service":
//         return "#76D0FC";
//       case "Success":
//         return "#1CCD83";
//       case "Canceled":
//         return "#EA1010";
//       default:
//         return "#000000";
//     }
//   };
//   const getStatusMessage = (status, formattedUpdatedAt) => {
//     switch (status) {
//       case "Waiting for confirm":
//         return "Waiting Pet Sitter for confirm booking";
//       case "Waiting for service":
//         return "Pet Sitter is confirm booking";
//       case "In service":
//         return "Your pet is already in Pet Sitter care!";
//       case "Success":
//         return (
//           <>
//             Success date:
//             <br />
//             {formattedUpdatedAt}
//           </>
//         );
//       case "Canceled":
//         return "Booking has canceled";
//       default:
//         return "";
//     }
//   };

//   const calculateDuration = (start, end) => {
//     const parseTime = (time) => {
//       let [hours, minutes] = time.split(/[: ]/).map(Number);
//       if (time.includes("PM") && hours !== 12) hours += 12;
//       if (time.includes("AM") && hours === 12) hours = 0;
//       return hours * 60 + minutes;
//     };

//     const totalMinutes = parseTime(end) - parseTime(start);
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;

//     return `${hours} hours${minutes > 0 ? ` ${minutes} minutes` : ""}`;
//   };

//   if (!showDetail) {
//     return null;
//   }
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center lg:items-center items-start z-50 pt-[24px] lg:pt-0">
//       <div className="bg-white rounded-t-[16px] lg:rounded-[16px] w-full max-w-[560px] mx-auto flex flex-col h-[calc(100vh-24px)] max-h-[788px] lg:h-[644px]">
//         <div className="flex justify-between border-b-[1px] p-[16px] gap-[10px] lg:py-[24px] lg:px-[40px] items-center">
//           <h1 className="text-primarygray-600 text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] font-bold">
//             Booking Detail
//           </h1>
//           <img
//             src={cross}
//             className="w-[24px] h-[24px] cursor-pointer"
//             onClick={() => setShowDetail(false)}
//             alt="Close"
//           />
//         </div>
//         <div className="flex flex-col flex-grow py-[24px] px-[16px] lg:p-[40px] gap-[16px] lg:gap-[24px]">
//           <div className="flex gap-[8px] items-center">
//             <p
//               className="w-[6px] h-[6px] rounded-full inline-block"
//               style={{ backgroundColor: getStatusColor(booking.status) }}
//             ></p>
//             <p
//               className="text-[16px] leading-[24px] font-medium"
//               style={{
//                 color: getStatusColor(booking.status),
//               }}
//             >
//               {booking.status}
//             </p>
//           </div>
//           <div className="flex flex-col">
//             <p className="text-primarygray-300 text-[16px] leading-[28px] font-medium ">
//               Transaction date: Tue, 16 Oct 2022
//             </p>
//             <p className="text-primarygray-300 text-[16px] leading-[28px] font-medium ">
//               Transaction No. : 122312
//             </p>
//           </div>
//           <div className="flex flex-col">
//             <p className="text-primarygray-400 text-[14px] leading-[24px] font-medium ">
//               Pet Sitter:
//             </p>
//             <div className="flex justify-between gap-[12px]">
//               <p className="text-primarygray-600 text-[16px] leading-[28px] ">
//                 Happy House! By Jane Maison
//               </p>
//               <button
//                 type="button"
//                 className="inline-flex  items-center rounded-[99px] py-[4px] px-[2px] gap-[4px]"
//               >
//                 <img src={changeIcon} alt="Map" className="h-[24px] w-[24px]" />
//                 <p className="text-primaryorange-500 text-[16px] leading-[24px] font-bold">
//                   View Map
//                 </p>
//               </button>
//             </div>
//           </div>
//           <div className="flex justify-between">
//             <div className="flex flex-col ">
//               <p className="text-primarygray-400 text-[14px] leading-[24px] font-bold ">
//                 Date & Time:
//               </p>
//               <div className="flex gap-[12px] items-center">
//                 <p className="text-primarygray-600 text-[16px] leading-[28px] font-bold ">
//                   25 Aug, 2023
//                 </p>
//                 <p className="text-primarygray-600 text-[16px] leading-[28px] font-bold ">
//                   |
//                 </p>
//                 <p className="text-primarygray-600 text-[16px] leading-[28px] font-bold ">
//                   27 AM - 10 AM
//                 </p>
//               </div>
//             </div>
//             <button
//               type="button"
//               className="inline-flex  items-center rounded-[99px] py-[4px] px-[2px] gap-[4px]"
//               onClick={() => setShowModal(true)}
//             >
//               <img
//                 src={changeIcon}
//                 alt="Change"
//                 className="h-[24px] w-[24px]"
//               />
//               <p className="text-primaryorange-500 text-[16px] leading-[24px] font-bold">
//                 Change
//               </p>
//             </button>
//           </div>
//           <div className="flex flex-col">
//             <p className="text-primarygray-400 text-[14px] leading-[24px] font-bold">Duration:</p>
//             <p className="text-primarygray-400 text-[14px] leading-[24px] font-bold">3 hours</p>
//           </div>
//           <div className="flex flex-col">
//             <p className="text-primarygray-400 text-[14px] leading-[24px] font-bold">Pet:</p>
//             <p className="text-primarygray-400 text-[14px] leading-[24px] font-bold">Bubba, Daisy</p>
//           </div>
//           <div className="flex justify-between gap-[16px] border-primarygray-200 border-t pt-[16px]">
//             <p className="text-black text-[16px] leading-[28px] font-medium  ">Total</p>
//             <p className="text-black text-[18px] leading-[26px] font-medium  ">900 THB</p>
//           </div>
//         </div>
//       </div>
//       <ModalPopup
//         showModal={showModal}
//         setShowModal={setShowModal}
//         text={"Change date"}
//       />
//     </div>
//   );
// };
// export default BookingHistoryDetailPopup;
