import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../../components/petSitterManagement/bookingList/BookingListSidebar";
import Navbar from "../../components/petSitterManagement/petSitterProfileForm/PetSitterNavbar";
import PetSitterBooking from "../../components/petSitterManagement/bookingList/PetSitterBooking";
import { SERVER_API_URL } from "../../core/config.mjs";

const PetsitterBookingListPage = () => {
  const [formData, setFormData] = useState({
    profile_image: "",
    first_name: "",
    last_name: "",
  });

  const [bookingsData, setBookingsData] = useState([]);
  const [status, setStatus] = useState("All status");
  const [searchQuery, setSearchQuery] = useState("");

  const getIdFromUrl = () => {
    const url = window.location.href;
    return url.substring(url.lastIndexOf("/") + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const id = getIdFromUrl();
      try {
        // Fetching petsitter profile data
        const profileResponse = await axios.get(
          `${SERVER_API_URL}/petsitter/profile/${id}`
        );
        const profileData = profileResponse.data.data;
        setFormData({
          profile_image: profileData.profile_image || "",
          first_name: profileData.firstname || "",
          last_name: profileData.lastname || "",
        });

        // Fetching bookings data
        const bookingsResponse = await axios.get(
          `${SERVER_API_URL}/petsitter/booking/${id}`,
          {
            params: {
              searchQuery,
              status,
            },
          }
        );
        setBookingsData(bookingsResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery, status]);

  return (
    <div className="flex bg-primarygray-100">
      <Sidebar />
      <div className="flex flex-col gap-[8px] min-w-[1024px] w-full">
        <Navbar formData={formData} />
        <main>
          <div>
            <PetSitterBooking
              bookingsData={bookingsData}
              setStatus={setStatus}
              setSearchQuery={setSearchQuery}
              status={status}
              searchQuery={searchQuery}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PetsitterBookingListPage;