import React from 'react'
import Hero from '../../Components/Hero'
import AboutUs from '../../Components/AboutUs'
import BestSellers from '../../Components/BestSellers'
import PopularCategories from '../../Components/PopularCategories'
import Testimonials from '../../Components/Testimonials'
import ContactUs from '../../Components/ContactUs'
import WhyUs from '../../Components/WhyUs'


const MainHome = ({ cart, setCart }) => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <BestSellers cart={cart} setCart={setCart}/>
  
      {/* <PopularCategories/> */}
      <WhyUs/>
      <Testimonials/>
      <ContactUs/>
 
    </div>
  )
}

export default MainHome
