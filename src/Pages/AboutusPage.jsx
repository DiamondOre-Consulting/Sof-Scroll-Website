import React, { useEffect, useState } from "react";
import manufacturingImage from "../assets/tissue1.png"; // Import manufacturing image
import teamImage1 from "../assets/harshawardhan.jpeg"; // Team member image 1
import teamImage2 from "../assets/Alex.jpeg"; // Team member image 2
import teamImage3 from "../assets/yashashrri.jpeg"; // Team member image 3
import patternImage from "../assets/22.png"; // Background pattern image
import BreadCrumbs from "../Components/BreadCrumbs";

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [teamImage1, teamImage2, teamImage3]; // Array of team images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' },
  ];

  return (
    <div className="">
      <BreadCrumbs headText={"About Us"} items={breadcrumbItems} />



      {/* About Us Content */}
      <section className="px-4 mt-24 mb-0">
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Paragraphs */}
          <div className=" p-4 mx-auto text-center">
            <p className="mb-4 text-gray-700">
            Tissue paper conversion is the process of transforming large rolls of tissue paper into convenient consumer products like toilet paper, facial tissue, paper napkins, and paper towels. This process involves specialized machinery and techniques to create products that meet consumer demands for softness, strength, and absorbency.
            </p>
            <p className="mb-4 text-gray-700 float-right">
            The journey begins with high-quality raw materials, typically wood pulp or recycled paper, which undergo refining and processing to achieve the desired properties. A papermaking machine with a fourdrinier wire is then used to create a continuous sheet of tissue. Through various steps, including vacuum suction, press rolls, and drying cylinders, the sheet reaches an optimal moisture level, ready for further conversion.
            </p>
            <p className="mb-4 text-gray-700">
            In the converting facility, the large tissue roll is first slit into smaller rolls, then embossed for added softness and strength. The tissue is perforated for easy tearing and finally packaged into consumer-friendly formats. Using robotic and automated machinery ensures precise and efficient packaging, with materials chosen to balance consumer preferences and sustainability.
            </p>
          </div>
          {/* Right Side: Changing Image */}
        </div>
       
      </section>

      {/* Manufacturing Process Section */}
      <section className="px-4 py-16 bg-light top-[-9rem] md:top-[-15rem]">
        <h2 className="mb-1 text-4xl font-bold text-center md:text-5xl mf">
          Our Manufacturing Process
        </h2>
        <div className="w-40 h-1 mx-auto mb-8 bg-dark"></div>
        <div className="grid grid-cols-1 px-10 md:grid-cols-3 md:gap-8 md:px-20">
          {/* Process Steps */}
          <div className="relative flex flex-col items-center justify-center p-4 transition-all duration-300 transform rounded-full ">
            <div>
              <img
                src="https://www.papertr.com/wp-content/uploads/2021/04/Getting-Into-Tissue-Paper-Manufacturing-Business2-696x428-1.jpg"
                alt="Manufacturing Step"
                className="object-cover p-2 border-2 border-dashed rounded-full h-60 border-dark w-60"
              />
              <div className="absolute z-20 flex items-center justify-center w-16 h-16 pb-2 text-5xl text-center text-white rounded-full mf top-40 bg-dark">
                1
              </div>
            </div>
            <h3 className="mt-4 text-3xl font-semibold mf">Sourcing</h3>
            <p className="mt-2 text-center text-gray-600">
              We source the finest raw materials to ensure the highest quality
              products.
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center p-4 transition-all duration-300 transform rounded-full ">
            <div>
              <img
                src="https://www.shutterstock.com/image-photo/toilet-paper-production-line-worker-260nw-2157905227.jpg"
                alt="Manufacturing Step"
                className="object-cover p-2 border-2 border-dashed rounded-full h-60 border-dark w-60"
              />
              <div className="absolute z-20 flex items-center justify-center w-16 h-16 pb-2 text-5xl text-center text-white rounded-full mf top-40 bg-dark">
                2
              </div>
            </div>
            <h3 className="mt-4 text-3xl font-semibold mf ">Production</h3>
            <p className="mt-2 text-center text-gray-600">
              Our advanced machinery guarantees precision and efficiency in
              production.
            </p>
          </div>
          <div className="relative flex flex-col items-center justify-center p-4 transition-all duration-300 transform rounded-full ">
            <div>
              <img
                src="https://www.papertr.com/wp-content/uploads/2022/02/Ekran-Resmi-2022-02-09-17.50.52-1024x512.png"
                alt="Manufacturing Step"
                className="object-cover p-2 border-2 border-dashed rounded-full h-60 border-dark w-60"
              />
              <div className="absolute z-20 flex items-center justify-center w-16 h-16 pb-2 text-5xl text-center text-white rounded-full mf top-40 bg-dark">
                3
              </div>
            </div>
            <h3 className="mt-4 text-3xl font-semibold mf"> Quality Control</h3>
            <p className="mt-2 text-center text-gray-600">
              Each product undergoes strict quality checks to ensure customer
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-16  ">
        <h2 className="mb-1 text-4xl font-bold text-center text-black md:text-6xl mf">
          Meet Our Team
        </h2>
        <div className="w-40 h-1 mx-auto mb-8 bg-dark"></div>
        <div className="flex flex-col items-center justify-center md:flex-row">
          {/* Founder */}
          <div className="flex flex-col w-[20rem] items-center p-6 m-4 transition-all duration-300 transform bg-white rounded-lg  ">
            <img
              src={teamImage1}
              alt="Harshawardhan Singh"
              className="object-cover size-[10rem] shadow-[0px_0px_30px_#000] border-[7px] border-white mb-4 rounded-full"
            />
            <h3 className="text-[1.2rem] mt-3 font-semibold text-center">
              Harshawardhan Singh
            </h3>
            <p className="font-semibold text-center text-gray-600 text-[1rem]">Founder</p>

          </div>

          {/* Co-Founder */}
          <div className="flex flex-col w-[20rem] items-center p-6 m-4 transition-all duration-300 transform bg-white rounded-lg  ">
            <img
              src={teamImage3}
              alt="Yashashrri H Singh"
              className="object-cover size-[10rem] shadow-[0px_0px_30px_#000] border-[7px] border-white mb-4 rounded-full"
            />
            <h3 className="text-[1.2rem] mt-3 font-semibold text-center">
              Yashashrri H Singh
            </h3>
            <p className="font-semibold text-center text-gray-600 text-[1rem]">Co-Founder</p>

          </div>


          {/* Team Member */}
          <div className="flex flex-col w-[20rem] items-center p-6 m-4 transition-all duration-300 transform bg-white rounded-lg  ">
            <img
              src={teamImage2}
              alt="Alexander Mohandas"
              className="object-cover size-[10rem] shadow-[0px_0px_30px_#000] border-[7px] border-white mb-4 rounded-full"
            />
            <h3 className="text-[1.2rem] mt-3 font-semibold text-center">
              Alexander Mohandas
            </h3>
            <p className="font-semibold text-center text-gray-600 text-[1rem]">Senior Team Member</p>

          </div>

        </div>
      </section>

    
    </div>
  );
};

export default AboutUs;
