import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/100",
    text: "This service is amazing! I highly recommend it to anyone who wants quality work.",
    title: "CEO, ExampleCorp",
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/100",
    text: "Excellent experience! The team is very professional and attentive.",
    title: "Marketing Director, CompanyX",
  },
  {
    name: "Alice Johnson",
    image: "https://via.placeholder.com/100",
    text: "Great service and quality! I’m extremely happy with the results.",
    title: "Product Manager, TechSolutions",
  },
  {
    name: "Michael Brown",
    image: "https://via.placeholder.com/100",
    text: "The best investment I've ever made for my company.",
    title: "CTO, InnovationsHub",
  },
  {
    name: "Sarah Lee",
    image: "https://via.placeholder.com/100",
    text: "Wonderful service and great attention to detail.",
    title: "Founder, CreativeWorks",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-light py-20 px-6 relative">
      <h2 className="text-center text-5xl font-semibold text-gray-700 mb-12 mf">
        What Our Clients Say
      </h2>
      <div className="absolute right-28 top-28 flex">
        <button
          onClick={goToPrevious}
          className="border border-1 border-black p-2 mr-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg
            className="h-8 w-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="border border-1 border-black p-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg
            className="h-8 w-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 4))}%)`, // Adjust for responsive slides
            width: `${testimonials.length * (100 / (window.innerWidth < 768 ? 1 : 4))}%`, // Adjust width based on screen size
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-none ${window.innerWidth < 768 ? "w-full" : "w-1/4"} p-4 bg-white rounded-lg shadow-lg text-center mx-2`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{testimonial.title}</p>
              <p className="text-gray-600 mt-4">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
