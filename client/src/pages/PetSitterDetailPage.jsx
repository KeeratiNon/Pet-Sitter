import Footer from "../components/Footer";
import ImageGallerry from "../components/petsitter-detail/ImageGallerry";
import ContentBottom from "../components/petsitter-detail/ContentBottom";
import ContentTop from "../components/petsitter-detail/ContentTop";
import PetSitterInfoCard from "../components/petsitter-detail/PetSitterInfoCard";

const PetSitterDetailPage = () => {
  return (
    <>
      <ImageGallerry />
      <div className="bg-#FAFAFB  flex flex-col lg:flex-row md:gap-4 lg:px-[80px] lg:pt-0 lg:pb-[80px] justify-center  2xl:justify-evenly ">
        <div className="flex flex-col max-w-[848px]">
          <ContentTop />
          <div className="hidden lg:flex">
            <ContentBottom />
          </div>
        </div>
        <div className="hidden lg:flex ">
          <PetSitterInfoCard />
        </div>
      </div>
      <div className="flex flex-col lg:hidden">
        <PetSitterInfoCard />
        <ContentBottom />
      </div>
      <Footer />
    </>
  );
};

export default PetSitterDetailPage;
