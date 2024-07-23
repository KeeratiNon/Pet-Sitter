import AccountMenu2 from "../components/booking-history/AccountMenu2";
import AccountMenu from "../components/cards/AccountMenu";
import BookingHistory from "../components/booking-history/BookingHistory";

const BookingHistoryPage = () => {
  return (
    <>
      <div className="bg-gray-100  lg:flex lg:justify-center lg:pt-[40px] lg:pb-[80px] lg:px-[80px] lg:gap-[40px]">
        <AccountMenu2 />
        <BookingHistory />
      </div>
    </>
  );
};

export default BookingHistoryPage;