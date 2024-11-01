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

  return (
    <div className="">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center relative">
        <img
          src="https://www.premiertissues.com/images/about/banner.png"
          alt="Pattern"
          className="absolute z-20 mx-auto inset-0 w-full h-full object-fill "
        />
        <h1 className="text-5xl font-bold text-black relative pt-28 pb-20 z-10 mt-10 mf">
          About Us
        </h1>
      </div>

      {/* About Us Content */}
      <section className=" px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Paragraphs */}
          <div className="p-4 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-4">
              We are dedicated to providing the highest quality tissue products,
              ensuring customer satisfaction through innovation and excellence
              in every step of our manufacturing process.
            </p>
            <p className="text-gray-700 mb-4">
              Our commitment to sustainability and responsible sourcing reflects
              in every product we create, supporting both our customers and the
              environment.
            </p>
            <p className="text-gray-700 mb-4">
              Join us in our journey as we expand our horizons and continue to
              deliver products that meet the evolving needs of our customers.
            </p>
          </div>
          {/* Right Side: Changing Image */}
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-16 px-4 bg-light">
        <h2 className="text-4xl font-bold text-center  mb-1 mf">
          Our Manufacturing Process
        </h2>
        <div className="mx-auto w-40 h-1 bg-dark  mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
          {/* Process Steps */}
          <div className="p-4 rounded-full  transform transition-all duration-300 relative ">
            <img
              src={manufacturingImage}
              alt="Manufacturing Step"
              className="h-60  border border-2  border-dashed border-dark p-2 w-60 object-cover  rounded-full"
            />
            <div className="text-5xl text-center w-20 h-20 z-20 flex absolute top-40  text-white justify-center items-center  rounded-full bg-dark">
              1
            </div>
            <h3 className="text-2xl font-semibold mt-4">Sourcing</h3>
            <p className="mt-2 text-gray-600">
              We source the finest raw materials to ensure the highest quality
              products.
            </p>
          </div>

          <div className="p-4 rounded-full  transform transition-all duration-300 relative ">
            <img
              src={manufacturingImage}
              alt="Manufacturing Step"
              className="h-60  border border-2  border-dashed border-dark p-2 w-60 object-cover  rounded-full"
            />
            <div className="text-5xl text-center w-20 h-20 z-20 flex absolute top-40  text-white justify-center items-center  rounded-full bg-dark">
              2
            </div>
            <h3 className="text-2xl font-semibold mt-4">Production</h3>
            <p className="mt-2 text-gray-600">
              Our advanced machinery guarantees precision and efficiency in
              production.
            </p>
          </div>

          <div className="p-4 rounded-full  transform transition-all duration-300 relative ">
            <img
              src={manufacturingImage}
              alt="Manufacturing Step"
              className="h-60  border border-2  border-dashed border-dark p-2 w-60 object-cover  rounded-full"
            />
            <div className="text-5xl text-center w-20 h-20 z-20 flex absolute top-40  text-white justify-center items-center  rounded-full bg-dark">
              3
            </div>
            <h3 className="text-2xl font-semibold mt-4"> Quality Control</h3>
            <p className="mt-2 text-gray-600">
              Each product undergoes strict quality checks to ensure customer
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 ">
        <h2 className="text-5xl font-bold text-center text-white  mb-8 mf">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row justify-center  items-center">
          {/* Founder */}
          <div className="flex flex-col items-center bg-white  rounded-lg shadow-md p-6 m-4 transform transition-all duration-300 hover:shadow-lg">
            <img
              src={teamImage1}
              alt="Harshawardhan Singh"
              className="rounded-full h-48 w-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold text-center">
              Harshawardhan Singh
            </h3>
            <p className="text-gray-600 text-center">Founder</p>
            <p className="mt-2 text-gray-600 text-center">
              "Proven track record in launching and growing businesses with
              expertise in FMCG, Retail, Banking & Financial Sector."
            </p>
            <p className="mt-2 text-gray-600 text-center">
              Career Length: <strong>21 Years</strong>
            </p>
            <p className="mt-2 text-gray-600 text-center">
              Skills:{" "}
              <strong>
                Brand building, Product Launch, Business Management
              </strong>
            </p>
          </div>

          {/* Co-Founder */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 m-4 transform transition-all duration-300 hover:shadow-lg">
            <img
              src={teamImage3}
              alt="Yashashrri H Singh"
              className="rounded-full h-48 w-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold text-center">
              Yashashrri H Singh
            </h3>
            <p className="text-gray-600 text-center">Co-Founder</p>
            <p className="mt-2 text-gray-600 text-center">
              "Dynamic and result-oriented professional driving business growth
              through strategic marketing initiatives."
            </p>
            <p className="mt-2 text-gray-600 text-center">
              Career Length: <strong>18 Years</strong>
            </p>
            <p className="mt-2 text-gray-600 text-center">
              Skills:{" "}
              <strong>Strategic Thinking, Leadership, Communication</strong>
            </p>
          </div>

          {/* Team Member */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-10 m-4 transform transition-all duration-300 hover:shadow-lg">
            <img
              src={teamImage2}
              alt="Alexander Mohandas"
              className="rounded-full h-48 w-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold text-center">
              Alexander Mohandas
            </h3>
            <p className="text-gray-600 text-center">Senior Team Member</p>
            <p className="mt-2 text-gray-600 text-center">
              "With over two decades of experience, passionate about building
              businesses and ensuring customer satisfaction."
            </p>
            <p className="mt-2 text-gray-600 text-center">
              Career Length: <strong>20+ Years</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Achievements
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="m-4">
            <h3 className="text-6xl font-bold">1M+</h3>
            <p className="text-gray-600">Products Sold</p>
          </div>
          <div className="m-4">
            <h3 className="text-6xl font-bold">99%</h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="m-4">
            <h3 className="text-6xl font-bold">5+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="m-4">
            <h3 className="text-6xl font-bold">10+</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
