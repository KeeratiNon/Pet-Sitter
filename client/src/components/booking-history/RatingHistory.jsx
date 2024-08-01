import star2 from "../../assets/svgs/star2.svg";
import cross from "../../assets/svgs/icons/icon-cross.svg";
import { useState } from "react";

import ReviewHistory from "./ReviewHistory";
const RatingHistory = ({
  showModal,
  setShowModal,
  showReview,
  setShowReview,
  setReviewData,
}) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  

  if (!showModal) {
    return null;
  }
  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };
  const handleSend = () => {
    // Set the review data here
    setReviewData({
      rating: rating, // Pass the selected rating
      text: reviewText, // Pass the review text
    });
    setShowModal(false);
    setShowReview(true);
  };

  const handleCancel = () => {
    setReviewText(""); // ลบข้อความทั้งหมดใน textarea
    setShowModal(false); // ปิด modal ถ้าต้องการ
  };

  const stars = Array.from({ length: 5 }, (_, i) => {
    const starValue = i + 1;
    return (
      <img
        key={i}
        src={star2}
        alt="star"
        className={`size-12 cursor-pointer ${
          starValue <= (hoverRating || rating) ? "opacity-100" : "opacity-50"
        }`}
        onClick={() => handleStarClick(starValue)}
        onMouseEnter={() => handleMouseEnter(starValue)}
        onMouseLeave={handleMouseLeave}
      />
    );
  });
  
  return (
    <>
      <div className="bg-black fixed inset-0 bg-opacity-40 flex items-end justify-center md:items-center ">
        <div className="bg-white rounded-t-[16px] w-full max-h-[calc(75vh-24px)]  md:w-[800px]  md:rounded-2xl  ">
          <div className="flex justify-between border-b-[1px] rounded-[1px] p-4 gap-[10px] ">
            <h4 className="size-5 leading-7 w-full text-gray-600 font-bold ">
              Rating & Review
            </h4>
            <img
              src={cross}
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={() => setShowModal(false)}
              alt="Close"
            />
          </div>

          <div>
            <div className="flex flex-col gap-[24px] pt-[40px] pr-[16px] pb-[24px] pl-[16px] justify-around ">
              <h3 className="size-6 leading-8 text-center w-full font-bold ">
                What is your rate?
              </h3>
              <div className="flex flex-nowrap w-full gap-3 justify-center">
                {stars}
              </div>

              <div className="flex flex-col gap-6">
                <h3 className=" size-6 leading-8 text-center w-full font-bold ">
                  Share more about your experience
                </h3>
                <div className="flex rounded-lg border pt-[12px] pr-[16px] pb-[12px] pl-[12px] gap-2 md:h-[243px]  ">
                  <textarea
                    placeholder="Your review..."
                    rows="5" /* จำนวนบรรทัดเริ่มต้น */
                    className="w-full h-full text-left p-2 resize-y" /* ปรับขนาดได้แนวตั้ง */
                    onChange={(e) => setReviewText(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="flex gap-4 justify-center md:justify-between ">
                <button
                  className="w-[120px] h-[48px] rounded-[99px] py-3 px-6 flex justify-center gap-2 btn-secondary "
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="w-[207px] h-[48px] rounded-[99px] py-3 px-6 flex justify-center gap-2 btn-primary "
                  onClick={handleSend}
                >
                  Send Review & Rating
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewHistory showReview={showReview} setShowReview={setShowReview} />
    </>
  );
};

export default RatingHistory;
