import Navbar from "../components/navbar/Navbar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Linktologin from "../components/Linktologin";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { useState } from "react";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Header />
      <Search />
      <MainContent />
      <Linktologin />
      <Footer />
    </>
  );
};

export default HomePage;
