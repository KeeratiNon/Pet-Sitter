import "./App.css";
import LoginOwnerPetPage from "./pages/LoginOwnerPetPage";
import LoginPetSitterPage from "./pages/LoginPetSitterPage";
import RegisterOwnerPetPage from "./pages/RegisterOwnerPetPage";
import { Routes, Route } from "react-router-dom";
import RegisterPetSitterPage from "./pages/RegisterPetSitterPage";
import SearchListPage from "./pages/SearchListPage";
import PetSitterProfilePage from "./pages/PetSitterManagement/PetSitterProfilePage";
import PetSitterBookingListPage from "./pages/PetSitterManagement/PetSitterBookingListPage";
import PetSitterPaymentOptionPage from "./pages/PetSitterManagement/PetSitterPaymentOptionPage";
import HomePage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/auth/login/user" element={<LoginOwnerPetPage/>} />
        <Route path="/auth/login/petsitter" element={<LoginPetSitterPage/>} />
        <Route path="/auth/register/user" element={<RegisterOwnerPetPage/>} />
        <Route path="/auth/register/petsitter" element={<RegisterPetSitterPage/>} />
      </Routes> */}
      {/* <Homepage /> */}
      <PetSitterDetailPage />
    </>
  );
}

export default App;
