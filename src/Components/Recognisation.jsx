import React from "react";
import Marquee from "react-fast-marquee";

const Recognisation = () => {
  return (
    <div className="my-10">
      <div>
        <Marquee className="bg-white py-4 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/46/Make_In_India.png"
            alt=""
            className="size-40 "
          />
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2022/5/LE/EJ/CX/36991455/product-jpeg-500x500.jpg"
            alt=""
            className="size-40"
          />
          <img
            src="https://ts-production.imgix.net/images/mobile-cover-uploaded/ST1715078341742STEND4d4e7019-e24a-4adb-abed-fa0067ef4bdd.jpg?auto=compress,format&w=800&h=450"
            alt=""
            className="size-40 "
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Recognisation;
