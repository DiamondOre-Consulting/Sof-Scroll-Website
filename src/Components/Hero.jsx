import React from "react";
import { Link } from "react-router-dom";
import LetterPullup from "@/components/ui/letter-pullup";
import tisssuevideo from "../assets/tisssuevideo.mp4";
import ShineBorder from "./ui/shine-border";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <ShineBorder className={"w-full"}>
      <div className=" flex w-full items-center h-[85vh] overflow-hidden bg-center bg-cover ">
        <video
          src={tisssuevideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full "
        ></video>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container px-4 md:w-[60rem] mx-auto font-bold text-white text-[2rem] sm:text-[4rem]  md:text-[5rem] mf sm:px-2">
          <AnimatedText text1={"Luxury You Can Trust, Softness You Can Feel"} />


        </div>

      </div>
    </ShineBorder>
  );
};

export default Hero;
