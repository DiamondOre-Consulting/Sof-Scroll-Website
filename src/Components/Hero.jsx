import React, { useEffect } from "react";

import { gsap } from "gsap";

import { Link } from "react-router-dom";

import WordRotate from "@/components/ui/word-rotate";

import tisssuevideo from '../assets/tisssuevideo.mp4'





const Hero = () => {




  return ( 

    <div

      className="relative flex items-center h-screen bg-center bg-cover -top-20 md:top-0"

      

    >

      <video

      src={tisssuevideo}

      autoPlay

      loop

      muted

      className="absolute inset-0 w-full h-full object-cover"

      ></video>



      <div className="container px-4 sm:px-8 mx-auto max-w-[77rem]">

        <div className="max-w-xl text-left text-white">

          {/* <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl mf text-dark">

            Luxury You Can Trust, Softness You Can Feel

          </h1> */}

          {/* <p className="mb-6 text-lg text-gray-700 md:text-xl">

            From everyday use to special moments, our tissues provide the perfect blend of elegance and functionality.

          </p> */}

          <div className="flex items-center justify-center w-[100%]">

          <WordRotate
      className="text-4xl font-bold text-white"
      words={["Sof Scroll ", "Sof-scroll"]}
    />

        </div>

          {/* <Link to={'/all-products'} className="Btn">

          </Link> */}

          <Link

            to={'/all-products'}

            className=" ml-36 inline-grid w-40 px-10 py-2 overflow-hidden text-center text-black transition-all duration-300 border rounded-full button border-dark hover:bg-dark hover:text-white"

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