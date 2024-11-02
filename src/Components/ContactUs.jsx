import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

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
    <div className="relative bg-cover bg-center h-96 " style={{ backgroundImage: "url('https://st3.depositphotos.com/1010613/32213/i/450/depositphotos_322133934-stock-photo-white-popular-contact-web-icons.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
      <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
        <h2 className="text-6xl  mf font-semibold mb-4">
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
