import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { FiShoppingCart } from "react-icons/fi";
import navbg from "../assets/navbg.png";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Sof-Scroll.png";
import instaIcon from '../assets/instaIcon.svg'
import whatsappIcon from '../assets/whatsappIcon.svg'
import callIcon from '../assets/callIcon.svg'
import { FaInstagram, FaMailchimp, FaWhatsapp } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Navbar = ({ cart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // GSAP animation for hover effect
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".nav-item",
  //     { opacity: 0, y: -20 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.3,
  //       stagger: 0.2,
  //       ease: "power3.out",
  //     }
  //   );
  // }, []);

  // Track scroll position to change background
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="relative flex flex-wrap px-12 items-center justify-between py-2 bg-[#000a12eb]">

        <div className="text-white ">
          <span className=" text-[0.9rem] w-fit underline">Special offer: Get 50% off.</span>

        </div>

        <div className=" flex justify-end gap-2 items-center  text-[0.9rem] text-white">

          <FaWhatsapp className="text-[1.2rem] cursor-pointer" />
          <FaInstagram className="text-[1.2rem] cursor-pointer" />
          <MdMail className="text-[1.2rem] cursor-pointer" />
          <div className=" text-left text-[0.9rem] ">
            9012345678
          </div>

        </div>


      </div>
      <div className="sticky top-0 z-50 w-full shadow-md bg-light ">
        <nav className="container flex items-center text-[0.9rem] justify-between px-4 py-4 mx-auto md:py-6 sm:px-8 md:px-12">
          {/* Logo on the Left Side */}
          {/* <img src={logo} alt="Logo" className="w-[10rem] md:w-40" /> */}
          <p>YOUR LOGO</p>

          <div className="items-center hidden space-x-8 uppercase md:flex">
            <NavLink to="/" label="Home" location={location.pathname} />

            <NavLink
              to="/about-us"
              label="About Us"
              location={location.pathname}
            />
            <NavLink
              to="/all-products"
              label="Products"
              location={location.pathname}
            />
            <NavLink
              to="/contact-us"
              label="Contact Us"
              location={location.pathname}
            />
            <Link to="/cart" className="relative">
              <FiShoppingCart className="w-6 h-6 text-gray-800 hover:text-dark" />
              {cart.length > 0 && (
                <div className="absolute w-5 h-5 text-xs text-center text-white bg-red-600 rounded-full -top-2 -right-2">
                  {cart.length}
                </div>
              )}
            </Link>
          </div>

          {/* Cart Icon and Menu Toggle Button for Small Screens */}
          <div className="flex items-center md:hidden">
            <Link
              to="/cart"
              className="relative mr-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiShoppingCart className="w-6 h-6 text-gray-800 hover:text-dark" />
              {cart.length > 0 && (
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-center text-white bg-red-600 rounded-full -top-2 -right-2">
                  {cart.length}
                </div>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 text-gray-800 hover:text-gray-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-9 w-9" fill="currentColor" viewBox="0 0 20 20">
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
            <div className="absolute left-0 w-full h-screen bg-[#2f2f2f53] backdrop-blur-sm shadow-lg top-full md:hidden">
              <div className="flex flex-col items-center py-10 space-y-4 bg-white shadow-md">
                <NavLink
                  to="/"
                  label="Home"
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
                  to="/all-products"
                  label="Products"
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
    </>
  );
};

// Custom NavLink Component with Active and Hover Effects
const NavLink = ({ to, label, location, onClick }) => (
  <Link
    to={to}
    className={`nav-item text-gray-900 hover:text-dark relative ${location === to ? "font-semibold text-dark" : ""
      }`}
    onClick={onClick}
  >
    {label}
    {/* Hover Underline Effect */}
    <span
      className={`absolute left-0 -bottom-1 w-full h-0.5 bg-dark transform transition-transform duration-300 scale-x-0 ${location === to ? "scale-x-100" : "hover:scale-x-100"
        }`}
    ></span>
  </Link>
);

export default Navbar;
