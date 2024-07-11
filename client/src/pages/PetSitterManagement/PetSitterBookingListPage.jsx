import React, { useState } from "react";

import Sidebar from "../../components/petSitterManagement/bookingList/BookingListSidebar";
import Navbar from "../../components/petSitterManagement/petSitterProfileForm/PetSitterNavbar";
import BookingList from "../../components/PetSitterBooking"

const PetsitterBookingListPage = () => {
  return (
    <div className="flex bg-primarygray-100">
      {/*-- PAGE BG CONTAINER -- */}
      <Sidebar />
      <div className="flex flex-col gap-[8px] min-w-[1024px] w-full">
        {/*-- Navbar AND Booking List -- */}
        <Navbar />
        <main>
              <div>
                <BookingList/>
            </div>
        </main>
      </div>
    </div>
  );
};

export default PetsitterBookingListPage;
