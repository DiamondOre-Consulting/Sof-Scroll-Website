import React from "react";
import { Link } from "react-router-dom";
import pattern2 from '../assets/pattern2.png'

const AboutUs = () => {
  return (
    <div className=" relative">
      <div className="max-w-3xl xl mx-auto text-center py-10 md:py-20 px-4 md:px-0">
        <h1 className="text-4xl mf">About Us</h1>

        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          asperiores, minima quibusdam dignissimos sequi magnam, odit delectus
          quas ratione saepe similique eum voluptates nam consectetur vero
          perspiciatis ex perferendis, suscipit repudiandae excepturi dolorem
          rerum incidunt corporis. Voluptates rem perspiciatis enim porro eius
          provident sit, inventore, adipisci dolorum cupiditate omnis quam
          tenetur? Aliquam nostrum autem, vitae porro voluptates iste earum
          obcaecati! Minima magnam illo necessitatibus illum eos omnis in
          laborum assumenda labore quaerat, vero dolores quis quod, itaque qui
          veritatis quia maxime.
        </p>

        <Link
          to="/about-us"
          className="bg-black  text-white  rounded-full py-3 px-10 "
        >
          Read More
        </Link>
        <img src={pattern2} alt="" className="absolute top-10 left-0 md:flex hidden " />
      </div>
  
    </div>
  );
};

export default AboutUs;
