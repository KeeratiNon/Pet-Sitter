import prevIcon from "../../../assets/svgs/icons/icon-prev.svg";
import blueCircle from "../../../assets/svgs/pet-sitter-management/pet-sitter-blueCircle.svg";
import eyeIcon from "../../../assets/svgs/pet-sitter-management/pet-sitter-eye.svg";
import catImage from "../../../assets/images/catright.png";

const PetsitterBookingDetail = () => {
  return (
    <div className="bg-[#F6F6F9]  flex flex-col pt-[40px] px-[40px] pb-[80px] gap-[24px]">
      <div className="flex items-center gap-[10px]">
        <img src={prevIcon} className="w-[24px] h-[24px]"></img>
        <div className="flex w-full gap-[24px]">
          <h3 className="text-black text-[24px] leading-[32px] font-bold">
            John Wick
          </h3>
          <div className="flex items-center   gap-[8px]">
            <img src={blueCircle} className="w-[6px] h-[6px]"></img>
            <p className="text-secondaryblue-200    ">In service</p>
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
        <div className="flex flex-col  gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold ">
            Pet Owner Name
          </h4>
          <div className="flex items-center justify-between  gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              John Wick
            </p>
            <button className="flex items-center py-[4px] px-[2px] gap-[4px]">
              <img src={eyeIcon}></img>
              <span className="text-primaryorange-500 text-16px leading-[24px] font-bold">
                View Profile
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold ">
            Pet(s)
          </h4>
          <div className="flex  gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              2
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold ">
            Pet Detail
          </h4>
          <div className="flex gap-[12px]">
            <div className="bg-white border border-primarygray-200 flex flex-col items-center rounded-[16px] p-[24px] gap-[16px] ">
              <img
                src={catImage}
                className="w-[104px] h-[104px] rounded-full"
              ></img>
              <div className="flex flex-col items-center gap-[4px] w-[159px]">
                <h4 className="text-primarygray-600 text-20px leading-[28px] font-bold ">
                  Bubba
                </h4>
                <div className="bg-secondarygreen-100 border border-secondarygreen-200 flex rounded-full py-[4px] px-[16px] gap-[10px] ">
                  <p className="text-secondarygreen-200 text-[16px] leading-[24px] font-medium">
                    Dog
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-primarygray-200 flex flex-col items-center rounded-[16px] p-[24px] gap-[16px] ">
              <img
                src={catImage}
                className="w-[104px] h-[104px] rounded-full"
              ></img>
              <div className="flex flex-col items-center gap-[4px] w-[159px]">
                <h4 className="text-primarygray-600 text-20px leading-[28px] font-bold ">
                  Bubba
                </h4>
                <div className="bg-secondarygreen-100 border border-secondarygreen-200 flex rounded-full py-[4px] px-[16px] gap-[10px] ">
                  <p className="text-secondarygreen-200 text-[16px] leading-[24px] font-medium">
                    Dog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold ">
            Duration
          </h4>
          <div className="flex  gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              3 hours
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold ">
            Booking Date
          </h4>
          <div className="flex  gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              16 Oct 2022 | 7 AM - 10 AM
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold ">
            Total Paid
          </h4>
          <div className="flex  gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              900.00 THB
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold ">
            Transaction Date
          </h4>
          <div className="flex  gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              16 Oct 2022
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold ">
            Transaction No.
          </h4>
          <div className="flex  gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              122312
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <h4 className="text-primarygray-300 text-[20px] leading-[28px] font-bold ">
            Additional Message
          </h4>
          <div className="flex  gap-[4px]">
            <p className="text-black text-[16px] leading-[28px] font-medium">
              I love my dogs, care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetsitterBookingDetail;
