import React, { useEffect, useState } from "react";
import manufacturingImage from "../assets/tissue1.png"; // Import manufacturing image
import teamImage1 from "../assets/harshawardhan.jpeg"; // Team member image 1
import teamImage2 from "../assets/Alex.jpeg"; // Team member image 2
import teamImage3 from "../assets/yashashrri.jpeg"; // Team member image 3
import patternImage from "../assets/22.png"; // Background pattern image
import BreadCrumbs from "../Components/BreadCrumbs";
import yashi from "../assets/yashi.jpeg";

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

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About Us" }];

  return (
    <div className="">
      {/* <BreadCrumbs items={breadcrumbItems} /> */}

      {/* About Us Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6  px-10 items-center">
        <div className="p-4 text-start text-justify">
          <h1 className="font-bold text-gray-800 text-4xl mb-3">
            Know More About Me
          </h1>
          <div className="flex gap-1 mb-8">
            <div className="w-[9.5rem] h-[3.5px] bg-dark rounded-full"></div>
            <div className="w-[4rem] h-[3.5px] bg-dark rounded-full"></div>
            <div className="w-[3.5px] h-[3.5px] bg-dark rounded-full"></div>
          </div>
          <p className="mb-4 text-gray-700">
            Our company specializes in tissue paper conversion, turning large
            rolls into essential products like toilet paper, facial tissue,
            napkins, and paper towels. Using advanced machinery and techniques,
            we ensure each product meets high standards for softness, strength,
            and absorbency. Starting with premium raw materials—wood pulp or
            recycled paper—our process involves refining, papermaking, slitting,
            embossing, perforating, and packaging for consumer convenience.
          </p>
          <p className="mb-4 text-gray-700">
            Leading us is our Co-Founder, a visionary with over 18 years of
            experience in business growth and strategic marketing. Her
            impressive background includes key roles at TNT in the Middle East,
            UK, and Nordic regions, as well as co-founding Kapital Seed 9 and
            managing processes at Accenture and TNT Logistics India.
          </p>
          <p className="mb-4 text-gray-700">
            Her strategic thinking, leadership, and commitment to sustainability
            guide our dedication to producing quality tissue products that meet
            evolving consumer needs globally.
          </p>
        </div>

        <div>
          <img src={yashi} alt="Company Image" className="rounded-md " />
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="px-4 py-16 -top-36 md:-top-60 bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mf mb-10">
          Our Manufacturing Process
        </h2>
        <div class="container mx-auto px-4 py-8">
          <div class="relative wrap overflow-hidden">
            <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Raw Material Selection
                </h3>
                <p class="text-gray-700 leading-tight">
                High-quality wood pulp or recycled paper is selected as the primary raw material. The chosen material is refined and processed to ensure that the final product has the desired strength, softness, and absorbency.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Papermaking
                </h3>
                <p class="text-gray-700 leading-tight">
                The refined pulp mixture is spread over a fourdrinier wire, forming a continuous sheet. Excess water is removed using vacuum suction, and press rolls and dryer cylinders further reduce moisture, resulting in a continuous, optimally-moist sheet of tissue paper.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Slitting
                </h3>
                <p class="text-gray-700 leading-tight">
                In the tissue paper converting facility, the large tissue roll is slit into smaller rolls of predetermined widths. This step may be done manually or with automated machinery for increased productivity.
                </p>
              </div>
            </div>


            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                 Embossing
                </h3>
                <p class="text-gray-700 leading-tight">
                The tissue paper is passed through heated embossing rolls, which imprint patterns or designs onto the surface. Embossing not only adds visual appeal but also increases the softness, strength, and absorbency of the tissue.
                </p>
              </div>
            </div>



            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Perforation
                </h3>
                <p class="text-gray-700 leading-tight">
                The tissue paper is perforated at regular intervals to allow easy tearing for consumers. Perforation can be achieved through mechanical or laser techniques, ensuring a clean and consistent tear every time.
                </p>
              </div>
            </div>



            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">6</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Packaging
                </h3>
                <p class="text-gray-700 leading-tight">
                The tissue paper is packaged into consumer-friendly formats, such as rolls or folded sheets. Automated machinery is used for precise and efficient packaging, and materials like plastic or cardboard are selected based on consumer preferences and sustainability.
                </p>
              </div>
            </div>

            
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
            <p className="font-semibold text-center text-gray-600 text-[1rem]">
              Founder
            </p>
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
            <p className="font-semibold text-center text-gray-600 text-[1rem]">
              Co-Founder
            </p>
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
            <p className="font-semibold text-center text-gray-600 text-[1rem]">
              Senior Team Member
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
