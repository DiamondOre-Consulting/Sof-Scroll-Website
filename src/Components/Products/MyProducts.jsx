import React from 'react';
import Allproducts from './AllProducts';
import { Link } from 'react-router-dom';

const MyProducts = ({ cart, setCart }) => {
  // Add product to cart
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
    <div className="pt-40 md:py-40">
      <h1 className="text-center text-5xl mf">All Products</h1>
      <div className="grid grid grid-cols-1 md:grid-cols-3 mx-auto mt-20 gap-6 px-6">
        {Allproducts.map((product, index) => {
          const isInCart = cart.find((item) => item.itemCode === product.itemCode);

          return (
            <Link to={`/product/${product.itemCode}`} key={index}>
              <div className="w-auto bg-white shadow border hover:border-dark hover:border-2 rounded">
                <div className="h-60 w-full flex flex-col justify-between p-4 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                ></div>
                <div className="p-4 flex flex-col items-center">
                  <h1 className="text-gray-800 text-center mt-1">{product.name}</h1>
                  <p className="text-gray-400 font-light text-xs text-center">{product.description}</p>
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
  );
};

export default MyProducts;
