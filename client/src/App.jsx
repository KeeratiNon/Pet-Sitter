import "./App.css";
import Homepage from "./pages/Homepage"
import LoginOwnerPetPage from "./pages/LoginOwnerPetPage";
import LoginPetSitterPage from "./pages/LoginPetSitterPage";
import RegisterOwnerPetPage from "./pages/RegisterOwnerPetPage";
import { Routes, Route } from "react-router-dom";
import RegisterPetSitterPage from "./pages/RegisterPetSitterPage";
import PetSitterBooking from "./components/PetSitterBooking";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PetSitterBooking/>} />
        <Route path="/auth/login/user" element={<LoginOwnerPetPage/>} />
        <Route path="/auth/login/petsitter" element={<LoginPetSitterPage/>} />
        <Route path="/auth/register/user" element={<RegisterOwnerPetPage/>} />
        <Route path="/auth/register/petsitter" element={<RegisterPetSitterPage/>} />
      </Routes>
    </>
  );
}

export default App;
