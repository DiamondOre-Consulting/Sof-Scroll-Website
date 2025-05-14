
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const Hero = () => {
    const images = [
        "https://res.cloudinary.com/disdsorfp/image/upload/v1747222429/WhatsApp_Image_2025-05-14_at_17.03.19_3afabf2f_eqqshw.jpg",
        "https://res.cloudinary.com/disdsorfp/image/upload/v1747222429/WhatsApp_Image_2025-05-14_at_17.03.19_5cbefecc_ufrt82.jpg",
        "https://res.cloudinary.com/disdsorfp/image/upload/v1747222429/WhatsApp_Image_2025-05-14_at_17.03.19_de868e19_qz7vw0.jpg",
    ];

  
    return (
        <div className='md:h-screen'>
          <div className="md:absolute top-0 w-full mb-4">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true, type: 'bullets' }}
                speed={2000}
                loop={true}
                effect="fade"
                className="w-full h-full"
            >
                {images?.map((slide, ind) => (
                    <SwiperSlide key={ind}>
                        <img src={slide} className="w-full" alt={`Slide ${ind + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div>
    );
}

export default Hero;