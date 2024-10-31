import React, { useEffect } from "react";
import { gsap } from "gsap";
import herobg from "../assets/herobg.png";
import pattern1 from '../assets/pattern1.png';

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
    <div
      className="h-screen bg-cover bg-center flex items-center relative"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-xl text-left text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight mf  text-dark">
            Luxury You Can Trust, Softness You Can Feel
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600">
            From everyday use to special moments, our tissues provide the perfect blend of elegance and functionality.
          </p>
          <a
            href="#"
            className="button inline-grid border border-dark rounded-full py-2 px-10 w-40 text-center text-black overflow-hidden hover:bg-dark hover:text-white transition-all duration-300"
          >
            <span>Shop Now</span>
          </a>
        </div>
      </div>
      <img src={pattern1} alt="Pattern" className="absolute bottom-20 right-0 w-48 md:flex hidden" />
    </div>
  );
};

export default Hero;
