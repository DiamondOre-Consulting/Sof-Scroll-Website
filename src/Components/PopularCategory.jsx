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
        { category: "Toilet Rolls", src: "https://m.media-amazon.com/images/I/61gAWx8qoUL._SY450_.jpg", text: "Toilet Tissue Rolls" },
        { category: "Kitchen Rolls", src: "https://m.media-amazon.com/images/I/71pLrJb--mL._SX522_.jpg", text: "Kitchen Tissue Rolls" },
        { category: "Facial Tissue", src: "https://img.freepik.com/free-vector/realistic-tissue-box-mockup_52683-87334.jpg?t=st=1732854132~exp=1732857732~hmac=6206598c7b2d41d117418427cb5a5b6bc007f45d34ddb160a052f1a3fa1679fd&w=740", text: "Facial Tissue" },
        { category: "Hospital Roll", src: "https://m.media-amazon.com/images/I/31lyTISOoDL.jpg", text: "Hospital Couch Roll" },
        // { category: "Paper Towel", src: "https://poornarth.in/public/uploads/products/6/aquarius_70220_dispenser_7.jpg", text: "Dispenser Suit" },
    ];

    return (
        <div className="p-4  py-6" >
            <h2 className="mb-8 text-5xl font-semibold text-center head" data-aos="fade-left">Popular Categories</h2>
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
