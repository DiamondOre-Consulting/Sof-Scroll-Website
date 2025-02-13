import { Link } from "react-router-dom"; // If you're using React Router
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/newlogo.webp";
import { FaGoogle } from "react-icons/fa";

const contactStyle =
  "text-[0.95rem] flex items-start sm:items-center lg:items-start gap-1 hover:text-dark font-semibold  text-gray-800 ";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full px-4 pt-8 mx-auto bg-gray-200 sm:px-4">
        <div className="py-8">
          <div className="flex flex-wrap items-start justify-around">
            {/* About Section */}
            <div className="w-full mb-8 lg:w-1/3 md:w-full xl:mb-0">
              <div className="text-gray-800">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Logo"
                    className="mb-4 w-[4rem]  animate-bounce duration-[0.01s] md:w-[6rem] drop-shadow-[0px_0px_1px_#fff]"
                  />
                </Link>

                <div>
                  <ul>
                    <li className="text-gray-800 leading-8 text-[0.9rem] hover:text-dark">
                      <a
                        className="flex items-center gap-2"
                        href="tel:6207234759"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="text-[1.3rem]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                        </svg>
                        +91-9980750049
                      </a>
                    </li>
                    <li className="text-gray-800 leading-8 text-[0.9rem] hover:text-dark">
                      <a
                        className="flex items-center gap-2"
                        href="mailto:name@email.com"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="text-[1.3rem]"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
                        </svg>
                        harshw1@sofsscrrol.com
                      </a>
                    </li>

                    <div className="flex space-x-4 items-center mt-3  ">
                      <a
                        href="https://www.instagram.com/sof_sscrrol/profilecard/?igsh=bDJyMXFveDdibXhy"
                        target="_blank"
                        className="text-[30px] "
                      >
                        {" "}
                        <TiSocialInstagram />
                      </a>
                      <a
                        href="https://www.instagram.com/nuttzmagic/"
                        target="_blank"
                        className="text-[30px] "
                      >
                        {" "}
                        <TiSocialInstagram />
                      </a>
                      {/* <TiSocialInstagram /> */}
                      <a
                        href="https://www.linkedin.com/company/harshawardhan-singh-09052b27/"
                        target="_blank"
                        className="text-[28px] "
                      >
                        {" "}
                        <FaLinkedin />
                      </a>

                      <a
                        href="https://www.linkedin.com/showcase/nutzz-magic/posts/?feedView=all"
                        target="_blank"
                        className="text-[28px] "
                      >
                        {" "}
                        <FaLinkedin />
                      </a>

                      <a
                        href="https://www.google.com/maps/dir//Kapital+Seed+9+WM5M%2B699+Bengaluru,+Karnataka+560035/@12.9080375,77.6834844,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13004569d5db:0x10c63413a4dac9d5!2m2!1d77.6834844!2d12.9080375?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        className="text-[25px]"
                      >
                        <FaGoogle />
                      </a>
                    </div>
                  </ul>
                </div>
                {/* <div className='flex gap-4 mt-4'>
                  <a href={''} className='text-[18px]'><BsLinkedin /></a>
                  <Link to={''} target='_blank' className='text-[18px]'><BsFacebook /></Link>
                  <Link to={`https://wa.me/${''}?text=Hello`} target='_blank' className='text-[18px]'><BsWhatsapp /></Link>
                  <Link to={''} target='_blank' className='text-[18px]'><BsInstagram /></Link>
              
                </div> */}

                <div className="flex  py-4 space-x-4 ">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/4/46/Make_In_India.png"
                    alt=""
                    className="w-20 h-10  "
                  />
                  <img
                    src="https://5.imimg.com/data5/ANDROID/Default/2022/5/LE/EJ/CX/36991455/product-jpeg-500x500.jpg"
                    alt=""
                    className="size-10"
                  />
                  <img
                    src="https://ts-production.imgix.net/images/mobile-cover-uploaded/ST1715078341742STEND4d4e7019-e24a-4adb-abed-fa0067ef4bdd.jpg?auto=compress,format&w=800&h=450"
                    alt=""
                    className="size-10 "
                  />
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="w-full xl:w-1/6 md:w-1/3">
              <div className="text-gray-800">
                <h2 className="text-[1.1rem] font-semibold mb-4">
                  Quick Links
                </h2>
                <div className="flex gap-1 mb-4">
                  <div className="w-[2.5rem] h-[3.5px] bg-dark rounded-full"></div>
                  <div className="w-[1rem] h-[3.5px] bg-dark rounded-full"></div>
                  <div className="w-[3.5px] h-[3.5px] bg-dark rounded-full"></div>
                </div>
                <ul>
                  <li className="text-gray-800 leading-8 text-[0.9rem] hover:text-dark">
                    <Link to={"/"} className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="text-gray-800 leading-8 text-[0.9rem] hover:text-dark">
                    <Link to={"/about-us"} className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li className="text-gray-800 leading-8 text-[0.9rem] hover:text-dark">
                    <Link to={"/contact-us"} className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li className="text-gray-800 leading-8 text-[0.9rem] hover:text-dark">
                    <Link to={"/cart"} className="hover:underline">
                      My Cart
                    </Link>
                  </li>
                  <li className="text-gray-800 leading-8 text-[0.9rem] hover:text-dark">
                    <Link to={"/all-products"} className="hover:underline">
                      Products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full xl:w-1/6 md:w-1/3">
              <div>
                <h2 className="text-[1.1rem] font-semibold mb-4">Contact Us</h2>

                <div className="flex gap-1 mb-4">
                  <div className="w-[2.5rem] h-[3.5px] bg-dark rounded-full"></div>
                  <div className="w-[1rem] h-[3.5px] bg-dark rounded-full"></div>
                  <div className="w-[3.5px] h-[3.5px] bg-dark rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-6 ">
                <Link to={"/"} className={`${contactStyle} lg:items-center`}>
                  <MdOutlineSmartphone />
                  +91-9980750049{" "}
                </Link>
                <Link to={"/"} className={`${contactStyle} lg:items-center`}>
                  <IoMdMail />
                  harshw1@sofsscrrol.com
                </Link>
                <Link to={"/"} className={`flex items-start  gap-1`}>
                  <FaLocationDot className="mt-1 text-4xl" />
                  <p className="text-sm flex-wrap">
                    #301,302, 1st floor, Junnasandra, Sarjapur Main road, Next
                    to Canara Bank Bangalore -560035 Karnataka, India{" "}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
      </div>
      <div className="flex w-full bg-[#000a12eb] items-center justify-around gap-1 flex-wrap text-[1rem] py-4 text-[#fff]">
        <span className="text-center text-[0.9rem] w-[18rem]">
          © 2024 Sof-Scroll All rights reserved.
        </span>
        {/* <span className="text-center text-[0.9rem] w-[18rem]">Developed by - <Link target='_blank' className='font-semibold underline' to={"https://cleverclicks.in/"}>Clever Clicks</Link></span> */}
        <p>
          Designed & Developed by{" "}
          <a
            href="https://www.doclabz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#32dd29]"
          >
            DOC-LABZ
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
