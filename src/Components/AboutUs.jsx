import React from "react";
import { Link } from "react-router-dom";
import pattern2 from '../assets/pattern2.png'

const AboutUs = () => {
  return (
    <div className="relative -mt-40 md:mt-0">
      <div className="flex flex-col items-center justify-center max-w-3xl px-4 py-10 mx-auto text-center xl md:py-20 md:px-0">
        <h1 className="mb-1 text-5xl md:text-6xl mf"><span className="text-dark">About </span>Us</h1>
        <div className="w-20 h-1 mx-auto md:w-52 bg-dark"></div>

        <p className="mt-10 mb-4">
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
          className="Btn-dark"
        >
          {/* Read More */}
        </Link>
        <img src={pattern2} alt="" className="absolute left-0 hidden top-10 md:flex " />
      </div>

    </div>
  );
};

export default AboutUs;
