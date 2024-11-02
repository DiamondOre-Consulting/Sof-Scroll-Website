// Footer.js
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/Sof-Scroll.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-gray-700 pt-8 pb-4 mt-8">
      <div className=" px-4 px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-20  pb-8">
          {/* Logo and Contact Info */}
          <div>
            <img src={logo} alt="Sof-Scroll Logo" className="w-52 mb-4" />

            {/* Navigation Links */}
            <div>
              {/* <h4 className="font-semibold mb-4">Quick Links</h4> */}
              <ul className="flex justify-between items-center  mt-10 mf text-center  text-sm  md:text-xl">
                <li>
                  <Link  to={'/'} className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={'/about-us'} className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={'/contact-us'} className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to={'/cart'} className="hover:underline">
                    My Cart
                  </Link>
                </li>
                <li>
                  <Link to={'/all-products'} className="hover:underline">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:ml-40">
            <p className="font-semibold text-xl mf">Address:</p>
            <p className="text-md">
              Lorem, ipsum dolor.
              <br />
              Lorem ipsum dolor sit amet consectetur.,
              <br />
              Noida (India)
            </p>
            <p className="font-semibold mt-2 text-xl mf">Phone:</p>
            <p className="text-md">011-41084140, 011-41605200</p>
            <p className="font-semibold mt-2 text-xl mf">Email:</p>
            <p className="text-md">sof-scroll@gmail.com</p>

            {/* Social Media Icons */}
           
          </div>

          {/* Customer Service */}
          {/* <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-4 pb-2 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2014, Sof-Scroll, All Rights Reserved</p>
          <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FaInstagram size={20} />
              </a>
            </div>
        </div>

        {/* Designed by Section */}
        <div className="border-t border-gray-300 pt-4 text-sm text-gray-600 text-center">
          <p>
            Designed & Developed by{" "}
            <a
              href="https://www.doclabz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark underline"
            >
              DOC-LABZ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
