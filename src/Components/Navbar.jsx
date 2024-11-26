import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaChevronDown } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Navbar = ({ cart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // For mobile dropdown
  const location = useLocation();

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null); // Close dropdown too
  };

  return (
    <>
      {/* Top Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between px-12 py-2 bg-dark">
        <div className="text-white">
          <span className="text-[0.9rem] w-fit underline">
            Special offer: Get 50% off.
          </span>
        </div>
        <div className="flex justify-end gap-2 items-center text-[0.9rem] text-white">
          <FaWhatsapp className="text-[1.2rem] cursor-pointer" />
          <FaInstagram className="text-[1.2rem] cursor-pointer" />
          <MdMail className="text-[1.2rem] cursor-pointer" />
          <div className="text-left text-[0.9rem]">9012345678</div>
        </div>
      </div>

      {/* Navbar */}
      <div className="sticky top-0 h-[4.5rem] flex items-center  z-50 w-full shadow-md bg-light">
        <nav className="container flex items-center justify-between px-4 mx-auto sm:px-8 md:px-12">
          {/* Logo */}
          <p className="text-xl font-bold">YOUR LOGO</p>

          {/* Desktop Menu */}
          <div className="items-center hidden h-[4.5rem] space-x-8 uppercase  md:flex justify-center">
            <NavLink to="/" label="Home" location={location.pathname} />
            <NavLink to="/about-us" label="About Us" location={location.pathname} />
            <NavLink
              label="Products"
              location={location.pathname}
              dropdownItems={[
                { to: "/all-products", label: "All products" },
                { to: "/products/category/Toilet Rolls", label: "Toilet Tissue" },
                { to: "/products/category/Kitchen Rolls", label: "Kitchen Tissue" },
                { to: "/products/category/Hospital Roll", label: "Hospital Roll" },
                { to: "/products/category/Facial Tissue", label: "Facial Tissue" },
                { to: "/products/category/Paper Towel", label: "Paper Towel" },
              ]}
            />
            <NavLink to="/contact-us" label="Contact Us" location={location.pathname} />
            <Link to="/cart" className="relative">
              <FiShoppingCart className="w-6 h-6 text-gray-800 hover:text-dark" />
              {cart.length > 0 && (
                <div className="absolute w-5 h-5 text-xs text-center text-white bg-red-600 rounded-full -top-2 -right-2">
                  {cart.length}
                </div>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <Link
              to="/cart"
              className="relative mr-3"
              onClick={closeMobileMenu}
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute left-0 w-full h-screen bg-[#2f2f2f53] backdrop-blur-sm shadow-lg top-full md:hidden">
              <div className="flex flex-col items-center py-10 space-y-4 bg-white shadow-md">
                <NavLink
                  to="/"
                  label="Home"
                  location={location.pathname}
                  onClick={closeMobileMenu}
                />
                <NavLink
                  to="/about-us"
                  label="About"
                  location={location.pathname}
                  onClick={closeMobileMenu}
                />
                <NavLink
                  label="Products"
                  location={location.pathname}
                  dropdownItems={[
                    { to: "/all-products", label: "All products" },
                    { to: "/products/category/Toilet Rolls", label: "Toilet Tissue" },
                    { to: "/products/category/Kitchen Rolls", label: "Kitchen Tissue" },
                    { to: "/products/category/Hospital Roll", label: "Hospital Roll" },
                    { to: "/products/category/Facial Tissue", label: "Facial Tissue" },
                    { to: "/products/category/Paper Towel", label: "Paper Towel" },
                  ]}
                  isMobile={true}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                  onClick={closeMobileMenu}
                />
                <NavLink
                  to="/contact-us"
                  label="Contact Us"
                  location={location.pathname}
                  onClick={closeMobileMenu}
                />
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

const NavLink = ({
  to,
  label,
  location,
  dropdownItems,
  isMobile,
  activeDropdown,
  setActiveDropdown,
  onClick,
}) => {
  const isActive = activeDropdown === label;

  const handleDropdownToggle = () => {
    if (isMobile) {
      setActiveDropdown(isActive ? null : label);
    }
  };

  return (
    <div
      className={`relative item-center flex-col  justify-center h-full flex group ${isMobile && "w-full  text-center"}`}
      onClick={isMobile && dropdownItems ? handleDropdownToggle : null}
    >
      <div
        className={`flex items-center justify-center cursor-pointer text-gray-900 hover:text-dark ${location === to ? "font-semibold text-dark" : ""
          }`}
      >
        <Link
          to={to || "#"}
          onClick={!dropdownItems ? onClick : undefined}
          className="nav-item"
        >
          {label}
        </Link>
        {/* Arrow icon */}
        {dropdownItems && (
          <FaChevronDown
            className={`ml-2 transition-transform duration-300 ${isMobile && isActive
              ? "rotate-180"
              : "rotate-0"
              }`}
          />
        )}
      </div>

      {/* Dropdown */}
      {dropdownItems && (
        <div
          className={`md:absolute overflow-hidden left-0 top-12 z-50 md:w-40 ml-24 md:ml-0 mt-2 bg-white md:bg-light rounded-md ${isMobile
            ? `transition-all duration-200 ease-in-out ${isActive ? "block" : "hidden"
            }`
            : "group-hover:block hidden"
            }`}
        >
          {dropdownItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="block px-4 py-2 text-[0.9rem] text-gray-700 hover:bg-gray-100"
              onClick={onClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
