import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../../assets/svgs/icons/icon-calendar.svg";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className=" flex items-center gap-[12px] lg:gap-[16px]">
      <img src={calendar} alt="Calendar" />
      <div className="flex-grow w-full">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="text-black font-normal border-primarygray-200 border rounded-[8px] py-[12px] pr-[16px] pl-[12px] w-full max-h-[48px] placeholder-gray-400"
          calendarClassName="custom-calendar "
          wrapperClassName="w-full"
          placeholderText="Select Date"
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
