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
import Recognisation from "@/Components/Recognisation";
import { Helmet } from 'react-helmet-async';


const MainHome = ({ cart, setCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="overflow-x-hidden ">
      <Helmet>
  <title>SOF SSCRROL | Premium Tissue & Makhana Products</title>
  <meta
    name="description"
    content="SOF SSCRROL is a premium brand renowned for world-class tissue paper products and institutional commodities. Our tissues—ranging from toilet rolls to hospital couch rolls—are engineered for luxury, hygiene, and absorbency, tailored for HORECA, hospitality, and homes."
  />
</Helmet>

      
      <Hero />
      <AboutUs />
    
      <OurStrength />
      <PopularCategory />
      <BestSellers cart={cart} setCart={setCart} />
      {/* <MakhanaSection/> */}
      {/* <PopularCategories/> */}
      <WhyUs />
      <Testimonials />
      <Recognisation/>
      {/* <GoogleReviews /> */}
      <ContactUs />
      <FAQPage />

    </div>
  );
};

export default MainHome;
