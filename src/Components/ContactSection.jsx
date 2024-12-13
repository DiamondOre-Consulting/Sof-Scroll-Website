import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdSend } from "react-icons/io";

const ContactSection = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [loadingToastId, setLoadingToastId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.email ||
      !formData.address
    ) {
      return toast.error("All fields are required");
    }
    setLoading(true);
    const toastId = toast.loading("Sending message...");
    setLoadingToastId(toastId);

    const serviceID = "service_cjs69us";
    const templateID = "template_mafjwnv";
    const userID = "bV5Ar2-E2KVthub0u";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        toast.update(toastId, {
          render: "Email sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        setLoading(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        toast.update(toastId, {
          render: "An error occurred while sending the email.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <div
        className={`flex flex-wrap items-center justify-around w-full gap-8  bg-slate-50 ${
          contact ? "sm:py-20 py-12" : "py-6 sm:py-8"
        }`}
      >
        {/* Left Column */}
        <div className="max-w-[34rem] px-4 md:max-w-[35rem] flex items-center">
          <div className="">
            <h1 className="sora-600 leading-[3rem] mb-4 text-[2.1rem] sm:text-[2.6rem] text-dark">
              Partner with Us for Premium Tissue Products
            </h1>

            <p className="sora-400 leading-[1.85rem] text-justify text-[#535760] mb-8">
              We are committed to delivering the highest quality tissue
              products, with a focus on customer satisfaction through innovation
              and excellence at every stage of our manufacturing process. Our
              dedication to sustainability and responsible sourcing is woven
              into each product, benefiting both our customers and the
              environment.
            </p>

            <div className="flex flex-col justify-between  sm:flex-row">
              {/* Address Info */}
              <div className="flex flex-col items-start space-y-3">
                <div className="p-3 rounded-md bg-dark">
                  <FaLocationDot className="text-[1.4rem] text-white" />
                </div>
                <div>
                  <h2 className="text-dark text-[1.3rem] sora-600">Address</h2>
                  <p className="sora-400 text-[1rem] text-[#535760] ">
                  
                    #301,302, 1st floor, Junnasandra, ,
                    <br />
                    Sarjapur Main road
                    <br/>
                    Next to Canara Bank Bangalore -560035 Karnataka, India{" "}
                  </p>
                </div>
              </div>
              {/* Contact Info */}
              <div className="flex flex-col items-start space-y-3">
                <div className="p-3 rounded-md bg-dark">
                  <MdContactPhone className="text-[1.4rem] text-white" />
                </div>
                <div className="sora-400 text-[1rem] text-[#535760] space-y-1">
                  <h2 className="text-dark text-[1.3rem] sora-600 mb-2">
                    Contact
                  </h2>
                  <a href="mailto:info@domain.com" className="block">
                    harshw1@sofsscrrol.com
                  </a>
                  <a href="tel:6207234759" className="block">
                    +91-9980750049{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* <p className="mt-8 text-dark sora-500 text-[1.1rem]">Office Hours: 24/7</p> */}
          </div>
        </div>

        {/* Right Column */}
        <div
          className="max-w-[34rem] sm:p-12 p-6 bg-white shadow-sm rounded-xl  md:max-w-[31rem] mt-10 lg:mt-0"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h3 className="mb-4 text-2xl text-dark sora-600">
            GET IN TOUCH WITH US
          </h3>
          {/* <p className="mb-6 sora-400 text-[#535760]">Feel free to contact with us, guaranteed response within 24 hours</p> */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"
                required
              />
            </div>
            <div className="flex flex-wrap mb-4 -mx-2">
              <div className="w-full px-2 mb-4 lg:w-[60%] lg:mb-0">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"
                  required
                />
              </div>
              <div className="w-full px-2 lg:w-[40%]">
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your city/state..."
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-1 focus:ring-dark"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="relative flex items-center w-full px-6 py-[0.6rem] overflow-hidden font-medium text-center transition-all rounded-md bg-[#2F8B69] group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded bg-dark group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rotate-180 rounded bg-dark group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full rounded-md bg-dark group-hover:translate-x-0"></span>
              <span className="relative flex w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                {" "}
                {loading ? (
                  "Sending..."
                ) : (
                  <span className="flex items-center justify-center w-full gap-2">
                    Send Message <IoMdSend />
                  </span>
                )}
              </span>
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9950802906064!2d77.6834844!3d12.908037499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13004569d5db%3A0x10c63413a4dac9d5!2sKapital%20Seed%209!5e0!3m2!1sen!2sin!4v1732870981044!5m2!1sen!2sin"
        height="400"
        allowfullscreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default ContactSection;
