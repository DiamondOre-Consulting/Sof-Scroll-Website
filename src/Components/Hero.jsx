import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import AnimatedText from "./AnimatedText";
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
    <div className=" flex  items-center h-[50vh] md:h-[100vh]  overflow-hidden bg-center bg-cover ">
      <video
        src="https://res.cloudinary.com/dmpkp9ux2/video/upload/v1750394018/M-T_j8z4fy.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-[50vh] md:h-full"
      ></video>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container px-4 md:w-[60rem] flex justify-center flex-col items-center mx-auto font-bold text-white text-[2rem] -mt-40 head sm:text-[4rem]  md:text-[4rem] mf sm:px-2 ">
        <AnimatedText text2={"Luxury  You  Can  Trust"} />
        <AnimatedText text2={"Softness  You  Can  Feel"} />
      </div>
    </div>
    // <div className="h-full">
    //   <div className="flex flex-col relative -top-0 sm:flex-row top-0 w-full mb-4">
    //     <Link
    //       to="/products/category/Flavored%20Makhana"
    //       className="block w-full sm:w-[50%]"
    //     >
    //       <img
    //         className="w-full h-full object-cover"
    //         src="https://res.cloudinary.com/disdsorfp/image/upload/v1748948190/WhatsApp_Image_2025-06-03_at_16.14.47_e9e0ce61_h7svbz.jpg"
    //         alt=""
    //       />
    //     </Link>
    //     <Link
    //       to="/products/category/Toilet%20Rolls"
    //       className="block w-full sm:w-[50%]"
    //     >
    //       <img
    //         className="w-full h-full object-cover"
    //         src="https://res.cloudinary.com/disdsorfp/image/upload/v1748948189/WhatsApp_Image_2025-06-03_at_16.14.47_ff3c54cf_wfkcic.jpg"
    //         alt=""
    //       />
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Hero;
