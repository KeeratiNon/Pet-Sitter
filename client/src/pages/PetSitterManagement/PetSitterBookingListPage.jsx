import React, { useState } from "react";

import Sidebar from "../../components/petSitterManagement/petSitterProfileForm/PetProfileSidebar";
import Navbar from "../../components/petSitterManagement/petSitterProfileForm/PetSitterNavbar";

const PetsitterBookingListPage = () => {
  return (
    <div className="flex bg-primarygray-100">
      {/*-- PAGE BG CONTAINER -- */}
      <Sidebar />
      <div className="flex flex-col gap-[8px] min-w-[1024px] w-full">
        {/*-- Navbar AND Booking List CONTAINER -- */}
        <Navbar />
      </div>
    </div>
  );
};

export default PetsitterBookingListPage;
