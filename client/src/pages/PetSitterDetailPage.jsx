import Footer from "../components/Footer";
import ImageGallerry from "../components/petsitter-detail/ImageGallerry";
import ContentBottom from "../components/petsitter-detail/ContentBottom";
import ContentTop from "../components/petsitter-detail/ContentTop";
import PetSitterInfoCard from "../components/petsitter-detail/PetSitterInfoCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PetSitterDetailPage = () => {
  const [profiles, setProfiles] = useState({});
  const fetchProfiles = async (id) => {
    try {
      console.log(id)
      const response = await axios.get(
        `http://localhost:4000/search/${id}`
      );
      setProfiles(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.error(error);
    }
  };
  let { id } = useParams()
  useEffect(() => {
   

    fetchProfiles(id);
  }, []);
  return (
    <>
      {profiles["image_gallery"]&&<ImageGallerry profiles={profiles["image_gallery"]}/>}
      <div className="bg-#FAFAFB  flex flex-col lg:flex-row md:gap-4 lg:px-[80px] lg:pt-0 lg:pb-[80px] justify-center  2xl:justify-evenly ">
        <div className="flex flex-col max-w-[848px]">
            <ContentTop  profiles={profiles} />

          <div className="hidden lg:flex">
            <ContentBottom />
          </div>
        </div>
        <div className="hidden lg:flex ">
        {profiles&&<PetSitterInfoCard profiles={profiles}/>}
        </div> 
      </div>
      <div className="flex flex-col lg:hidden">
        <PetSitterInfoCard profiles={profiles}/>
        <ContentBottom />
      </div>
      <Footer />
    </>
  );
};

export default PetSitterDetailPage;
