import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ต้องนำเข้ามาเพื่อให้มีสไตล์
import { Box } from "@mui/material";

import dog1 from "../assets/images/dog1.png";
import dog2 from "../assets/images/dog2.png";
import dog3 from "../assets/images/dog3.png";

const ImageGallery = () => {
  return (
    <div className="bg-red-500 sm:py-[40px] flex justify-center overflow-hidden">
      <Box sx={{ width: "100%", maxWidth: 800, margin: "auto" }}>
        <Carousel
          className="custom-carousel" // เพิ่ม className เพื่อใช้ CSS ที่กำหนดเอง
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          interval={3000}
          showStatus={false}
          showArrows={true}
          centerMode={true}
          centerSlidePercentage={60} // ปรับเปอร์เซ็นต์ของสไลด์ตรงกลาง
        >
          <div className="flex justify-center">
            <img src={dog1} alt="Dog 1" className="h-full w-auto" />
          </div>
          <div className="flex justify-center">
            <img src={dog2} alt="Dog 2" className="h-full w-auto" />
          </div>
          <div className="flex justify-center">
            <img src={dog3} alt="Dog 3" className="h-full w-auto" />
          </div>
        </Carousel>
      </Box>
    </div>
  );
};

export default ImageGallery;

// import React from "react";

// import dog1 from "../assets/images/dog1.png";
// import dog2 from "../assets/images/dog2.png";
// import dog3 from "../assets/images/dog3.png";

// const ImageGallerry = () => {
//   return (
//     <div className="bg-red-500 sm:py-[40px]">
//       <div className="flex overflow-hidden justify-center gap-[16px]">
//         <img src={dog1} alt="Dog 1" className="h-[281px] xs:h-auto" />
//         <img src={dog2} alt="Dog 2" className="h-[281px] xs:h-auto" />
//         <img src={dog3} alt="Dog 3" className="h-[281px] xs:h-auto" />
//       </div>
//     </div>
//   );
// };

// export default ImageGallerry;

