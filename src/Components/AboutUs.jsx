import React from "react";
import { Link } from "react-router-dom";
import pattern2 from "../assets/pattern2.png";
import TextRevealByWord from "./ui/text-reveal";
import img from "../assets/butterfly.png";

const AboutUs = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center mx-auto md:py-10 text-start xl md:px-0">
          <h1
            data-aos="fade-left"
            className="mb-1 text-5xl mb-4 text-gray-800 md:text-5xl head "
          >
            About US
          </h1>
          {/* <div className="flex gap-1 mb-8 ">
            <div className="w-[2.5rem] h-[3.5px] bg-gradient-to-r from-color3 to-dark rounded-full"></div>
            <div className="w-[7rem] h-[3.5px] bg-gradient-to-r from-color3 to-dark rounded-full"></div>
            <div className="w-[3.5px] h-[3.5px] bg-gradient-to-r from-color3 to-darkrounded-full"></div>
            <div className="w-[3.5px] h-[3.5px] bg-gradient-to-r from-color3 to-dark rounded-full"></div>
          </div> */}

          {/* <img src={img} alt="" className="absolute w-60 right-40 opacity-70" /> */}

          <div className="z-10 w-full px-4 text-justify md:px-10 h-fit">
            <p
              className="text-xl lg:text-4xl xl:text-2xl mf  md:max-w-6xl mx-auto "
              data-aos="fade-right"
            >
              <strong>Sofsscroll</strong> is a premium platform offering
              high-quality products designed to elevate everyday living. Our
              offerings span two essential categories — wellness and hygiene.
              <br />
              <br />
              <strong>Nutzz Magic</strong> brings you delicious,{" "}
              <strong>GLUTEN-FREE</strong> and <strong>VEGAN</strong> flavored
              makhanas, roasted in olive oil and packed with bold flavors — the
              perfect snack for health-conscious lifestyles.
              <br />
              <br />
              Our <strong>Sofsscroll tissue range</strong> is crafted with
              advanced technology for unmatched softness, strength, and
              absorbency. From facial tissues to jumbo rolls, we serve homes,
              hospitality, and institutions with trusted hygiene solutions.
              <br />
              <br />
              At Sofsscroll, we blend taste and care — delivering snacks and
              essentials that prioritize your health, comfort, and everyday
              needs.
            </p>
          </div>
          {/* <p className="mt-10 mb-4 md:text-5xl">
        
          </p> */}

          <Link
            to={"/about-us"}
            className="inline-grid px-4 py-2 mt-10 overflow-hidden text-xl text-center text-white transition-all duration-300 border rounded-full bg-dark w-52 button border-dark hover:bg-dark hover:shadow-lg hover:text-white"
          >
            <span>About US</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
