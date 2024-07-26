import React, { useEffect, useState } from "react";
import Select from "react-select";

const allTimeOptions = [
  { value: "08:00", label: "8:00 AM" },
  { value: "08:30", label: "8:30 AM" },
  { value: "09:00", label: "9:00 AM" },
  { value: "09:30", label: "9:30 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "11:30", label: "11:30 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "12:30", label: "12:30 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "13:30", label: "1:30 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "14:30", label: "2:30 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "15:30", label: "3:30 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "16:30", label: "4:30 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "17:30", label: "5:30 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "18:30", label: "6:30 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "19:30", label: "7:30 PM" },
  { value: "20:00", label: "8:00 PM" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    borderColor: "#DCDFED",
    borderRadius: "8px",
    padding: "0 12px",
    height: "48px",
    display: "flex",
    alignItems: "center",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
  }),
  singleValue: (base) => ({
    ...base,
    margin: "0 ",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    display: 'none'
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9CA3AF",
  }),
};

const CustomTimePicker = ({ selectedDate, selectedTime, setSelectedTime, minTime }) => {
  const [filteredTimeOptions, setFilteredTimeOptions] = useState(allTimeOptions);

  useEffect(() => {
    if (selectedDate) {
      const now = new Date();
      const selectedDateTime = new Date(selectedDate);
      if (selectedDateTime.toDateString() === now.toDateString()) {
        now.setHours(now.getHours() + 2);
        now.setMinutes(now.getMinutes() + 30); // เพิ่ม 2 ชั่วโมง 30 นาที
        const currentTimeString = now.toTimeString().substring(0, 5);
        let filteredOptions = allTimeOptions.filter(option => option.value >= currentTimeString);

        if (minTime) {
          filteredOptions = filteredOptions.filter(option => option.value > minTime);
        }

        setFilteredTimeOptions(filteredOptions); // กรองเวลาที่น้อยกว่า 2 ชั่วโมง 30 นาทีจากเวลาปัจจุบัน
      } else {
        let filteredOptions = allTimeOptions;

        if (minTime) {
          filteredOptions = filteredOptions.filter(option => option.value > minTime);
        }

        setFilteredTimeOptions(filteredOptions); // ใช้ทุกเวลาในกรณีที่ไม่ใช่วันนี้
      }
    }
  }, [selectedDate, minTime]); // รีเฟรชตัวเลือกเวลาทุกครั้งที่เลือกวันที่ใหม่และเมื่อ minTime เปลี่ยน

  return (
    <Select
      options={filteredTimeOptions} // ใช้ options ที่กรองแล้ว
      value={selectedTime} // ใช้ selectedTime จาก props
      onChange={setSelectedTime} // ใช้ setSelectedTime จาก props
      styles={customStyles}
      className="w-full"
      placeholder="Select Time"
    />
  );
};

export default CustomTimePicker;


