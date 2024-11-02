import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { FiShoppingCart } from "react-icons/fi";
import navbg from "../assets/navbg.png";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Sof-Scroll.png";

const Navbar = ({ cart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed z-50 transition duration-300 ${
        isScrolled ? "bg-cover bg-center shadow-md" : "shadow-md"
      }`}
      style={{
        backgroundImage: isScrolled ? `url(${navbg})` : "none",
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo on the Left Side */}
        <img src={logo} alt="Logo" className="w-24 md:w-40" />

        {/* Right Side - Links and Cart Icon */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" label="Home" location={location.pathname} />
          <NavLink
            to="/all-products"
            label="Products"
            location={location.pathname}
          />
          <NavLink to="/about-us" label="About" location={location.pathname} />
          <NavLink
            to="/contact-us"
            label="Contact Us"
            location={location.pathname}
          />
          <Link to="/cart" className="relative">
            <FiShoppingCart className="w-6 h-6 text-gray-700 hover:text-dark" />
            {cart.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full text-white text-xs text-center">
                {cart.length}
              </div>
            )}
          </Link>
        </div>

        {/* Cart Icon and Menu Toggle Button for Small Screens */}
        <div className="md:hidden flex items-center">
          <Link
            to="/cart"
            className="relative mr-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiShoppingCart className="w-6 h-6 text-gray-700 hover:text-dark" />
            {cart.length > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full text-white text-xs text-center">
                {cart.length}
              </div>
            )}
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <NavLink
                to="/"
                label="Home"
                location={location.pathname}
                onClick={() => setIsMenuOpen(false)}
              />
              <NavLink
                to="/all-products"
                label="Products"
                location={location.pathname}
                onClick={() => setIsMenuOpen(false)}
              />
              <NavLink
                to="/about-us"
                label="About"
                location={location.pathname}
                onClick={() => setIsMenuOpen(false)}
              />
              <NavLink
                to="/contact-us"
                label="Contact Us"
                location={location.pathname}
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

// Custom NavLink Component with Active and Hover Effects
const NavLink = ({ to, label, location, onClick }) => (
  <Link
    to={to}
    className={`nav-item text-gray-700 hover:text-dark relative ${
      location === to ? "font-semibold text-dark" : ""
    }`}
    onClick={onClick}
  >
    {label}
    {/* Hover Underline Effect */}
    <span
      className={`absolute left-0 -bottom-1 w-full h-0.5 bg-dark transform transition-transform duration-300 scale-x-0 ${
        location === to ? "scale-x-100" : "hover:scale-x-100"
      }`}
    ></span>
  </Link>
);

export default Navbar;
