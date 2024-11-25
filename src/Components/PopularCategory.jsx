import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const PopularCategory = () => {
    const images = [
        { category: "Toilet Rolls", src: "https://img.freepik.com/free-photo/front-view-toilet-paper-rolls-stacked-pyramid-shape_23-2148524951.jpg?t=st=1732510677~exp=1732514277~hmac=e028ca397fe548b297c865b3886da073117900551d12368ae6857e3e5aaf0180&w=360", text: "Toilet Tissue Rolls" },
        { category: "Kitchen Rolls", src: "https://img.freepik.com/free-photo/front-view-toilet-paper-rolls-with-copy-space_23-2148524921.jpg?t=st=1732511719~exp=1732515319~hmac=0bc9136126b7a2d11ebe93e0f1f387b038405c074adcb9602cd7705a35546da5&w=1060", text: "Kitchen Tissue Rolls" },
        { category: "Facial Tissue", src: "https://img.freepik.com/free-photo/nasal-white-handkerchief-arrangement_23-2149091410.jpg?t=st=1732511965~exp=1732515565~hmac=564319dbc9df55c0db5d19415ceefa40c3fc81515fcdf5e86b71a335ce2f55bb&w=996", text: "Facial Tissue" },
        { category: "Hospital Roll", src: "https://img.freepik.com/free-photo/person-using-disinfection-solution_23-2148577782.jpg?t=st=1732512165~exp=1732515765~hmac=89cf7d3814abc67a1be9db5fe61793032f73255e106885d4adfcd4734b882375&w=1380", text: "Hospital Couch Roll" },
        { category: "Paper Towel", src: "https://img.freepik.com/free-photo/girl-wearing-white-pajamas-holding-rolltissue-paper-hand-blue_1150-18848.jpg?t=st=1732512316~exp=1732515916~hmac=df4878a1b8a552b7fd62d9035ce9b9afe601d248d7b48982409d230296410810&w=996", text: "Dispenser Suit" },
    ];

    return (
        <div className="p-4 bg-[#F5F5F5] py-6">
            <h2 className="mb-8 text-5xl font-semibold text-center mf">Popular <span className="text-dark">Categories</span></h2>
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
                        <Link to={`/products/category/${image.category}`} className="relative">
                            <img
                                src={image.src}
                                alt={`Slide ${index + 1}`}
                                className="object-cover w-full h-64 sm:h-[20rem] md:h-[23rem] rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-start justify-center rounded-lg bg-gradient-to-b via-[#00000031] from-[#0000009c] to-transparent ">
                                <h2 className="p-4 text-xl font-semibold text-white">{image.text}</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default PopularCategory;
