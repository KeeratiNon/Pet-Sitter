import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImageGallerry from "../components/petsitter-detail/ImageGallerry";
import ContentTop from "../components/petsitter-detail/ContentTop";
import ContentBottom from "../components/petsitter-detail/ContentBottom";
import PetSitterInfoCard from "../components/petsitter-detail/PetSitterInfoCard";
import Footer from "../components/Footer";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PetSitterDetailPage = () => {
  const { setItem } = useLocalStorage();
  const [profiles, setProfiles] = useState({});
  let { id } = useParams();

  const fetchProfiles = async (id) => {
    try {
      console.log(id);
      const response = await axios.get(`http://localhost:4000/search/${id}`);
      setProfiles(response.data.data);
      console.log(response.data.data);
      setItem("petSitterId", id);
      setItem("petSitterFirstname", response.data.data.firstname);
      setItem("petSitterLastname", response.data.data.lastname);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfiles(id);
  }, []);

  return (
    <>
      {profiles["image_gallery"] && (
        <ImageGallerry profiles={profiles["image_gallery"]} />
      )}
      <div className="bg-[#FAFAFB]  flex flex-col lg:flex-row md:gap-4 lg:px-[80px] lg:pt-0 lg:pb-[80px] justify-center  2xl:justify-evenly ">
        <div className="flex flex-col max-w-[848px]">
          <ContentTop profiles={profiles} />

          <div className="hidden lg:flex">
            <ContentBottom />
          </div>
        </div>
        <div className="hidden lg:flex ">
          {profiles && <PetSitterInfoCard profiles={profiles} />}
        </div>
      </div>
      <div className="flex flex-col lg:hidden">
        <PetSitterInfoCard profiles={profiles} />
        <ContentBottom />
      </div>
      <Footer />
    </>
  );
};

export default PetSitterDetailPage;
