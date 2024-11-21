import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import contactbg from '../assets/contactusbg.jpg'
import ContactSection from "./ContactSection";
import ShineBorder from "./ui/shine-border";

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
    // <div className="relative bg-center bg-cover h-96 " style={{ backgroundImage: `url('${contactbg}')` }}>
    //   <div className="absolute inset-0 bg-black opacity-70"></div> {/* Black overlay */}
    //   <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
    //     <h2 className="mb-4 text-2xl font-semibold md:text-6xl mf">
    //       Contact Us for a Better Deal
    //     </h2>
    //     <Link
    //         to={'/contact-us'}
    //         className="inline-grid w-40 px-10 py-2 overflow-hidden text-center text-black transition-all duration-300 bg-white border rounded-full button border-dark"
    //       >
    //         <span>Contact Us</span>
    //       </Link>
    //   </div>
    // </div>

    <div className="flex flex-col items-center justify-center w-full py-10 rounded-md  bg-slate-50">

      <h2 className="mx-auto text-4xl font-semibold text-gray-700 md:text-5xl mf ">
        Contact Us
      </h2>
      <ContactSection contact={false} />
    </div>
  );
};

export default ContactUs;
