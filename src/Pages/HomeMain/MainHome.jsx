import React, { useEffect } from "react";
import Hero from "../../Components/Hero";
import AboutUs from "../../Components/AboutUs";
import BestSellers from "../../Components/BestSellers";
import PopularCategories from "../../Components/PopularCategories";
import Testimonials from "../../Components/Testimonials";
import ContactUs from "../../Components/ContactUs";
import WhyUs from "../../Components/WhyUs";
import Chatboat from "../Chatboat";

const MainHome = ({ cart, setCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div>
      <Hero />
      <AboutUs />
      <BestSellers cart={cart} setCart={setCart} />
      {/* <PopularCategories/> */}
      <WhyUs />
      <Testimonials />
      <ContactUs />

     <Chatboat/>
    </div>
  );
};

export default MainHome;
