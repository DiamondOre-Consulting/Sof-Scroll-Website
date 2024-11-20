import React from "react";
import { Link } from "react-router-dom";
import LetterPullup from "@/components/ui/letter-pullup";
import tisssuevideo from "../assets/tisssuevideo.mp4";

const Hero = () => {
  return (
    <div className="m-6    rounded-3xl relative flex items-center h-screen bg-center bg-cover -top-20 md:top-0">
      <video
        src={tisssuevideo}
        autoPlay
        loop
        muted
        className="absolute rounded-3xl inset-0 w-full h-full object-cover"
      ></video>

      {/* Black Overlay */}
      <div className="absolute rounded-3xl inset-0 bg-black opacity-20"></div>

      <div className="container relative px-4 sm:px-2  ">
        <div className="text-center text-white">
          {/* <WordPullUp
            className="text-4xl font-bold tracking-[-0.01em] mf text-light dark:text-white md:text-7xl md:leading-[5.5rem]"
            words="Luxury You Can Trust, Softness You Can Feel"
          /> */}
          <LetterPullup
            words={"Luxury You Can Trust, Softness You Can Feel"}
            delay={0.05}
            className="text-4xl font-bold  mf text-white md:text-6xl  text-center "
          />
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
