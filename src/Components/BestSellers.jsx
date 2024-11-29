import React from "react";
import tissue1 from "../assets/tissue1.png";
import Allproducts from "./Products/AllProducts.js";
import { Link } from "react-router-dom";
import pattern1 from '../assets/pattern1.png'

const BestSellers = ({ cart, setCart }) => {
  console.log("all products", Allproducts);
  const addToCart = (product) => {
    if (!cart.find((item) => item.itemCode === product.itemCode)) {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.itemCode !== product.itemCode));
  };

  return (
    <div>
      <div className="relative py-10">
        <h1 className="relative mx-auto mb-1 text-3xl md:text-5xl text-center font-bold  text-gray-800 mf">Our Best Sellers</h1>
        <div className="w-40 h-1 mx-auto bg-dark"></div>
        {/* <img src={pattern1} alt="" className="absolute right-0 -top-20 " /> */}
        <div className="grid items-center justify-center grid-cols-1 gap-6 px-6 mx-auto mt-20 w-fit sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

          {Allproducts.slice(0, 6).map((product, index) => {
            const isInCart = cart.find((item) => item.itemCode === product.itemCode);

            return (
              <div key={index}>
                <div className="md:w-[24rem] h-full flex flex-col bg-gray-100 border rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-gray-200 hover:border-dark">
                  <div className="relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-[14rem] w-full object-cover transition-opacity duration-300 hover:opacity-90"
                    />
                    <div className="absolute px-2 py-1 text-xs font-medium text-white bg-black rounded top-2 left-2 bg-opacity-60">
                      New Arrival
                    </div>
                  </div>
                  <div className="flex flex-col px-4 pb-3 mt-2 space-y">
                    <h1 className="text-[1.15rem] text-wrap font-semibold text-gray-800 truncate transition-colors duration-300 hover:text-dark">
                      {product.name}
                    </h1>
                    <p className="text-sm text-gray-600 truncate">
                      {product.description}
                    </p>
                    <p className="text-xs italic text-gray-700">
                      Quality: <span className='text-gray-500'>{product.quality}</span>
                    </p>

                  </div>
                  <Link
                    to={`/product/${product.itemCode}`}
                    className="w-[93%] p-2 mb-4 mx-auto text-center text-white transition-transform duration-300 rounded-md bg-dark hover:scale-105 hover:bg-opacity-90"
                  >
                    View Product
                  </Link>
                </div>
              </div>


            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
