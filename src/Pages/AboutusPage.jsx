import React, { useEffect, useState } from "react";
import manufacturingImage from "../assets/tissue1.png"; // Import manufacturing image
import teamImage1 from "../assets/harshawardhan.jpeg"; // Team member image 1
import teamImage2 from "../assets/Alex.jpeg"; // Team member image 2
import teamImage3 from "../assets/yashashrri.jpeg"; // Team member image 3
import patternImage from "../assets/22.png"; // Background pattern image

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

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center">
        <img
          src="https://www.premiertissues.com/images/about/banner.png"
          alt="Pattern"
          className="absolute inset-0 z-20 object-fill w-full h-full mx-auto "
        />
        <h1 className="relative z-10 pb-20 mt-10 text-5xl font-bold text-black pt-28 mf">
          About Us
        </h1>
      </div>

      {/* About Us Content */}
      <section className="px-4 ">
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Paragraphs */}
          <div className="max-w-3xl p-4 mx-auto text-center">
            <p className="mb-4 text-gray-700">
              We are dedicated to providing the highest quality tissue products,
              ensuring customer satisfaction through innovation and excellence
              in every step of our manufacturing process.
            </p>
            <p className="mb-4 text-gray-700">
              Our commitment to sustainability and responsible sourcing reflects
              in every product we create, supporting both our customers and the
              environment.
            </p>
            <p className="mb-4 text-gray-700">
              Join us in our journey as we expand our horizons and continue to
              deliver products that meet the evolving needs of our customers.
            </p>
          </div>
          {/* Right Side: Changing Image */}
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="px-4 py-16 bg-light">
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
      <section className="px-4 py-16 ">
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

      {/* Stats Section */}
      <section
        className="relative px-4 py-16"
        style={{
          backgroundImage: `url(${"https://kempttissues.com/assets/img/home/bg-client.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Achievements Content */}
        <div className="relative z-10 text-center text-white">
          <h2 className="mb-8 text-5xl font-bold mf">Our Achievements</h2>
          <div className="flex flex-wrap justify-center">
            <div className="m-4 text-center">
              <h3 className="text-6xl font-bold">1M+</h3>
              <p className="text-gray-300">Products Sold</p>
            </div>
            <div className="m-4 text-center">
              <h3 className="text-6xl font-bold">99%</h3>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
            <div className="m-4 text-center">
              <h3 className="text-6xl font-bold">5+</h3>
              <p className="text-gray-300">Years of Experience</p>
            </div>
            <div className="m-4 text-center">
              <h3 className="text-6xl font-bold">10+</h3>
              <p className="text-gray-300">Awards Won</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
