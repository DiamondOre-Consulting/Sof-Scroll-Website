import React from "react";
import { FaBolt, FaShieldAlt, FaCheckCircle, FaRocket, FaHandsHelping, FaHeadset } from "react-icons/fa";

const OurStrength = () => {
  const strengths = [
    { icon: <FaBolt size={40} />, label: "High productivity" },
    { icon: <FaShieldAlt size={40} />, label: "Strict quality inspection" },
    { icon: <FaCheckCircle size={40} />, label: "Professional service" },
    { icon: <FaRocket size={40} />, label: "Quick reply" },
    { icon: <FaHandsHelping size={40} />, label: "OEM & ODM" },
    { icon: <FaHeadset size={40} />, label: "Customer service 24 hours online" },
  ];

  return (
    <div>
      <div className="bg-gray-100 pt-10">
        <h1 className="text-gray-700 text-6xl font-bold text-center mb-10 mf">Our Strengths</h1>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center pb-20">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-around w-40 transition-transform duration-300 hover:scale-110"
              >
                <div className="mb-2 text-dark p-2 rounded-full  transition-transform duration-300 transform hover:scale-125">
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
