import BookingHistoryService from "./BookingHistoryService";
import BookingHistorySuccess from "./BookingHistorySuccess";
import BookingHistoryWaiting from "./BookingHistoryWaiting"
import RatingHistory from "./RatingHistory";
import { useState } from "react";
import ReviewHistory from "./ReviewHistory";

const BookingHistory = () => {
  const [showModal, setShowModal] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [reviewData, setReviewData] = useState({ rating: 0, text: "" });
  return (
    <div className="relative">
      <div className="bg-white flex flex-col lg:rounded-[16px] py-[24px] px-[16px]  lg:p-[40px] gap-[24px] lg:gap-[60px] w-full max-w-[956px]">
        <div className="flex :gap-[10px] ">
          <p className="text-black text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-bold ">
            Booking History
          </p>
        </div>
        <BookingHistoryWaiting />
        <BookingHistoryService />
        <BookingHistorySuccess />
      </div>
      <BookingHistoryService/>
      <button
        type="submit"
        className="btn-primary"
        onClick={() => setShowModal(true)}
      ></button>
     <RatingHistory showModal={showModal} setShowModal={setShowModal} showReview={showReview} setShowReview={setShowReview}  setReviewData={setReviewData} />
     <ReviewHistory showReview={showReview} setShowReview={setShowReview} reviewData={reviewData}  />
      
    </div>
  );
};

export default BookingHistory;
