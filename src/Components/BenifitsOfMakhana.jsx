import React from "react";
// import makhanaImage from "../assets/makhana.jpg"; // Replace with actual path

const BenefitsOfMakhana = () => {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className=" mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="pl-4">
          <h2 className="text-4xl uppercase font-bold text-gray-800 mb-6">
            Benefits of Makhana
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At <span className="font-semibold text-green-700">NutzMagic</span>,
            we bring you nature's finest snack — Makhana. Not only is it
            delicious and crunchy, but it also offers a powerhouse of health
            benefits.
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li>HIGH FIBER CONTENT</li>
            <li>NATURAL DETOXIFIER</li>
            <li>RICH IN ANTIOXIDANTS</li>
            <li>REGULATES BLOOD PRESSURE</li>
            <li>LOW GLYCEMIC INDEX</li>
            <li>REDUCES ACNE</li>
            <li>LOW IN CALORIES</li>
            {/* <li>Rich in protein and low in fat – ideal for weight loss.</li> */}
          </ul>
        </div>

        <div>
          <img
            src="https://img.freepik.com/premium-photo/fresh-snack_54391-560.jpg?w=1380"
            alt="Makhana"
            className="w-full h-auto rounded-2xl rounded-l-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfMakhana;
