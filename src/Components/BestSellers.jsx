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
        <h1 className="relative mx-auto mb-1 text-6xl text-center mf"><span className="text-dark">Our Best </span>Sellers</h1>
        <div className="w-40 h-1 mx-auto bg-dark"></div>
        {/* <img src={pattern1} alt="" className="absolute right-0 -top-20 " /> */}
        <div className="grid items-center justify-center grid-cols-1 gap-6 px-6 mx-auto mt-20 w-fit sm:grid-cols-2 md:grid-cols-3">
          {Allproducts.slice(0, 6).map((product, index) => {
            const isInCart = cart.find((item) => item.itemCode === product.itemCode);

            return (
              <Link to={`/product/${product.itemCode}`} key={index}>
                <div className="w-[22rem] bg-white border-2 rounded shadow border-dark hover:border-dark hover:border-2">
                  <img src={product.imageUrl} alt="" className="h-[14rem] w-full" />
                  <div className="flex flex-col items-center p-4">
                    <h1 className="mt-1 text-center text-gray-800">{product.name}</h1>
                    <p className="text-xs font-light text-center text-gray-400">{product.description}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        isInCart ? removeFromCart(product) : addToCart(product);
                      }}
                      className={`py-2 px-4 ${isInCart ? 'bg-red-600' : 'bg-dark'} text-white rounded  mt-4 w-full flex items-center justify-center`}
                    >
                      {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
