import React from "react";
import { Link } from "react-router-dom";
import tisssuevideo from "../assets/tissuev.mp4";
import AnimatedText from "./AnimatedText";
import myimg from '../assets/2.png'
import bg from '../assets/bg.mp4'
import fly from '../assets/fly.gif'

const Hero = () => {
  return (
    // <ShineBorder className={"w-full "}>
    <>
    <div className=" flex  items-center h-[100vh]  overflow-hidden bg-center bg-cover ">
      <video
        src={bg}
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      ></video>

      {/* Black Overlay */}
      {/* <div className="absolute bg-black inset-0 h-[100px] opacity-20"></div> */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      {/* <img src={myimg} alt="" className="absolute inset-0 w-full" /> */}

      <div className="container px-4 md:w-[60rem] flex justify-center flex-col items-center mx-auto font-bold text-white text-[2rem] -mt-20 head sm:text-[4rem]  md:text-[4rem] mf sm:px-2 ">
        <AnimatedText text2={"Luxury  You  Can  Trust"}  />
        <AnimatedText text2={"Softness  You  Can  Feel"}  />



      </div>
 
    </div>

    <img src="https://koshertissue.com/images/paper_borders-ai-min.png"   className=" relative  md:-mt-52   z-30 md:block hidden  -mt-44"  alt="" />
   

    </>
    // </ShineBorder>
  );
};

export default Hero;
