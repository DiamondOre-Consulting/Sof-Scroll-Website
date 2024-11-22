import React from "react";
import { Link } from "react-router-dom";
import pattern2 from "../assets/pattern2.png";
import TextReveal from "@/components/ui/text-reveal";

const AboutUs = () => {
  return (
    <>
      <div className="relative ">
        <div className="flex flex-col items-center justify-center  px-4 py-10 mx-auto text-start xl md:py-10 md:px-0">
          <h1 className="mb-1 text-5xl md:text-6xl mf">
            <span className="text-dark">About </span>Us
          </h1>
          <div className="w-20 h-1 mx-auto md:w-52 bg-dark"></div>

          <div className="z-10 w-full mf">
            <TextReveal text=" Our tissue paper conversion process turns large tissue rolls into consumer-ready products such as toilet paper, facial tissues, napkins, and paper towels. Using quality raw materials like wood pulp or recycled paper, the pulp is processed into continuous sheets, which are then slit, embossed, and perforated for convenience. Finally, automated machinery packages the tissue in various formats, ensuring quality and efficiency in a sustainable way to meet consumer needs." />
          </div>
          {/* <p className="mt-10 mb-4 md:text-5xl">
        
          </p> */}

          <Link
            to={"/about-us"}
            className="inline-grid w-40 px-10 py-2 overflow-hidden text-center text-black transition-all duration-300 border rounded-full button border-dark hover:bg-dark hover:text-white"
          >
            <span>About US</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
