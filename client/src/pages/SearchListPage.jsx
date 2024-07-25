/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/base";
import Footer from "../components/Footer";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MapIcon from "@mui/icons-material/Map";

import CardSearchList from "../components/searchs/CardSearchList";
import Searchtolistpage from "../components/searchs/Searchtolistpage";
import PaginationSize from "../components/searchs/Pagination";

const SearchListPage = () => {
  const location = useLocation();
  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [selectedPet, setSelectedPet] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState(null);
  const [years, setYears] = useState("");
  const [filters, setFilters] = useState({
    pet_type: "",
    rating: 0,
    experience: "",
    searchText: "",
  });

  useEffect(() => {
    if (location.state) {
      console.log(location.state)
      setFilters({
        pet_type: location.state.selectedPet || "",
        rating: location.state.selectedRatings || 0,
        experience: location.state.years || "",
        searchText: location.state.searchText || "",
      });
    }
  }, [location.state]);
  console.log(filters)
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/search", {
          params: { page, pageSize, ...filters },
        });
        setProfiles(response.data.data);
        setTotal(response.data.total || 0);
      } catch (error) {
        console.error("Error axios profile");
        setTotal(0);
      }
    };

    fetchProfiles();
  }, [page, pageSize, filters]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleClearFilters = () => {
    setSelectedPet([]);
    setSelectedRatings(null);
    setSearchText("");
    setYears("");
    setFilters({
      pet_type: "",
      rating: 0,
      experience: "",
      searchText: "",
    });
  };

  const handleSearch = () => {
    setFilters({ ...filters, searchText: searchText });
  };

  const filteredProfiles = profiles.filter((profile) => {
    const matchType = filters.pet_type
      ? profile.pet_type.includes(filters.pet_type)
      : true;
    const matchRating = filters.rating
      ? profile.rating == filters.rating
      : true;
    const matchExperience = filters.experience
      ? profile.experience === filters.experience
      : true;
    const matchSearchText = filters.searchText
      ? filters.searchText
          .toLowerCase()
          .split(" ")
          .every(
            (word) =>
              (profile.pet_sitter_name &&
                profile.pet_sitter_name.toLowerCase().includes(word)) ||
              (profile.firstname &&
                profile.firstname.toLowerCase().includes(word)) ||
              (profile.district &&
                profile.district.toLowerCase().includes(word)) || 
              (profile.province &&
                profile.province.toLowerCase().includes(word))
              )
          
      : true;
    return matchType && matchRating && matchExperience && matchSearchText;
  });
  return (
    <>
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
            <div className=" md:sticky md:top-0 ">
              <Searchtolistpage
                filters={filters}
                setFilters={setFilters}
                selectedPet={selectedPet}
                setSelectedPet={setSelectedPet}
                selectedRatings={selectedRatings}
                setSelectedRatings={setSelectedRatings}
                years={years}
                setYears={setYears}
                handleClearFilters={handleClearFilters}
                handleSearch={handleSearch}
                setSearchText={setSearchText}
                searchText={searchText}
              />
            </div>
          </article>
          <div className="w-full flex flex-col md:gap-10 md:p-4 ">
            {filteredProfiles.map((profile, index) => (
              <CardSearchList key={index} profiles={profile} />
            ))}
          </div>
        </main>
        <PaginationSize
          page={page}
          count={Math.ceil(total / pageSize)}
          onPageChange={handlePageChange}
        />
      </section>
      <Footer />
    </>
  );
};

export default SearchListPage;
