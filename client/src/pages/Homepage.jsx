import Navbar from "../components/navbar/Navbar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Linktologin from "../components/Linktologin";
import Footer from "../components/Footer";
import Search from "../components/Search";



const HomePage = () => {
  return (
    <>
      
      <Navbar />
      <Header />
      <Search />
      <MainContent />
      <Linktologin />
      <Footer />
    </>
  );
};

export default HomePage;
