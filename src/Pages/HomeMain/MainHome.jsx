import React, { useEffect } from "react";
import Hero from "../../Components/Hero";
import AboutUs from "../../Components/AboutUs";
import BestSellers from "../../Components/BestSellers";
import PopularCategories from "../../Components/PopularCategories";
import Testimonials from "../../Components/Testimonials";
import ContactUs from "../../Components/ContactUs";
import WhyUs from "../../Components/WhyUs";

const MainHome = ({ cart, setCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div>
      <Hero />
      <div className=" border-orange-400  m-8 rounded-full border-t-4 sticky top-14 z-50"></div>
      <AboutUs />
      <div className=" border-orange-400 m-8 rounded-full border-t-4 sticky top-14 z-50"></div>
      <BestSellers cart={cart} setCart={setCart} />
      <div className=" border-orange-400 m-8 rounded-full border-t-4 sticky top-14 z-50"></div>
      {/* <PopularCategories/> */}
      <WhyUs />
      <div className=" border-orange-400  m-8 rounded-fullborder-t-4 sticky top-14 z-50"></div>
      <Testimonials />
      <div className=" border-orange-400  m-8 rounded-fullborder-t-4 sticky top-14 z-50"></div>
      <ContactUs />
      <div className=" border-orange-400  m-8 rounded-fullborder-t-4 sticky top-14 z-50"></div>


    </div>
  );
};

export default MainHome;
