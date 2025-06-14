import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "https://res.cloudinary.com/disdsorfp/image/upload/v1747222429/WhatsApp_Image_2025-05-14_at_17.03.19_3afabf2f_eqqshw.jpg",
    "https://res.cloudinary.com/disdsorfp/image/upload/v1747222429/WhatsApp_Image_2025-05-14_at_17.03.19_5cbefecc_ufrt82.jpg",
    "https://res.cloudinary.com/disdsorfp/image/upload/v1747222429/WhatsApp_Image_2025-05-14_at_17.03.19_de868e19_qz7vw0.jpg",
  ];

  return (
    <div className="h-full">
      <div className="flex flex-col relative -top-0 sm:flex-row top-0 w-full mb-4">
        <Link
          to="/products/category/Flavored%20Makhana"
          className="block w-full sm:w-[50%]"
        >
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/disdsorfp/image/upload/v1748948190/WhatsApp_Image_2025-06-03_at_16.14.47_e9e0ce61_h7svbz.jpg"
            alt=""
          />
        </Link>
        <Link
          to="/products/category/Toilet%20Rolls"
          className="block w-full sm:w-[50%]"
        >
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/disdsorfp/image/upload/v1748948189/WhatsApp_Image_2025-06-03_at_16.14.47_ff3c54cf_wfkcic.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
