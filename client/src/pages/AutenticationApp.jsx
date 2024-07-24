import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Homepage";
import ErrorPage from "./ErrorPage";
import PetSitterProfilePage from "./PetSitterManagement/PetSitterProfilePage";
import PetSitterBookingListPage from "./PetSitterManagement/PetSitterBookingListPage";
import PetSitterBookingDetailPage from "./PetSitterManagement/PetSitterBookingDetailPage";
import PetSitterPaymentOptionPage from "./PetSitterManagement/PetSitterPaymentOptionPage";
import BookingPage from "./BookingPage";
import BookingHistoryPage from "./BookingHistoryPage";
import Chat from "../components/chat/Chat";
import BookingPopup from "../components/BookingPopup";

import Navbar from '../components/navbar/Navbar';

const AutenticationApp = () => {
    const location = useLocation();
    const hideNavbarPaths = ["/petsitter"];
  
    const shouldShowNavbar = !hideNavbarPaths.some((path) => 
      location.pathname.startsWith(path)
    );
  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/popup" element={<BookingPopup />} />
        <Route
          path="/petsitter/profile/:id"
          element={<PetSitterProfilePage />}
        />
        <Route
          path="/petsitter/booking-list/:id"
          element={<PetSitterBookingListPage />}
        />
        <Route
          path="/petsitter/booking/:id"
          element={<PetSitterBookingDetailPage />}
        />
        <Route
          path="/petsitter/payment-option/:id"
          element={<PetSitterPaymentOptionPage />}
        />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/user/booking-history" element={<BookingHistoryPage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
};

export default AutenticationApp;
