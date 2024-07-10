import { useState } from "react";
import { Button } from "@mui/base";

import star2 from "../assets/svgs/star2.svg";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MapIcon from "@mui/icons-material/Map";
import Navbar from "../components/navbar/Navbar";
import RoomIcon from "@mui/icons-material/Room";
import Searchtolistpage from "../components/searchs/Searchtolistpage";
import imgpetsitter from "../assets/svgs/img-pet-sitter/imgpetsitter.svg";
import imgpetsitter2 from "../assets/svgs/img-pet-sitter/imgpetsitter2.svg";
import imgpetsitter3 from "../assets/svgs/img-pet-sitter/imgpetsitter3.svg";
import PaginationSize from "../components/searchs/Pagination"

const SearchListPage = () => {
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleRatingChange = (rating) => {
    setSelectedRatings((prevSelectedRatings) =>
      prevSelectedRatings.includes(rating)
        ? prevSelectedRatings.filter((r) => r !== rating)
        : [...prevSelectedRatings, rating]
    );
  };
  //ดึงรูปเข้าไปใน array
  const renderStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <img
        key={index}
        src={star2}
        alt={`${count} star`}
        className="size-[12px] md:size-[20px]"
      />
    ));
  };

  return (
    <section className=" bg-[#FAFAFB]  ">
      <Navbar />
      
      {/* web mode*/}
      <div className=" hidden   md:flex md:pb-[24px] md:pl-[92px] md:pt-[38px] md:pr-[69px] md:justify-between md:items-center  ">
        <div>
          <h4 className="text-[20px]  leading-7 ">Search For Pet Sitter</h4>
        </div>

        <div className=" flex gap-3  ">
          <Button className=" py-3 px-2 border rounded-[8px] flex gap-2 h-10 w-[81px] text-orange-500 border-orange-500 justify-center items-center active:bg-orange-200  ">
            <FormatListBulletedIcon /> List{" "}
          </Button>
          <Button className="py-3 px-2 border rounded-[8px] flex gap-2 h-10 w-[81px] text-gray-300 border-gray-300 justify-center items-center active:bg-orange-200  ">
            <MapIcon />
            Map
          </Button>
        </div>
      </div>
      {/* web mode*/}

      <main className=" flex flex-col-reverse    md:flex-row-reverse  md:w-full md:pl-[92px] md:pr-[70px]  ">
        <article className=" w-full md:pl-[36px]   ">
          {/* mobile mode */}
          <div className=" flex gap-5 pt-10 pr-4 pl-4 flex-col items-center justify-between    md:hidden  ">
            <div>
              <h4 className="text-[20px]  leading-7 text-gray-600  ">
                Search For Pet Sitter
              </h4>
            </div>
          
            <div className=" flex  gap-3  ">
              <Button className=" py-3 px-2 border rounded-[8px] flex gap-2 h-10 w-[165.5px] text-orange-500 border-orange-500 justify-center items-center active:bg-orange-200  ">
                <FormatListBulletedIcon /> List{" "}
              </Button>
              <Button className="py-3 px-2 border rounded-[8px] flex gap-2 h-10 w-[165.5px] text-gray-300 border-gray-300 justify-center items-center active:bg-orange-200  ">
                <MapIcon />
                Map
              </Button>
            </div>
          </div>
          {/* mobile mode */}
          <div className="md:flex md:flex-col md:gap-4 " >


          <div className="flex flex-col w-full rounded-4 gap-[24px] pt-4 pl-4 pr-4 pb-10  md:flex-row md:rounded-[16px]  md:py-[22px] md:bg-white  ">
            <div className="">
              <img
                src={imgpetsitter}
                alt="profild-web"
                className="hidden object-cover md:min-w-[245px] md:min-h-[184px] md:block    "
              />
              <img
                src={imgpetsitter2}
                alt="proflie-mobile"
                className="w-full  md:min-w-full md:min-h-[184px] rounded-[8px] md:hidden "
              />
            </div>

            <div className="  w-full md:flex md:flex-col md:justify-center  ">
              <div className=" flex gap-4  pb-[24px]   ">
                <div className=" md:w-[64px] ">
                  <img
                    src={imgpetsitter3}
                    alt="proflie"
                    className="rounded-full  md:size-[64px] bg-fixed "
                  />
                </div>
                <div className=" w-full flex justify-between md:items-center ">
                  <div className=" ">
                    <p className="text-[18px] leading-[24px] text-nowrap ">
                      Happy House! <br /> By Jame Maison
                    </p>
                  </div>

                  <div className="gap-[8px]  ">
                    {[5].map((rating, index) => (
                      <button
                        className="  gap-[2px] p-2  h-[66px]  flex flex-nowrap  border-gray-200     "
                        key={index}
                        onClick={() => handleRatingChange(rating)}
                      >
                        {renderStars(rating)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]   ">
                <p>
                  {" "}
                  <RoomIcon /> Senanikom, Bangkok
                </p>

                <div className="flex gap-2">
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-green-100 border-green-500 text-green-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Dog
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-pink-100 border-pink-500 text-pink-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Cat
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-blue-100 border-blue-500 text-blue-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Brid
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-yellow-100 border-orange-400 text-orange-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Rabbit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-4 gap-[24px] pt-4 px-4 pb-10  md:flex-row md:rounded-[16px] md:py-[22px]  md:bg-white ">
            <div className="">
              <img
                src={imgpetsitter}
                alt="profild-web"
                className="hidden md:block md:min-w-[245px]   "
              />
              <img
                src={imgpetsitter2}
                alt="proflie-mobile"
                className="w-full  md:min-w-full md:min-h-[184px] rounded-[8px] md:hidden "
              />
            </div>

            <div className="  w-full md:flex md:flex-col md:justify-center ">
              <div className=" flex gap-4  pb-[24px]   ">
                <div className=" md:w-[64px] ">
                  <img
                    src={imgpetsitter3}
                    alt="proflie"
                    className="rounded-full  md:size-[64px] bg-fixed "
                  />
                </div>
                <div className=" w-full flex justify-between md:items-center ">
                  <div className=" ">
                    <p className="text-[18px] leading-[24px] text-nowrap ">
                      Happy House! <br /> By Jame Maison
                    </p>
                  </div>

                  <div className="gap-[8px]   ">
                    {[5].map((rating, index) => (
                      <button
                        className="  gap-[2px] p-2  h-[66px]  flex flex-nowrap  border-gray-200   "
                        key={index}
                        onClick={() => handleRatingChange(rating)}
                      >
                        {renderStars(rating)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]   ">
                <p>
                  {" "}
                  <RoomIcon /> Senanikom, Bangkok
                </p>

                <div className="flex gap-2">
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-green-100 border-green-500 text-green-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Dog
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-pink-100 border-pink-500 text-pink-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Cat
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-blue-100 border-blue-500 text-blue-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Brid
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-yellow-100 border-orange-400 text-orange-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Rabbit
                  </Button>
                </div>
              </div>
            </div>
          </div> 
          <div className="flex flex-col w-full rounded-4 gap-[24px] pt-4 px-4 pb-10  md:flex-row md:rounded-[16px] md:py-[22px] md:bg-white  ">
            <div className="">
              <img
                src={imgpetsitter}
                alt="profild-web"
                className="hidden md:block md:min-w-[245px]   "
              />
              <img
                src={imgpetsitter2}
                alt="proflie-mobile"
                className="w-full  md:min-w-full md:min-h-[184px] rounded-[8px] md:hidden "
              />
            </div>

            <div className="  w-full md:flex md:flex-col md:justify-center ">
              <div className=" flex gap-4  pb-[24px]   ">
                <div className=" md:w-[64px] ">
                  <img
                    src={imgpetsitter3}
                    alt="proflie"
                    className="rounded-full  md:size-[64px] bg-fixed "
                  />
                </div>
                <div className=" w-full flex justify-between md:items-center ">
                  <div className=" ">
                    <p className="text-[18px] leading-[24px] text-nowrap ">
                      Happy House! <br /> By Jame Maison
                    </p>
                  </div>

                  <div className="gap-[8px]   ">
                    {[5].map((rating, index) => (
                      <button
                        className="  gap-[2px] p-2  h-[66px]  flex flex-nowrap  border-gray-200   "
                        key={index}
                        onClick={() => handleRatingChange(rating)}
                      >
                        {renderStars(rating)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]   ">
                <p>
                  {" "}
                  <RoomIcon /> Senanikom, Bangkok
                </p>

                <div className="flex gap-2">
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-green-100 border-green-500 text-green-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Dog
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-pink-100 border-pink-500 text-pink-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Cat
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-blue-100 border-blue-500 text-blue-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Brid
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-yellow-100 border-orange-400 text-orange-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Rabbit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-4 gap-[24px] pt-4 px-4 pb-10  md:flex-row md:rounded-[16px] md:py-[22px] md:bg-white  ">
            <div className="">
              <img
                src={imgpetsitter}
                alt="profild-web"
                className="hidden md:block md:min-w-[245px]   "
              />
              <img
                src={imgpetsitter2}
                alt="proflie-mobile"
                className="w-full  md:min-w-full md:min-h-[184px] rounded-[8px] md:hidden "
              />
            </div>

            <div className="  w-full md:flex md:flex-col md:justify-center ">
              <div className=" flex gap-4  pb-[24px]   ">
                <div className=" md:w-[64px] ">
                  <img
                    src={imgpetsitter3}
                    alt="proflie"
                    className="rounded-full  md:size-[64px] bg-fixed "
                  />
                </div>
                <div className=" w-full flex justify-between md:items-center ">
                  <div className=" ">
                    <p className="text-[18px] leading-[24px] text-nowrap ">
                      Happy House! <br /> By Jame Maison
                    </p>
                  </div>

                  <div className="gap-[8px]   ">
                    {[5].map((rating, index) => (
                      <button
                        className="  gap-[2px] p-2  h-[66px]  flex flex-nowrap  border-gray-200   "
                        key={index}
                        onClick={() => handleRatingChange(rating)}
                      >
                        {renderStars(rating)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]   ">
                <p>
                  {" "}
                  <RoomIcon /> Senanikom, Bangkok
                </p>

                <div className="flex gap-2">
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-green-100 border-green-500 text-green-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Dog
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-pink-100 border-pink-500 text-pink-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Cat
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-blue-100 border-blue-500 text-blue-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Brid
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-yellow-100 border-orange-400 text-orange-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Rabbit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-4 gap-[24px] pt-4 px-4 pb-10  md:flex-row md:rounded-[16px] md:py-[22px] md:bg-white ">
            <div className="">
              <img
                src={imgpetsitter}
                alt="profild-web"
                className="hidden md:block md:min-w-[245px]   "
              />
              <img
                src={imgpetsitter2}
                alt="proflie-mobile"
                className="w-full  md:min-w-full md:min-h-[184px] rounded-[8px] md:hidden "
              />
            </div>

            <div className="  w-full md:flex md:flex-col md:justify-center ">
              <div className=" flex gap-4  pb-[24px]   ">
                <div className=" md:w-[64px] ">
                  <img
                    src={imgpetsitter3}
                    alt="proflie"
                    className="rounded-full  md:size-[64px] bg-fixed "
                  />
                </div>
                <div className=" w-full flex justify-between md:items-center ">
                  <div className=" ">
                    <p className="text-[18px] leading-[24px] text-nowrap ">
                      Happy House! <br /> By Jame Maison
                    </p>
                  </div>

                  <div className="gap-[8px]   ">
                    {[5].map((rating, index) => (
                      <button
                        className="  gap-[2px] p-2  h-[66px]  flex flex-nowrap  border-gray-200   "
                        key={index}
                        onClick={() => handleRatingChange(rating)}
                      >
                        {renderStars(rating)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]   ">
                <p>
                  {" "}
                  <RoomIcon /> Senanikom, Bangkok
                </p>

                <div className="flex gap-2">
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-green-100 border-green-500 text-green-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Dog
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-pink-100 border-pink-500 text-pink-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Cat
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-blue-100 border-blue-500 text-blue-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Brid
                  </Button>
                  <Button className="py-4 px-2 flex gap-[10px] rounded-full border bg-yellow-100 border-orange-400 text-orange-500 text-[16px] leading-6 w-[58px] h-[32px] justify-center items-center ">
                    {" "}
                    Rabbit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          </div>
         

          
        </article>
        <Searchtolistpage />
        
      </main>
      <PaginationSize />
    </section>
  );
};

export default SearchListPage;
