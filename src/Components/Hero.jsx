import React, { useEffect } from "react";
import { gsap } from "gsap";
import herobg from "../assets/herobg.png";
import pattern1 from '../assets/pattern1.png';
import { Link } from "react-router-dom";
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "../Components/ui/TextRevealCard";


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
      className="relative flex items-center h-screen bg-center bg-cover -top-20 md:top-0"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="container px-4 sm:px-8 mx-auto max-w-[77rem]">
        <div className="max-w-xl text-left text-white">
          {/* <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mf text-dark">
            Luxury You Can Trust, Softness You Can Feel
          </h1> */}
          {/* <p className="mb-6 text-lg text-gray-700 md:text-xl">
            From everyday use to special moments, our tissues provide the perfect blend of elegance and functionality.
          </p> */}
          <div className="flex items-center justify-center w-[100%]">
      <TextRevealCard
        text="Sof Scroll"
        revealText="Luxury You Can Trust, Softness You Can Feel"
        className="w-96"
      >
        {/* Add optional children here */}
        {/* <TextRevealCardTitle>Exciting Title</TextRevealCardTitle> */}
        {/* <TextRevealCardDescription> */}
          {/* This is an awesome description for the card. */}
        {/* </TextRevealCardDescription> */}
        </TextRevealCard>
        </div>
          {/* <Link to={'/all-products'} className="Btn">
          </Link> */}
          <Link
            to={'/all-products'}
            className="ml-36 inline-grid w-40 px-10 py-2 overflow-hidden text-center text-black transition-all duration-300 border rounded-full button border-dark hover:bg-dark hover:text-white"
          >
            <span>Shop Now</span>
          </Link>
        </div>
      </div>
      <img src={pattern1} alt="Pattern" className="absolute right-0 hidden w-48 bottom-20 md:flex" />
    </div>
  );
};

export default Hero;
