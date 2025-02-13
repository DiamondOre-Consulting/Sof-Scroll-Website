import React from "react";
import Marquee from "react-fast-marquee";

const Recognisation = () => {
  return (
    <div className="my-10 bg-white py-8">
      <h1 className="text-3xl md:text-5xl px-4text-3xl md: font-semibold text-center mb-10">Accreditations</h1>
      <div>
        <Marquee className="gap-10" speed={50} pauseOnHover>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/46/Make_In_India.png"
            alt="Make in India"
            className="md:w-40 md:h-24 w-[140px] h-[60px] mx-[20px] md:mx-[50px]"
          />
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2022/5/LE/EJ/CX/36991455/product-jpeg-500x500.jpg"
            alt="Product Certification"
            className="md:w-40 md:h-40 w-20 h-20 mx-[20px] md:mx-40"
          />
          <img
            src="https://ts-production.imgix.net/images/mobile-cover-uploaded/ST1715078341742STEND4d4e7019-e24a-4adb-abed-fa0067ef4bdd.jpg?auto=compress,format&w=800&h=450"
            alt="Industry Standard"
            className="md:w-40 md:h-24 h-10 w-20  mx-[20px] md:mx-[50px]"
          />
          <img
            src="https://media.istockphoto.com/id/1250459233/vector/u-s-food-and-drug-administration-fda-approved-vector-stamp.jpg?s=612x612&w=0&k=20&c=NE575hUtucKM5zmP7dM0eId7UWmbssOrM0nCGnq9z18="
            alt="FDA Approved"
            className="md:w-40 md:h-40 w-20 h-20 mx-[20px] md:mx-[50px]"
          />
          <img
            src="https://wordpress.textileworld.com/wp-content/uploads/2024/06/Forest-Stewardship-Council-FSC%C2%AE-logo.png"
            alt="FSC Certified"
            className="md:w-40 md:h-40 w-20 h-20 mx-[20px] md:mx-[50px]"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Recognisation;
