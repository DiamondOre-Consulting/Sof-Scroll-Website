import React from "react";
import tissue1 from "../assets/tissue1.png";
import BackgroundGradient from '../Components/ui/Card'

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
    <div className="py-16 m-6 rounded-3xl bg-[#CDC1FF]">
      <div className="text-center">
        <h2 className="mb-4 text-sm text-gray-600">Why Soft-scroll Tissues?</h2>
        <h1 className="max-w-4xl mx-auto mb-10 text-3xl text-black md:text-4xl mf">
          The Most Stylish, Hygienic & Soft Tissues
        </h1>
      </div>
      
      <div className="grid grid-cols-1 gap-10 px-6 mx-auto w-fit md:grid-cols-2 md:px-0">
        {categories.map((category, index) => (
          <BackgroundGradient>        
            <div
            key={index}
            className="relative bg-white  p-4 text-center max-w-[38rem] border rounded-3xl border-dark"
          >
            <img
              src={category.image}
              alt={category.title}
              className="object-cover w-full h-[18rem] mb-4 rounded-lg"
            />
            {/* <div className="absolute text-xs text-gray-400 transform -translate-x-1/2 top-4 left-1/2">
                  {category.description}
                </div> */}
            <h3 className="mt-4 text-lg font-semibold mf">{category.title}</h3>
          </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
