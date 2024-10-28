import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { FiShoppingCart } from "react-icons/fi";
import navbg from "../assets/navbg.png"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // GSAP animation for hover effect
  useEffect(() => {
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  // Track scroll position to change background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 fixed z-20 lg:px-6 transition duration-300 ${
        isScrolled ? "bg-cover bg-center shadow-md" : "shadow-md"
      }`}
      style={{
        backgroundImage: isScrolled ? `url(${navbg})` : "none",
      }}
    >
      <nav className="border-gray-200 py-8">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold text-black">Sof-Scroll</p>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center" id="mobile-menu">
            <a href="#" className="text-gray-700 hover:text-dark nav-item">
              Home
            </a>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-dark nav-item flex items-center">
                Products
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              {/* Dropdown content */}
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-0.4 rounded-md w-32">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Product 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Product 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Product 3
                </a>
              </div>
            </div>

            <a href="#" className="text-gray-700 hover:text-dark nav-item">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-dark nav-item">
              Contact Us
            </a>

            <div className="relative group">
              <FiShoppingCart className="w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
