import React from "react";
import { Link } from "react-router-dom";
import pattern2 from "../assets/pattern2.png";
import WordRotate from "@/components/ui/word-rotate";

const AboutUs = () => {
  return (
    <>




      <div className="relative ">

        <div className="flex flex-col items-center justify-center max-w-3xl px-4 py-10 mx-auto text-center xl md:py-20 md:px-0">
          <h1 className="mb-1 text-5xl md:text-6xl mf">
            <span className="text-dark">About </span>Us
          </h1>
          <div className="w-20 h-1 mx-auto md:w-52 bg-dark"></div>

          <p className="mt-10 mb-4">
            Our tissue paper conversion process transforms large rolls of tissue
            paper into consumer-friendly products like toilet paper, facial
            tissues, paper napkins, and paper towels. Starting with quality raw
            materials—often wood pulp or recycled paper—the pulp is processed
            and formed into continuous paper sheets with optimal moisture
            content. These large sheets are then slit into smaller rolls,
            embossed for texture and softness, and perforated for easy tearing.
            Finally, the tissue is packaged in various formats using automated
            machinery for efficiency and consistency. This sustainable process
            combines innovation with quality to meet diverse consumer needs.
          </p>

          <Link
            to={"/about-us"}
            className="inline-grid w-40 px-10 py-2 overflow-hidden text-center text-black transition-all duration-300 border rounded-full button border-dark hover:bg-dark hover:text-white"
          >
            <span>About US</span>
          </Link>
          <img
            src={pattern2}
            alt=""
            className="absolute left-0 hidden top-10 md:flex "
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
