// ContactUsPage.js
import React, { useEffect } from "react";
import contactbg from '../assets/contactusbg.jpg'

const ContactUsPage = () => {

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
  return (
    <div className="pt-20 md:pt-24">
      <div
        className="relative bg-cover bg-center h-60 md:h-96 "
        style={{ backgroundImage: `url('${contactbg}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
        {/* Black overlay */}
        <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
          <h2 className="text-4xl md:text-7xl  mf font-semibold mb-4">
            Contact Us 
          </h2>
          <div className="mx-auto w-40 h-1 bg-white"></div>
          {/* <Link
            to={"/contact-us"}
            className="button inline-grid border bg-white border-dark rounded-full py-2 px-10 w-40 text-center text-black overflow-hidden  transition-all duration-300"
          >
            <span>Contact Us</span>
          </Link> */}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full h-screen ">
        {/* Map Section */}
        <div className="lg:w-1/2 w-full h-80 lg:h-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.136995893629!2d77.59456241595167!3d13.03480809226761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzA1LjMiTiA3N8KwMzUnNDkuNiJF!5e0!3m2!1sen!2sin!4v1679294189473"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Information & Form Section */}
        <div className="lg:w-1/2 w-full p-6 lg:p-12">
          {/* Contact Info */}
          <div className="flex justify-between space-x-4 mb-8">
            <div className="flex flex-col items-start justify-center ">
              <svg
                class="h-8 w-8 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />{" "}
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              <div className="flex flex-col mt-4">
                <h2 className="text-sm font-semibold">PHONE</h2>
                <p className="text-gray-600">08043462000</p>
              </div>
            </div>
            <div className="flex flex-col items-start ">
              <svg
                class="h-8 w-8 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="11" r="3" />{" "}
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <div className="mt-4">
                <h2 className="text-sm font-semibold">ADDRESS</h2>
                <p className="text-gray-600">Noida</p>
              </div>
            </div>
            <div className="flex flex-col items-start ">
              <svg
                class="h-8 w-8 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />{" "}
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div className="mt-4">
                <h2 className="text-sm font-semibold">EMAIL</h2>
                <p className="text-gray-600">sof-scroll@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-4 mf text-gray-800">
              GET IN TOUCH WITH US
            </h3>
            <form className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your name..."
                className="border p-2 focus:outline-none focus:ring-2 focus:ring-dark rounded"
              />
              <input
                type="email"
                placeholder="Enter your email..."
                className="border p-2 focus:outline-none focus:ring-2 focus:ring-dark rounded"
              />

              <input
                type="text"
                placeholder="Mobile"
                className="border p-2 focus:outline-none focus:ring-2 focus:ring-dark rounded"
              />

              <input
                type="text"
                placeholder="City/State"
                className="border p-2 focus:outline-none focus:ring-2 focus:ring-dark rounded"
              />
              <textarea
                placeholder="Add your message"
                className="border p-2 focus:outline-none focus:ring-2 focus:ring-dark rounded col-span-2 h-32"
              ></textarea>
              <button
                type="submit"
                className="col-span-2 bg-dark text-white py-2 px-4 rounded  transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
