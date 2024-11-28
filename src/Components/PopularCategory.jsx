import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularCategory = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Default duration for all animations (in milliseconds)
            offset: 100,
        });
    }, []);

    const images = [
        { category: "Toilet Rolls", src: "https://img.freepik.com/free-photo/front-view-toilet-paper-rolls-stacked-pyramid-shape_23-2148524951.jpg?t=st=1732510677~exp=1732514277~hmac=e028ca397fe548b297c865b3886da073117900551d12368ae6857e3e5aaf0180&w=360", text: "Toilet Tissue Rolls" },
        { category: "Kitchen Rolls", src: "https://img.freepik.com/free-photo/high-angle-three-toilet-paper-rolls_23-2148524918.jpg?t=st=1732641142~exp=1732644742~hmac=6d4c7fadc44f715d4fc91e2befc990d04ee37fc56c584f3da4ee42af9f54641d&w=740", text: "Kitchen Tissue Rolls" },
        { category: "Facial Tissue", src: "https://img.freepik.com/free-photo/nasal-white-handkerchief-arrangement_23-2149091410.jpg?t=st=1732511965~exp=1732515565~hmac=564319dbc9df55c0db5d19415ceefa40c3fc81515fcdf5e86b71a335ce2f55bb&w=996", text: "Facial Tissue" },
        { category: "Hospital Roll", src: "https://img.freepik.com/premium-photo/low-angle-view-staircase-against-sky_1048944-20789415.jpg?w=740", text: "Hospital Couch Roll" },
        { category: "Paper Towel", src: "https://poornarth.in/public/uploads/products/6/aquarius_70220_dispenser_7.jpg", text: "Dispenser Suit" },
    ];

    return (
        <div className="p-4 bg-[#F5F5F5] py-6" >
            <h2 className="mb-8 text-5xl font-semibold text-center mf" data-aos="fade-left">Popular <span className="text-dark">Categories</span></h2>
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
                pagination={false}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                    640: { slidesPerView: 2 }, // Small screens
                    1024: { slidesPerView: 4 }, // Large screens
                }}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/products/category/${image.category}`} className="relative" data-aos="fade-down">
                            <img
                                src={image.src}
                                alt={`Slide ${index + 1}`}
                                className="object-cover w-full h-64 sm:h-[20rem] md:h-[23rem] rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-start justify-center rounded-lg bg-gradient-to-b via-[#00000031] from-[#0000009c] to-transparent ">
                                <h2 className="p-4 text-xl font-semibold text-center text-white">{image.text}</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default PopularCategory;
