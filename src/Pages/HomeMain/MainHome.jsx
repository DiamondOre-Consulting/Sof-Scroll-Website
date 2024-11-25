import React, { useEffect } from "react";
import Hero from "../../Components/Hero";
import AboutUs from "../../Components/AboutUs";
import BestSellers from "../../Components/BestSellers";
import PopularCategories from "../../Components/PopularCategories";
import Testimonials from "../../Components/Testimonials";
import ContactUs from "../../Components/ContactUs";
import WhyUs from "../../Components/WhyUs";
import FAQPage from "@/Components/FAQPage";
import OurStrength from "@/Components/OurStrength";

const MainHome = ({ cart, setCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="">
      <Hero />
      <AboutUs />
      <OurStrength/>
      <BestSellers cart={cart} setCart={setCart} />
      {/* <PopularCategories/> */}
      <WhyUs />
      <Testimonials />
      <ContactUs />
      <FAQPage />

    </div>
  );
};

export default MainHome;
