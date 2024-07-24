import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginOwnerPetPage from "./pages/LoginOwnerPetPage";
import LoginPetSitterPage from "./pages/LoginPetSitterPage";
import RegisterOwnerPetPage from "./pages/RegisterOwnerPetPage";
import RegisterPetSitterPage from "./pages/RegisterPetSitterPage";
import SearchListPage from "./pages/SearchListPage";
import PetSitterProfilePage from "./pages/PetSitterManagement/PetSitterProfilePage";
import PetSitterBookingListPage from "./pages/PetSitterManagement/PetSitterBookingListPage";
import PetSitterBookingDetailPage from "./pages/PetSitterManagement/PetSitterBookingDetailPage";
import PetSitterPaymentOptionPage from "./pages/PetSitterManagement/PetSitterPaymentOptionPage";
import HomePage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import PetSitterDetailPage from "./pages/PetSitterDetailPage";
import Navbar from "./components/navbar/Navbar";
import Chat from "./components/chat/Chat";
import BookingPopup from "./components/BookingPopup";
import BookingHistoryPage from "./pages/BookingHistoryPage"
import ErrorPage from "./pages/ErrorPage";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/petsitter","/auth"];

  const shouldShowNavbar = !hideNavbarPaths.some((path) => 
    location.pathname.startsWith(path)
  );

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login/user" element={<LoginOwnerPetPage />} />
        <Route path="/auth/login/petsitter" element={<LoginPetSitterPage />} />
        <Route path="/auth/register/user" element={<RegisterOwnerPetPage />} />
        <Route
          path="/auth/register/petsitter"
          element={<RegisterPetSitterPage />}
        />
        <Route path="/search" element={<SearchListPage />} />
        <Route path="/search/:id" element={<PetSitterDetailPage />} />
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

        <Route path="/chat" element={<Chat />}/>
        <Route path="/user/booking-history" element={<BookingHistoryPage />} />
        <Route path="*" element={<ErrorPage />}/>

      </Routes>
    </>
  );
}

export default App;
