import React, { useState } from "react";
import petSitterAddImgGallery from "../../../assets/svgs/pet-sitter-management/pet-sitter-addImgGallery.svg";

const ImageGalleryForm = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const handleImageChange = (event) => {
    if (event.target.files) {
      const fileArray = Array.from(event.target.files).slice(0, 10);
      const fileURLs = fileArray.map((file) => URL.createObjectURL(file));
      setImageURLs((prevURLs) => [...prevURLs, ...fileURLs]);
      setImages((prevImages) => [...prevImages, ...fileArray]);
    }
  };

  const removeImage = (index) => {
    const newImageURLs = imageURLs.filter((_, i) => i !== index);
    const newImages = images.filter((_, i) => i !== index);
    setImageURLs(newImageURLs);
    setImages(newImages);
  };

  return (
    <div className="p-4">
      <label className="text-[16px] leading-[24px] text-black font-medium flex flex-col gap-[16px]">
        Image Gallery (Maximum 10 images)
        <div className="flex flex-wrap gap-4 justify-start items-center">
          {imageURLs.map((url, index) => (
            <div
              key={index}
              className="relative w-[167px] h-[167px] rounded-[8px] flex items-center bg-primarygray-200 z-0"
            >
              <img src={url} alt={`Preview ${index}`} className="w-full h-full object-cover" />
              <button
                className="absolute top-[-8px] right-[-8px] bg-primarygray-400 text-white rounded-full w-6 h-6 flex justify-center z-10"
                onClick={() => removeImage(index)}
              >
                x
              </button>
            </div>
          ))}
          {imageURLs.length < 10 && (
            <label
              htmlFor="image_gallery"
              className="w-[167px] h-[167px] rounded-[8px] overflow-hidden cursor-pointer flex justify-center items-center"
            >
              <img
                src={petSitterAddImgGallery}
                alt="Upload Image"
                className="w-full h-full object-cover"
              />
            </label>
          )}
          {imageURLs.length < 10 && (
            <input
              type="file"
              name="image_gallery"
              id="image_gallery"
              className="hidden"
              onChange={handleImageChange}
              multiple
              accept="image/*"
            />
          )}
        </div>
      </label>
    </div>
  );
};

export default ImageGalleryForm;
