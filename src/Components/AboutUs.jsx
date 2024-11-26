import React from "react";
import { Link } from "react-router-dom";
import pattern2 from "../assets/pattern2.png";
import TextRevealByWord from "./ui/text-reveal";

const AboutUs = () => {
  return (
    <>
      <div className="relative ">
        <div className="flex flex-col items-center justify-center py-10 mx-auto text-start xl md:py-10 md:px-0">
          <h1 className="mb-1 text-5xl md:text-6xl mf">
            <span className="text-dark">About </span>Us
          </h1>
          <div className="flex gap-1 mb-8">
            <div className="w-[2.5rem] h-[3.5px] bg-dark rounded-full"></div>
            <div className="w-[7rem] h-[3.5px] bg-dark rounded-full"></div>
            <div className="w-[3.5px] h-[3.5px] bg-dark rounded-full"></div>
            <div className="w-[3.5px] h-[3.5px] bg-dark rounded-full"></div>
          </div>

          <div className="z-10 w-full mf h-fit">
            <TextRevealByWord text=" Our tissue paper conversion process turns large tissue rolls into consumer-ready products such as toilet paper, facial tissues, napkins, and paper towels. Using quality raw materials like wood pulp or recycled paper, the pulp is processed into continuous sheets, which are then slit, embossed, and perforated for convenience. Finally, automated machinery packages the tissue in various formats, ensuring quality and efficiency in a sustainable way to meet consumer needs." />
          </div>
          {/* <p className="mt-10 mb-4 md:text-5xl">
        
          </p> */}

          <Link
            to={"/about-us"}
            className="inline-grid px-4 py-2 overflow-hidden text-xl text-center text-black transition-all duration-300 border rounded-full w-52 button border-dark hover:bg-dark hover:text-white"
          >
            <span>About US</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
