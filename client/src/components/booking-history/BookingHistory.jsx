import BookingHistoryService from "./BookingHistoryService";

const BookingHistory = () => {
  return (
    <div className="bg-white flex flex-col lg:rounded-[16px] py-[24px] px-[16px]  lg:p-[40px] gap-[24px] lg:gap-[60px] w-full max-w-[956px]">
      <div className="flex :gap-[10px] ">
        <p className="text-black text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-bold ">
          Booking History
        </p>
      </div>
      <BookingHistoryService/>
    </div>
  );
};

export default BookingHistory;
