import React from 'react';
import PetSitterAddImgGallery from "../../../../assets/svgs/pet-sitter-management/pet-sitter-addImgGallery.svg";

const ImageGalleryForm = ({ image_gallery, handleImageUpload, handleRemoveImage }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <label className="text-[16px] leading-[24px] text-black font-medium">
        Image Gallery (Maximum 10 image_gallery)
      </label>
      <div className="container mx-auto">
        <div className="flex gap-[24px] flex-wrap">
          {image_gallery.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`upload-${index}`} className="w-[167px] h-[167px] rounded-[8px] flex justify-center items-center object-contain bg-primarygray-200" />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute w-[24px] h-[24px] top-[-5px] right-[-5px] bg-primarygray-400 text-white rounded-full"
              >
                &times;
              </button>
            </div>
          ))}
          {image_gallery.length < 10 && (
            <label className="cursor-pointer">
              <img
                src={PetSitterAddImgGallery}
                alt="Add"
                className="w-[167px] h-[167px] inline-block"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryForm;

