import React, { useEffect } from "react";
import { FaBolt, FaShieldAlt, FaCheckCircle, FaRocket, FaHandsHelping, FaHeadset } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGlobeAmericas } from "react-icons/fa";

const OurStrength = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  const strengths = [
    { icon: <FaBolt size={40} />, label: "High productivity", time: 1000 },
    { icon: <FaShieldAlt size={40} />, label: "Strict quality inspection", time: 1300 },
    { icon: <FaCheckCircle size={40} />, label: "Professional service", time: 1600 },
    { icon: <FaRocket size={40} />, label: "Quick reply", time: 1900 },
    // { icon: <FaHandsHelping size={40} />, label: "OEM & ODM", time: 2200 },
    { icon: <FaHeadset size={40} />, label: "Customer service 24 hours online", time: 2500 },
    { icon: <FaGlobeAmericas size={40} />, label: "Global Expotter", time: 2500 },


  ];

  return (
    <div>
      <div className="pt-10 ">
        <h1 className="mb-10 text-3xl  text-center text-gray-800 md:text-5xl head">Our Strengths</h1>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-2 pb-20 text-center">
            {strengths.map((strength, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration={strength.time}
                className="flex flex-col items-center justify-around w-40 transition-transform duration-300 hover:scale-110"
              >
                <div className="p-2 mb-2 text-white transition-transform duration-300 transform rounded-full bg-dark hover:scale-125">
                  {strength.icon}
                </div>
                <p className="text-lg font-semibold text-gray-700 transition-colors duration-300 hover:text-dark">
                  {strength.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
