
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

const Hero = () => {
    const images = [
        "https://res.cloudinary.com/disdsorfp/image/upload/v1747222429/WhatsApp_Image_2025-05-14_at_17.03.19_3afabf2f_eqqshw.jpg",
        "https://res.cloudinary.com/disdsorfp/image/upload/v1747222429/WhatsApp_Image_2025-05-14_at_17.03.19_5cbefecc_ufrt82.jpg",
        "https://res.cloudinary.com/disdsorfp/image/upload/v1747222429/WhatsApp_Image_2025-05-14_at_17.03.19_de868e19_qz7vw0.jpg",
    ];

  
    return (
        <div className='h-full'>
          <div className="flex flex-col relative -top-10 sm:flex-row top-0 w-full mb-4">
{/* <Link to=""> */}
       <img className='w-full sm:w-[50%]' src="https://res.cloudinary.com/disdsorfp/image/upload/v1747397507/Group_6_pycf8s.webp" alt="" />
{/* </Link> */}
{/* <Link to=""> */}

       <img className='w-full sm:w-[50%]' src="https://res.cloudinary.com/disdsorfp/image/upload/v1747397496/Group_4_tissue_ymc4ha.webp" alt="" />
{/* </Link> */}
      
        </div>
        </div>
    );
}

export default Hero;