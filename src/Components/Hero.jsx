import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import herobg from "../assets/tisssuevideo.mp4";

const Hero = () => {
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
    <div className="relative flex items-center h-screen -top-20 md:top-0">
      {/* Video Background */}
      <div className="absolute h-screen bg-black opacity-75"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={herobg}
        autoPlay
        loop
        muted
      ></video>

      {/* Content Overlay */}
      <div className="container relative px-4 sm:px-8 mx-auto max-w-[77rem] text-white">
        <div className="max-w-xl text-left">
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-light">
            Luxury You Can Trust, Softness You Can Feel
          </h1>
          {/* <p className="mb-6 text-lg text-gray-300 md:text-xl">
            From everyday use to special moments, our tissues provide the
            perfect blend of elegance and functionality.
          </p> */}
          <Link
            to={"/all-products"}
            className="inline-grid w-40 px-10 py-2 overflow-hidden text-center text-black transition-all duration-300 border rounded-full button border-dark hover:bg-dark hover:text-white"
          >
            <span>Shop Now</span>
          </Link>
        </div>
      </div>

      {/* Decorative Pattern Image */}
      {/* <img src={pattern1} alt="Pattern" className="absolute right-0 hidden w-48 bottom-20 md:flex" /> */}
    </div>
  );
};

export default Hero;
