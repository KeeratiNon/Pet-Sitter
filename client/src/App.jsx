import "./App.css";
import Homepage from "./pages/Homepage";
import LoginOwnerPetPage from "./pages/LoginOwnerPetPage";
import LoginPetSitterPage from "./pages/LoginPetSitterPage";
import RegisterOwnerPetPage from "./pages/RegisterOwnerPetPage";
import { Routes, Route } from "react-router-dom";
import RegisterPetSitterPage from "./pages/RegisterPetSitterPage";
import SearchListPage from "./pages/SearchListPage";
import PetSitterProfilePage from "./pages/PetSitterManagement/PetSitterProfilePage";
import PetSitterBookingListPage from "./pages/PetSitterManagement/PetSitterBookingListPage";
import PetSitterPaymentOptionPage from "./pages/PetSitterManagement/PetSitterPaymentOptionPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/auth/login/user" element={<LoginOwnerPetPage/>} />
        <Route path="/auth/login/petsitter" element={<LoginPetSitterPage/>} />
        <Route path="/auth/register/user" element={<RegisterOwnerPetPage/>} />
        <Route path="/auth/register/petsitter" element={<RegisterPetSitterPage/>} />
        <Route path="/petsitter/profile" element={<PetSitterProfilePage />} />
        <Route path="/petsitter/booking-list" element={<PetSitterBookingListPage />} />
        <Route path="/petsitter/payment-option" element={<PetSitterPaymentOptionPage />} />
      </Routes>
    </>
  );
}

export default App;
