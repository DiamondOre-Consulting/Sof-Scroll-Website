import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tissue1 from "../assets/tissue1.png";

const PopularCategories = () => {
  const categories = [
    {
      name: "Soft Tissue Pack",
      description: "Premium soft tissues",
      image: tissue1,
    },
    {
      name: "Eco-Friendly Tissue",
      description: "100% biodegradable tissues",
      image: tissue1,
    },
    {
      name: "Family Pack",
      description: "Extra-large for family needs",
      image: tissue1,
    },
    {
      name: "Travel Tissue Pack",
      description: "Convenient for on-the-go",
      image: tissue1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full px-6 py-12">
      <h2 className="md:text-4xl font-bold text-center head mb-8">Our Categories</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="p-4">
            <div className="relative overflow-hidden rounded-sm shadow-lg transform transition duration-500 hover:scale-105">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full text-white">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-sm">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-white hover:text-white"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-white hover:text-white"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export default PopularCategories;
