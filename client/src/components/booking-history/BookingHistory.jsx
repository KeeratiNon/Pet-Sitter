import BookingHistoryService from "./BookingHistoryService";

import RatingHistory from "./RatingHistory";
import { useState } from "react";
import ReviewHistory from "./ReviewHistory";
import ReportHistory from "./ReportHistory";


const BookingHistory = () => {
  const [showModal, setShowModal] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [reviewData, setReviewData] = useState(false);

  





  return (
    <div className="relative">
      <div className="bg-white flex flex-col lg:rounded-[16px] py-[24px] px-[16px]  md:p-[40px] gap-[24px] md:gap-[60px] w-full ">
        <div className="flex 2xl:gap-[10px] ">
          <p className="text-black text-[20px] 2xl:text-[24px] leading-[28px] 2xl:leading-[32px] font-bold ">
            Booking History
          </p>
        </div>
        <BookingHistoryService
          showModal={showModal}
          setShowModal={setShowModal}
          showReview={showReview}
          setShowReview={setShowReview}
          setReviewData={setReviewData}
          showReport={showReport}
          setShowReport={setShowReport}
        />
        {/* pop up */}
        <RatingHistory
          showModal={showModal}
          setShowModal={setShowModal}
          showReview={showReview}
          setShowReview={setShowReview}
          setReviewData={setReviewData}
        />
        <ReviewHistory
          showReview={showReview}
          setShowReview={setShowReview}
          reviewData={reviewData}
        />

        <ReportHistory 
        showReport={showReport} 
        setShowReport={setShowReport} />
        {/* pop up */}
      </div>
    </div>
  );
};

export default BookingHistory;
