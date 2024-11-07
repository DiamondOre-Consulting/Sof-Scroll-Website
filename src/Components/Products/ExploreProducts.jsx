import React, { useEffect, useState } from "react";
import Allproducts from "./AllProducts.js";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const ExploreProducts = ({ cart, setCart }) => {
  console.log("all products", Allproducts);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    if (!cart.find((item) => item.itemCode === product.itemCode)) {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.itemCode !== product.itemCode)
    );
  };

  // This useEffect will run whenever the selected product changes
  useEffect(() => {
    if (selectedProduct) {
      // Scroll to top
      window.scrollTo(0, 0);

      // You can perform other side effects based on the selected product here
      console.log(`Selected product: ${selectedProduct.name}`);
    }
  }, [selectedProduct]); // Dependency array includes selectedProduct

  return (
    <div className="py-10 relative">
      <h1 className="text-center text-4xl md:text-6xl mx-auto relative mb-2 mf">
        <span className="text-dark mf">Explore </span>more products
      </h1>
      <div className="bg-dark w-20 md:w-60 h-1 mx-auto mb-10"></div>
      <Marquee pauseOnHover={true}>
        <div className="flex space-x-6">
          {Allproducts.slice(1, 10).map((product, index) => {
            const isInCart = cart.find(
              (item) => item.itemCode === product.itemCode
            );

            return (
              <Link 
                to={`/product/${product.itemCode}`} 
                key={index}
                onClick={() => setSelectedProduct(product)} // Update selected product on click
              >
                <div className="bg-white shadow border-dark border-2 hover:border-dark rounded flex flex-col">
                  <div
                    className="h-60 w-80 flex flex-col justify-between p-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                  ></div>
                  <div className="p-4 flex flex-col items-center">
                    <h1 className="text-gray-800 text-center mt-1">
                      {product.name}
                    </h1>
                    <p className="text-gray-400 font-light text-xs text-center">
                      {product.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        isInCart ? removeFromCart(product) : addToCart(product);
                      }}
                      className={`py-2 px-4 ${isInCart ? "bg-red-600" : "bg-dark"} text-white rounded mt-4 w-full flex items-center justify-center`}
                    >
                      {isInCart ? "Remove from Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default ExploreProducts;
