import { useState, useEffect } from "react";
import axios from "axios";

import imgpetsitter3 from "../../assets/svgs/img-pet-sitter/imgpetsitter3.svg";
import StarRating from "./StarRating";
import RoomIcon from "@mui/icons-material/Room";
import TypeList from "./TypeList";


const CardSearchList = () => {
  // const [selectedRatings, setSelectedRatings] = useState([]);

  const [proflies, setProfile] = useState([]); //เก็บรูปภาพ ใน setProfile

  const dataProflie = async () => {
    const dataResult = await axios.get("http://localhost:4000/profile");
    setProfile(dataResult.data);
    console.log(dataResult.data);
  };

  useEffect(() => {
    dataProflie();
  }, []);

  //   const handleRatingChange = (rating) => {
  //     setSelectedRatings((prevSelectedRatings) =>
  //       prevSelectedRatings.includes(rating)
  //         ? prevSelectedRatings.filter((r) => r !== rating)
  //         : [...prevSelectedRatings, rating]
  //     );
  //   };

  return (
    <section>
      {proflies.map((proflie, index) => {
        return (
          <div
            key={index}
            className=" w-full   rounded-[16px] p-4 gap-4 flex flex-col  xl:flex-row md:gap-6   "
          >
            <div>
              <img
                src={proflie.picture}
                alt="profild-web"
                className="hidden object-cover rounded-lg md:min-w-[245px] md:min-h-[184px] md:block   "
              />
              <img
                src={proflie.picture}
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
                      <p className="text-nowrap">{proflie.title}</p>
                      <p className="text-nowrap">{proflie.name}</p>
                    </div>
                  </div>

                  <div >
                    <button
                      className="gap-[2px] p-2  h-[66px]  flex flex-nowrap  border-gray-200   "
                      key={index}
                    >
                      <StarRating rating={proflie.rating} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="    md:flex-col  ">
                <div className="">
                  <RoomIcon />
                  {proflie.addess}
                </div>
                {/* <div className=" flex gap-2 md:gap-2">
                  <button className="h-8 w-[63px] border rounded-[99px] px-1 py-4  flex gap-[10px]  justify-center  items-center bg-green-100 border-green-500  text-green-500">
                    Dog
                  </button>
                  <button className="h-8 w-[63px] border rounded-[99px] px-1 py-4  flex gap-[10px]  justify-center  items-center bg-pink-100 border-pink-500 text-pink-500 ">
                    Cat
                  </button>
                  <button className="h-8 w-[63px] border rounded-[99px] px-1 py-4  flex gap-[10px]  justify-center  items-center bg-blue-100 border-blue-500 text-blue-500 ">
                    Rabbit
                  </button>
                  <button className="h-8 w-[63px] border rounded-[99px] px-1 py-4  flex gap-[10px]  justify-center  items-center bg-yellow-100 border-orange-400 text-orange-500">
                    Bird
                  </button>
                </div> */}
                <TypeList types={proflie.type} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CardSearchList;
