import { useState, useEffect } from "react";
import axios from "axios";

import { Button } from "@mui/base";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MapIcon from "@mui/icons-material/Map";
import Navbar from "../components/navbar/Navbar";

import CardSearchList from "../components/searchs/CardSearchList";
import Searchtolistpage from "../components/searchs/Searchtolistpage";

import PaginationSize from "../components/searchs/Pagination";

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

  return (
    <>
      <Navbar />
      <section className=" md:bg-gray-100  md:pr-[70px] md:pl-[92px] ">
        {/* web mode*/}
        <div className=" hidden md:block md:pb-6 md:pt-9  ">
          <div className=" flex  justify-between w-full  items-center  ">
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
        </div>
        {/* web mode*/}

        <main className="    md:flex  ">
          <article className=" flex flex-col-reverse items-center justify-center  md:justify-end">
            {/* mobile mode */}
            <div className=" md:hidden ">
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
            <div className=" md:sticky md:top-0">
              <Searchtolistpage />
            </div>
          </article>
          <div className="w-full ">
            <CardSearchList />
          </div>
        </main>
        <PaginationSize />
      </section>
    </>
  );
};

export default SearchListPage;
