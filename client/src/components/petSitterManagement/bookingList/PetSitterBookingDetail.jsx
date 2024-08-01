import React, { useState, useEffect } from "react";
import axios from "axios";
import prevIcon from "../../../assets/svgs/icons/icon-prev.svg";
import blueCircle from "../../../assets/svgs/pet-sitter-management/pet-sitter-blueCircle.svg";
import eyeIcon from "../../../assets/svgs/pet-sitter-management/pet-sitter-eye.svg";
import catImage from "../../../assets/images/catright.png";


const PetsitterBookingDetail = ({ bookingId }) => {
  const [bookingDetail, setBookingDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (bookingId) {
      const fetchBookingDetail = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/petsitter/booking/detail/${bookingId}`
          );
          setBookingDetail(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchBookingDetail();
    } else {
      setLoading(false);
      setError('No booking ID provided');
    }
  }, [bookingId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-[#F6F6F9] flex flex-col pt-[40px] px-[40px] pb-[80px] gap-[24px]">
      <div className="flex items-center gap-[10px]">
        <img src={prevIcon} className="w-[24px] h-[24px]" alt="previous" />
        <div className="flex w-full gap-[24px]">
          <h3 className="text-black text-[24px] leading-[32px] font-bold">
            {bookingDetail.petOwnerName}
          </h3>
          <div className="flex items-center gap-[8px]">
            <img src={blueCircle} className="w-[6px] h-[6px]" alt="status" />
            <p className="text-secondaryblue-200">In service</p>
          </div>
        </div>
        <div className="flex gap-[8px]">
          <button className="btn-secondary whitespace-nowrap">
            Send Message
          </button>
          <button className="btn-primary whitespace-nowrap">Success</button>
        </div>
      </div>
      <div className="bg-white rounded-[16px] flex flex-col py-[40px] px-[80px] gap-[24px]">
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold">
            Pet Owner Name
          </h4>
          <div className="flex items-center justify-between gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              {bookingDetail.petOwnerName}
            </p>
            <button className="flex items-center py-[4px] px-[2px] gap-[4px]">
              <img src={eyeIcon} alt="view profile" />
              <span className="text-primaryorange-500 text-16px leading-[24px] font-bold">
                View Profile
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold">
            Pet(s)
          </h4>
          <div className="flex gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              {bookingDetail.petCount}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold">
            Pet Detail
          </h4>
          <div className="flex gap-[12px]">
            {bookingDetail.pets.map((pet, index) => (
              <div
                key={index}
                className="bg-white border border-primarygray-200 flex flex-col items-center rounded-[16px] p-[24px] gap-[16px]"
              >
                <img
                  src={pet.image || catImage}
                  className="w-[104px] h-[104px] rounded-full"
                  alt={pet.pet_name}
                />
                <div className="flex flex-col items-center gap-[4px] w-[159px]">
                  <h4 className="text-primarygray-600 text-20px leading-[28px] font-bold">
                    {pet.pet_name}
                  </h4>
                  <div className="bg-secondarygreen-100 border border-secondarygreen-200 flex rounded-full py-[4px] px-[16px] gap-[10px]">
                    <p className="text-secondarygreen-200 text-[16px] leading-[24px] font-medium">
                      {pet.pet_type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold">
            Duration
          </h4>
          <div className="flex gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              {bookingDetail.duration}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold">
            Booking Date
          </h4>
          <div className="flex gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              {bookingDetail.booking_date}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold">
            Total Paid
          </h4>
          <div className="flex gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              {bookingDetail.total_paid} THB
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold">
            Transaction Date
          </h4>
          <div className="flex gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              {bookingDetail.transaction_date}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold">
            Transaction No.
          </h4>
          <div className="flex gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              {bookingDetail.transaction_number}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold">
            Additional Message
          </h4>
          <div className="flex gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              {bookingDetail.additional_message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsitterBookingDetail;