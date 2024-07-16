/* eslint-disable react/prop-types */
import imgpetsitter3 from "../../assets/svgs/img-pet-sitter/imgpetsitter3.svg";
import StarRating from "./StarRating";
import RoomIcon from "@mui/icons-material/Room";
import TypeList from "./TypeList";


const CardSearchList = ({ profiles }) => {
  return (
    <section  >
      <div className=" w-full   rounded-[16px] p-4 gap-4 flex flex-col  xl:flex-row md:gap-6  md:bg-white  ">
        <div>
          <img
            src={profiles.picture}
            alt="profild-web"
            className="hidden object-cover rounded-lg md:min-w-[245px] md:min-h-[184px] md:block   "
          />
          <img
            src={profiles.picture}
            alt="card-img"
            className=" w-full  md:min-w-full md:min-h-[184px] rounded-[8px] md:hidden "
          />
        </div>
        <div className=" w-full  ">
          <div className=" ">
            <div className=" flex justify-between  md:gap-4 ">
              <div className=" flex gap-4">
                <div>
                  <img
                    src={imgpetsitter3}
                    alt=""
                    className="rounded-full size-[36px] md:size-[64px] bg-fixed   "
                  />
                </div>

                <div className="">
                  <p className="text-nowrap">{profiles.title}</p>
                  <p className="text-nowrap">{profiles.name}</p>
                </div>
              </div>

              <div>
                <button className="gap-[2px] p-2  h-[66px]  flex flex-nowrap  border-gray-200   ">
                  <StarRating rating={profiles.rating} />
                </button>
              </div>
            </div>
          </div>
          <div className="    md:flex-col  ">
            <div className="">
              <RoomIcon />
              {profiles.addess}
            </div>
            <TypeList types={profiles.type} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSearchList;
