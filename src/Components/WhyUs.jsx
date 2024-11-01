import React from "react";
import tissue1 from "../assets/tissue1.png";

const WhyUs = () => {
  const categories = [
    {
      title: "New Design",
      image: "https://m.media-amazon.com/images/I/51S2d0i0RRL._AC_UF894,1000_QL80_.jpg", // Replace with actual image
    },
    {
      title: "Renowned for Hygiene",
      image: "https://cdn.pixabay.com/photo/2019/01/30/12/35/toilet-paper-3964492_1280.jpg", // Replace with actual image
    },
    {
      title: "Soft & Stylish",
      image: "https://m.media-amazon.com/images/I/71UFJG7M2SL._AC_UF894,1000_QL80_.jpg", // Replace with actual image
    },
    {
      title: "Convenient Usage",
      image: "https://img.freepik.com/premium-photo/man-hands-wiping-using-white-alcohol-tissue-cleaning-napkin-disinfection-from-virus-bacteria_27634-469.jpg", // Replace with actual image
    },
  ];

  return (
    <div className="bg-light  py-16">
      <div className="text-center">
        <h2 className="text-gray-600 mb-4 text-sm">Why Soft-scroll Tissues?</h2>
        <h1 className="text-3xl md:text-4xl max-w-4xl mx-auto  mf text-black mb-10">
          The Most Stylish, Hygienic & Soft Tissues
        </h1>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-0">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative border border-dark rounded-lg p-4 text-center"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs">
                  {category.description}
                </div> */}
            <h3 className="text-lg font-semibold mt-4 mf">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
