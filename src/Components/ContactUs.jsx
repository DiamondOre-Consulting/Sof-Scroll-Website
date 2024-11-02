import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import contactbg from '../assets/contactusbg.jpg'

const ContactUs = () => {

  useEffect(() => {
    const button = document.querySelector(".button");
    const span = button.querySelector("span");
    const tl = gsap.timeline({ paused: true });

    tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
    tl.set(span, { yPercent: 150 });
    tl.to(span, { duration: 0.2, yPercent: 0 });

    button.addEventListener("mouseenter", () => tl.play(0));
    return () => button.removeEventListener("mouseenter", () => tl.play(0));
  }, []);

  return (
    <div className="relative bg-cover bg-center h-96 " style={{ backgroundImage: `url('${contactbg}')` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Black overlay */}
      <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
        <h2 className="text-2xl md:text-6xl  mf font-semibold mb-4">
          Contact Us for a Better Deal
        </h2>
        <Link
            to={'/contact-us'}
            className="button inline-grid border bg-white border-dark rounded-full py-2 px-10 w-40 text-center text-black overflow-hidden  transition-all duration-300"
          >
            <span>Contact Us</span>
          </Link>
      </div>
    </div>
  );
};

export default ContactUs;
