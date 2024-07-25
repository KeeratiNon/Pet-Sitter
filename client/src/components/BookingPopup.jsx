// BookingPopup.jsx
import React, { useState } from "react";
import cross from "../assets/svgs/icons/icon-cross.svg";
import clock from "../assets/svgs/icons/icon-clock.svg";
import CustomDatePicker from "./cards/CustomDatePicker ";
import CustomTimePicker from "./cards/CustomTimePicker";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const BookingPopup = ({ showModal, setShowModal }) => {
  const { setItem } = useLocalStorage("bookingData");
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleContinue = () => {
    setItem({ startTime, endTime });

    navigate("/booking");
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center lg:items-center items-start z-50 pt-[24px] lg:pt-0">
      <div className="bg-white rounded-t-[16px] lg:rounded-[16px] w-full max-w-[560px] mx-auto flex flex-col h-[calc(100vh-24px)] max-h-[788px] lg:h-[438px]">
        <div className="flex justify-between border-b-[1px] p-[16px] gap-[10px] lg:py-[24px] lg:px-[40px] items-center">
          <h1 className="text-primarygray-600 text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] font-bold">
            Booking
          </h1>
          <img
            src={cross}
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => setShowModal(false)}
            alt="Close"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow py-[24px] px-[16px] lg:p-[40px] lg:gap-[60px]">
          <div className="flex flex-col gap-[12px] lg:gap-[24px]">
            <p className="text-primarygray-600 text-[16px] leading-[28px] lg:text-[18px] lg:leading-[26px] font-medium">
              Select date and time you want to schedule the service
            </p>
            <CustomDatePicker />
            <div className="flex gap-[12px] lg:gap-[16px] items-center">
              <img src={clock} alt="Clock" />
              <div className="flex gap-[8px] items-center w-full">
                <div className="w-full">
                  <CustomTimePicker
                    selectedTime={startTime}
                    setSelectedTime={setStartTime}
                  />
                </div>
                <p className="text-primarygray-400 text-[16px] leading-[24px] font-normal">
                  -
                </p>
                <div className="w-full">
                  <CustomTimePicker
                    selectedTime={endTime}
                    setSelectedTime={setEndTime}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary mt-4 flex-shrink-0"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;

// import React from "react";
// import cross from "../assets/svgs/icons/icon-cross.svg";
// import calendar from "../assets/svgs/icons/icon-calendar.svg";
// import clock from "../assets/svgs/icons/icon-clock.svg";
// import CustomDateInput from "./cards/CustomDateInput";

// const BookingPopup = ({ showModal, setShowModal }) => {
//   if (!showModal) {
//     return null;
//   }
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center lg:items-center items-start z-50 pt-[24px] lg:pt-0">
//       <div className="bg-white rounded-t-[16px] lg:rounded-[16px] w-full max-w-[560px]  mx-auto flex flex-col h-[calc(100vh-24px)] max-h-[788px] lg:h-[438px]"> {/* ใช้ Tailwind CSS */}
//         <div className="flex justify-between border-b-[1px] p-[16px] gap-[10px] lg:py-[24px] lg:px-[40px] items-center">
//           <h1 className="text-primarygray-600 text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] font-bold">
//             Booking
//           </h1>
//           <img
//             src={cross}
//             className="w-[24px] h-[24px] cursor-pointer"
//             onClick={() => setShowModal(false)}
//             alt="Close"
//           />
//         </div>
//         <div className="flex flex-col justify-between flex-grow py-[24px] px-[16px] lg:p-[40px] lg:gap-[60px] overflow-y-auto">
//           <div className="flex flex-col gap-[24px]">
//             <p className="text-primarygray-600 text-[16px] leading-[28px] lg:text-[18px] lg:leading-[26px] font-medium">
//               Select date and time you want to schedule the service
//             </p>
//             <div className="flex gap-[16px]">
//               <img src={calendar} alt="Calendar" />
//               <CustomDateInput />
//             </div>
//             <div className="flex gap-[16px]">
//               <img src={clock} alt="Clock" />
//               <input type="time" className="border" />
//               <p className="text-primarygray-400 text-[16px] leading-[24px] font-normal">
//                 -
//               </p>
//               <input type="time" className="border" />
//             </div>
//           </div>
//           <button type="submit" className="btn-primary mt-4 flex-shrink-0">
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingPopup;

{
  /* <div className="flex items-center gap-4 w-[480px] h-[48px]">
      <div className="relative w-[24px] h-[24px]">
        <img src={calendar} alt="calendar" className="absolute inset-0 w-5 h-5 m-0.5 text-gray-400" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="block text-[16px] leading-[24px] font-medium text-black">
          Success
        </label>
        <div className="flex items-center gap-2 w-full border border-gray-200 rounded-lg p-2">
          <input type="date" className="w-full border-none outline-none" placeholder="23 Aug, 2023" />
        </div>
      </div>
    </div> */
}
