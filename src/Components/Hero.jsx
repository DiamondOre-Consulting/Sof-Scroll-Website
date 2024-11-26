import React from "react";
import { Link } from "react-router-dom";
import tisssuevideo from "../assets/tissuev.mp4";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    // <ShineBorder className={"w-full "}>
    <div className=" flex  items-center h-[85vh] relative  overflow-hidden bg-center bg-cover ">
      <video
        src={tisssuevideo}
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      ></video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="container px-4 md:w-[60rem] mx-auto font-bold text-white text-[2rem] sm:text-[4rem]  md:text-[5rem] mf sm:px-2">
        <AnimatedText text1={"Luxury You Can Trust, Softness You Can Feel"} />


      </div>

    </div>
    // </ShineBorder>
  );
};

export default Hero;
