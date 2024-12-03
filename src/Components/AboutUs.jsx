import React from "react";
import { Link } from "react-router-dom";
import pattern2 from "../assets/pattern2.png";
import TextRevealByWord from "./ui/text-reveal";
import img from '../assets/butterfly.png'

const AboutUs = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center mx-auto md:py-10 text-start xl md:px-0">
          <h1 data-aos="fade-left" className="mb-1 text-5xl text-gray-800 md:text-6xl mf ">
            About US
          </h1>
          <div className="flex gap-1 mb-8 ">
            <div className="w-[2.5rem] h-[3.5px] bg-gradient-to-r from-color3 to-dark rounded-full"></div>
            <div className="w-[7rem] h-[3.5px] bg-gradient-to-r from-color3 to-dark rounded-full"></div>
            <div className="w-[3.5px] h-[3.5px] bg-gradient-to-r from-color3 to-darkrounded-full"></div>
            <div className="w-[3.5px] h-[3.5px] bg-gradient-to-r from-color3 to-dark rounded-full"></div>
          </div>

          <img src={img} alt="" className="absolute w-60 right-40 opacity-70" />

          <div className="z-10 w-full px-4 h-fit">
            <p className="text-xl lg:text-4xl xl:text-3xl" data-aos="fade-right">
              Our tissue paper conversion process turns large tissue rolls into consumer-ready products such as toilet paper, facial tissues, napkins, and paper towels. Using quality raw materials like wood pulp or recycled paper, the pulp is processed into continuous sheets, which are then slit, embossed, and perforated for convenience. Finally, automated machinery packages the tissue in various formats, ensuring quality and efficiency in a sustainable way to meet consumer needs.
            </p>

          </div>
          {/* <p className="mt-10 mb-4 md:text-5xl">
        
          </p> */}

          <Link
            to={"/about-us"}
            className="inline-grid px-4 py-2 mt-10 overflow-hidden text-xl text-center text-white transition-all duration-300 border rounded-full bg-gradient-to-r from-color3 to-dark w-52 button border-dark hover:bg-dark hover:text-white"
          >
            <span>About US</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
