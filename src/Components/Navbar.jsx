import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { FiShoppingCart } from "react-icons/fi";
import navbg from "../assets/navbg.png";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full fixed z-50 transition duration-300 ${isScrolled ? "bg-cover bg-center shadow-md" : "shadow-md"}`}
      style={{
        backgroundImage: isScrolled ? `url(${navbg})` : "none",
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold text-black">Sof-Scroll</p>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-dark nav-item">Home</Link>
            <Link to="/all-products" className="text-gray-700 hover:text-dark nav-item">Products</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-dark nav-item">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-dark nav-item">Contact Us</Link>
            <Link to="/cart" className="relative">
              <FiShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <div className="absolute bottom-4 -right-3 bg-red-600 w-6 h-6 rounded-full text-white text-center">
                  {cart.length}
                </div>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
