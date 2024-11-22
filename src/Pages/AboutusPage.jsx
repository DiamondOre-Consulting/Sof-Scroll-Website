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
                  High-quality wood pulp or recycled paper is selected as the
                  primary raw material. The chosen material is refined and
                  processed to ensure that the final product has the desired
                  strength, softness, and absorbency.
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
                  The refined pulp mixture is spread over a fourdrinier wire,
                  forming a continuous sheet. Excess water is removed using
                  vacuum suction, and press rolls and dryer cylinders further
                  reduce moisture, resulting in a continuous, optimally-moist
                  sheet of tissue paper.
                </p>
              </div>
            </div>
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Slitting</h3>
                <p class="text-gray-700 leading-tight">
                  In the tissue paper converting facility, the large tissue roll
                  is slit into smaller rolls of predetermined widths. This step
                  may be done manually or with automated machinery for increased
                  productivity.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Embossing</h3>
                <p class="text-gray-700 leading-tight">
                  The tissue paper is passed through heated embossing rolls,
                  which imprint patterns or designs onto the surface. Embossing
                  not only adds visual appeal but also increases the softness,
                  strength, and absorbency of the tissue.
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
                  The tissue paper is perforated at regular intervals to allow
                  easy tearing for consumers. Perforation can be achieved
                  through mechanical or laser techniques, ensuring a clean and
                  consistent tear every time.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">6</h1>
              </div>
              <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Packaging</h3>
                <p class="text-gray-700 leading-tight">
                  The tissue paper is packaged into consumer-friendly formats,
                  such as rolls or folded sheets. Automated machinery is used
                  for precise and efficient packaging, and materials like
                  plastic or cardboard are selected based on consumer
                  preferences and sustainability.
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

        <div className="grid grid-cols-1 gap-10 px-20">
          {/* First Section: Text on Left, Image on Right */}
          <div className="flex items-center justify-between">
            <div className="max-w-[60vw]">
              <p>
                Harshawardhan Singh is a visionary founder and seasoned business
                leader with over 21 years of extensive experience in the FMCG,
                Retail, Credit Rating, Banking, and Financial sectors. With a
                strong track record in launching and scaling businesses,
                Harshawardhan brings an exceptional blend of strategic thinking,
                market insight, and operational excellence. His expertise lies
                in building brands, orchestrating successful product launches,
                and driving sustainable growth across various industries.
              </p>

              <p>
                As the founder of Kapital Seed 9, Harshawardhan is at the helm
                of his latest venture, where he leverages his deep understanding
                of market dynamics to create innovative solutions that cater to
                evolving consumer needs. His career highlights include
                leadership roles such as Associate Director at OliveMoney, Zonal
                Head for South India at SMERA Ratings Limited, and Associate
                Vice President at PropEquity Analytics, among others.
                Harshawardhan has also held influential positions at industry
                leaders like CRISIL Limited, ICRA, Brickwork Ratings, and
                Colgate Palmolive, contributing to each with his skills in brand
                building, business management, and market expansion.
              </p>
              <p>
                A respected figure in his field, Harshawardhan has consistently
                driven impact through his ability to lead teams, manage
                large-scale projects, and develop growth strategies that are
                both innovative and effective. His dedication to excellence and
                commitment to results make him a trusted partner and leader in
                every venture he undertakes.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="border-2 border-gray-300 rounded-full w-80 h-80 object-cover"
                src={teamImage1}
                alt="Team Member"
              />
              <p className="mt-4 text-center font-bold text-2xl">
                Harshawardhan Singh
              </p>
            </div>
          </div>

          {/* Second Section: Text on Right, Image on Left */}
          <div className="flex items-center justify-between flex-row-reverse">
            <div className="max-w-[60vw]">
              <p>
                Alexander Mohandas is a seasoned business leader and commerce
                graduate from St. Joseph’s, bringing over 20 years of expertise
                across customer experience, sales, and marketing. His career
                spans some of the world’s most respected multinational
                companies, including the Yum! Brands chain (KFC & Pizza Hut),
                HSBC, 24/7, and most recently, Probe Information, where he
                served as Assistant Vice President.
              </p>
              <p>
                Known for his deep understanding of customer needs and his
                commitment to exceptional service, Alexander has been
                instrumental in driving growth and enhancing customer
                satisfaction. His passion for fostering innovation and aligning
                business strategies with customer demands has enabled him to
                build and expand businesses with a forward-thinking approach.
                Alexander’s leadership style is rooted in a pursuit of
                excellence and a strong grasp of the market landscape, allowing
                him to adeptly steer through complex challenges and deliver
                sustainable success.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="border-2 border-gray-300 rounded-full w-80 h-80 object-cover"
                src={teamImage2}
                alt="Team Member"
              />
              <p className="mt-4 text-center text-xl font-bold">Alexander Mohandas</p>
            </div>
          </div>




          <div className="flex items-center justify-between">
            <div className="max-w-[60vw]">
              <p>
              Yashashrri H Singh is a dynamic and results-driven co-founder with 18 years of diverse experience across business development, banking, customer relationships, and strategic marketing. As a seasoned leader, she brings a sharp strategic vision and exceptional communication skills to drive business growth and ensure alignment with the company’s goals. 
              </p>

              <p>
              In her role at Kapital Seed 9, Yashashrri has been instrumental in steering the company's growth through innovative marketing and customer-centric strategies. Her background includes significant experience with global brands like TNT, where she handled commercial billing processes for the Middle East, UK, and Nordic regions, as well as leadership roles at Accenture in the UK and Nordic process division.
              </p>
              <p>
              Yashashrri’s career showcases her deep expertise in strategic thinking, leadership, and relationship management. Her dedication to excellence and proven track record of success make her a key player in building robust business foundations and fostering long-lasting client relationships.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="border-2 border-gray-300 rounded-full w-80 h-80 object-cover"
                src={teamImage3}
                alt="Team Member"
              />
              <p className="mt-4 text-center font-bold text-2xl">
              Yashashrri H Singh
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;
