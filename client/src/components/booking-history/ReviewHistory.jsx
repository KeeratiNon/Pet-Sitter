import React from "react";
import cross from "../../assets/svgs/icons/icon-cross.svg";
import star2 from "../../assets/svgs/star2.svg";
const ReviewHistory = ({ showReview, setShowReview, reviewData }) => {
  if (!showReview) {
    return null;
  }
  
  const { rating = 0, text = "" } = reviewData || {};
  
  return (
    <>
      <div className="bg-black fixed inset-0 bg-opacity-40 flex items-end justify-center md:items-center">
        <div className="bg-white rounded-t-[16px] w-full h-[calc(50vh-24px)]  md:w-[800px]  md:rounded-2xl  ">
          <div className="flex justify-between border-b-[1px] rounded-[1px] p-4 gap-[10px] ">
            <h4 className="size-5 leading-7 w-full text-gray-600 font-bold ">
              Rating & Review
            </h4>
            <img
              src={cross}
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={() => setShowReview(false)}
              alt="Close"
            />
          </div>

          <div className=" w-full flex flex-col items-center gap-[80px] pt-[40px] pr-[16px] pb-[24px] pl-[16px]  ">
            <div className="border-b-[1px] w-full flex  items-baseline  justify-between md:justify-normal md:gap-4 ">
              <div className=" flex  gap-4  ">
                <img src="" alt="profile" />
                <div>
                  <p>John Wick</p>
                  <p>Tue,13 Apr 2023</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={star2}
                    alt="star"
                    className={`size-3 md:size-5 ${
                      i + 1 <= rating ? "opacity-100" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-center px-4">{text}</p>
            <button className="btn-secondary w-[157px] h-[48px] rounded-[99px] py-3 px-6 ">
              {" "}
              View Pet Sitter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewHistory;
