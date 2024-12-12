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
import GoogleReviews from "@/Components/GoogleReviews";
import PopularCategory from "@/Components/PopularCategory";
import MakhanaSection from "@/Components/MakhanaSection";


const MainHome = ({ cart, setCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="overflow-x-hidden ">
      <Hero />
      <AboutUs />
    
      <OurStrength />
      <PopularCategory />
      <BestSellers cart={cart} setCart={setCart} />
      {/* <MakhanaSection/> */}
      {/* <PopularCategories/> */}
      <WhyUs />
      <Testimonials />
      {/* <GoogleReviews /> */}
      <ContactUs />
      <FAQPage />

    </div>
  );
};

export default MainHome;
