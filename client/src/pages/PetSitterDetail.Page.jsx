import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import ImageGallerry from "../components/petsitter-detail/ImageGallerry"
import ContentPetSitterTopLeft from "../components/petsitter-detail/ContentPetSitterTopLeft";

const PetSitterDetailPage = () => {
  return (
    <>
      <Navbar />
      <ImageGallerry />
      <ContentPetSitterTopLeft />
      <Footer />
    </>
  );
};

export default PetSitterDetailPage;
