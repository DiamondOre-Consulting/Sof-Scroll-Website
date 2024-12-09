import React, { useEffect, useState } from "react";
import manufacturingImage from "../assets/tissue1.png"; // Import manufacturing image
import teamImage1 from "../assets/harshawardhan.jpeg"; // Team member image 1
import teamImage2 from "../assets/Alex.jpeg"; // Team member image 2
import teamImage3 from "../assets/yashashrri.jpeg"; // Team member image 3
import patternImage from "../assets/22.png"; // Background pattern image
import BreadCrumbs from "../Components/BreadCrumbs";
import yashi from "../assets/yashi.jpeg";
import logo from "../assets/newlogo.webp";
import TextRevealByWord from "../Components/ui/text-reveal";
import AnimatedText from "../Components/AnimatedText";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaRegCalendarAlt } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineData = [
  {
    title: "Raw Material Selection",
    date: "2024-01-01",
    description: ` High-quality wood pulp or recycled paper is selected as the
                  primary raw material. The chosen material is refined and
                  processed to ensure that the final product has the desired
                  strength, softness, and absorbency.`,
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Papermaking",
    date: "2024-02-01",
    description: `The refined pulp mixture is spread over a fourdrinier wire,
                  forming a continuous sheet. Excess water is removed using
                  vacuum suction, and press rolls and dryer cylinders further
                  reduce moisture, resulting in a continuous, optimally-moist
                  sheet of tissue paper.`,
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Slitting",
    date: "2024-03-01",
    description: ` In the tissue paper converting facility, the large tissue roll
                  is slit into smaller rolls of predetermined widths. This step
                  may be done manually or with automated machinery for increased
                  productivity.`,
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Embossing",
    date: "2024-04-01",
    description: `  The tissue paper is passed through heated embossing rolls,
                  which imprint patterns or designs onto the surface. Embossing
                  not only adds visual appeal but also increases the softness,
                  strength, and absorbency of the tissue.`,
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Perforation",
    date: "2024-05-01",
    description: `The tissue paper is perforated at regular intervals to allow
                  easy tearing for consumers. Perforation can be achieved
                  through mechanical or laser techniques, ensuring a clean and
                  consistent tear every time.`,
    icon: <FaRegCalendarAlt />,
  },
  {
    title: "Packaging",
    date: "2024-06-01",
    description: `The tissue paper is packaged into consumer-friendly formats,
                  such as rolls or folded sheets. Automated machinery is used
                  for precise and efficient packaging, and materials like
                  plastic or cardboard are selected based on consumer
                  preferences and sustainability.`,
    icon: <FaRegCalendarAlt />,
  },
];

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [teamImage1, teamImage2, teamImage3]; // Array of team images

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

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
    <div className="overflow-x-hidden ">
      {/* <BreadCrumbs items={breadcrumbItems} /> */}
      <div
        className=" relative bg-cover w-full h-[60vh] md:h-screen -top-24"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/coils-white-cotton-threads-metal-racks-close-up_508835-2434.jpg?w=740')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via- to-black opacity-60"></div>

        {/* Text content */}
        <div className="absolute text-white transform -translate-y-1/2 left-10 top-1/2">
          <p className="text-2xl md:text-5xl mf max-w-3xl font-semibold  md:leading-[100px] ">
            <AnimatedText
              text2={
                "Shaping comfort for every experience – dive into the story of our tissue mastery."
              }
            />
            {/* <AnimatedText text2={"Shaping comfort for every experience – dive into the story of our tissue mastery."}  /> */}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between px-4 md:flex-row md:px-10">
        <div className="md:max-w-[65vw]">
          <p
            className="mb-4 text-4xl font-semibold text-dark mf"
            data-aos="fade-up"
          >
            SOF SSCRROL
          </p>

          <p
            data-aos="fade-left"
            className="text-xl mf text-justify lg:text-4xl xl:text-2xl"
          >
            Our company specializes in tissue paper conversion, turning large
            rolls into essential products like toilet paper, facial tissue,
            napkins, and paper towels. Using advanced machinery and techniques,
            we ensure each product meets high standards for softness, strength,
            and absorbency. Starting with premium raw materials—wood pulp or
            recycled paper—our process involves refining, papermaking, slitting,
            embossing, perforating, and packaging for consumer convenience.
          </p>
        </div>

        <div data-aos="fade-right">
          <img
            src={logo}
            alt=""
            className="w-60  animate-bounce duration-[0.01s] md:mt-0 mt-20 "
          />
        </div>
      </div>

      {/* About Us Content */}
      {/* <section className="grid items-center grid-cols-1 gap-10 mt-6 sm:px-10 md:grid-cols-2 mt-28">
        <div className="p-4 text-justify text-start">
          <h1 className="mb-3 text-4xl font-bold text-gray-800">
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
      </section> */}

      {/* Manufacturing Process Section */}
      {/* <section className="px-4 py-16 -top-36 md:-top-60 bg-gray-50">
        <h2 className="mb-10 text-4xl font-bold text-center text-gray-800 md:text-5xl mf">
          Our Manufacturing Process
        </h2>
        <div className="container px-2 py-8 mx-auto ">
          <VerticalTimeline>
            {timelineData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                iconStyle={{ background: "#2D3748", color: "#fff" }} // Tailwind background and text color for icon
                icon={item.icon}
                contentStyle={{
                  background: "#F1F0E8",
                  color: "#333",
                  border: "2px solid #E2E8F0", // Light gray border for content card
                }}
                contentArrowStyle={{ borderRight: "7px solid #F1F0E8" }} // Arrow color to match content background
                lineStyle={{ border: "2px solid #000000" }} // Set the line (vertical divider) border to black
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-16">
        <h2
          className="mb-1 text-4xl font-semibold text-center text-black md:text-5xl mf"
          data-aos="fade-down"
        >
          Meet Our Team
        </h2>
        <div className="w-40 h-1 mx-auto mb-8 bg-dark"></div>

        <div className="grid grid-cols-1 gap-10 px-4 md:px-10">
          {/* First Section: Text on Left, Image on Right */}

          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="md:max-w-[60vw]">
              <p
                className="text-xl lg:text-4xl text-justify xl:text-2xl mf"
                data-aos="fade-right"
              >
                Yashashrri H Singh is a dynamic leader with 18 years of
                experience in business development, banking, and marketing. She
                specializes in driving business growth and aligning strategies
                with company goals. At Kapital Seed 9, Yashashrri plays a key
                role in shaping marketing and customer strategies, with a strong
                background at global companies like TNT and Accenture.
              </p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-left">
              <img
                className="object-cover mt-4 border-2 border-gray-300 rounded-full min-w-80 max-w-80 h-80 md:mt-0"
                src={teamImage3}
                alt="Yashashrri H Singh"
              />
              <p className="mt-4 text-2xl font-bold text-center">
                Yashashrri H Singh
              </p>
              <p className="mt-1 text-sm font-bold text-center text-gray-800 uppercase">
                Founder & COO
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between sm:flex-row-reverse">
            <div className="lg:max-w-[60vw] ">
              <p
                className="text-xl lg:text-4xl text-justify mf xl:text-2xl"
                data-aos="fade-right"
              >
                Harshawardhan Singh is a visionary founder with over 21 years of
                experience in FMCG, Retail, Banking, and Finance. He has led
                businesses to scale and driven successful product launches. As
                the founder of Kapital Seed 9, Harshawardhan brings deep market
                insight and operational excellence, having held leadership roles
                at HLL, Colgate, ICRA Ltd, SMERA Rating, CRISIL Ltd, and Probe
                Information.
              </p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-left">
              <img
                className="object-cover object-top  border-2 border-gray-300 rounded-full min-w-80 h-80"
                src={teamImage1}
                alt="Harshawardhan Singh"
              />
              <p className="mt-4 text-2xl font-bold text-center">
                Harshawardhan Singh
              </p>
              <p className="mt-1 text-sm font-bold text-center text-gray-800 uppercase">
                Co-Founder & CEO
              </p>
            </div>
          </div>

          {/* Second Section: Text on Right, Image on Left */}
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="md:max-w-[60vw]">
              <p
                className="text-xl lg:text-4xl text-justify mf xl:text-2xl"
                data-aos="fade-right"
              >
                Alexander Mohandas is an experienced business leader with over
                20 years in customer experience, sales, and marketing. He has
                worked with global brands like KFC, HSBC, and Probe Information.
                Known for his strategic approach, Alexander has driven growth
                and customer satisfaction, using his deep understanding of
                market needs to expand businesses successfully.
              </p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-left">
              <img
                className="object-cover object-top mt-4 border-2 border-gray-300 rounded-full md:mt-0 min-w-80 h-80"
                src={teamImage2}
                alt="Alexander Mohandas"
              />
              <p className="mt-4 text-xl font-bold text-center">
                Alexander Mohandas
              </p>
              <p className="mt-1 text-sm font-bold text-center text-gray-800 uppercase">
                Co-Founder & CMO
              </p>
            </div>
          </div>

          {/* Third Section: Text on Left, Image on Right */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
