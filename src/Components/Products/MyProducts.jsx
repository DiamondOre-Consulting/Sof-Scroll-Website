import React from 'react';
import Allproducts from './AllProducts';
import { Link } from 'react-router-dom';
import productsbg from '../../assets/productsbg.jpg'

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
    <div className="pt-20 md:pt-24 md:py-24">
      {/* products bg */}
       <div className="relative bg-cover bg-center h-96 " style={{ backgroundImage: `url('${productsbg}')` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Black overlay */}
      <div className="relative flex flex-col justify-center items-center h-full text-white text-center">
        <h2 className="text-4xl md:text-8xl  mf font-semibold mb-4">
          All Products
        </h2>
        <div className='mx-auto w-80 h-1 bg-white'></div>
        {/* <Link
            to={'/contact-us'}
            className="button inline-grid border bg-white border-dark rounded-full py-2 px-10 w-40 text-center text-black overflow-hidden  transition-all duration-300"
          >
            <span>Contact Us</span>
          </Link> */}
      </div>
    </div>

      {/* <h1 className="text-center text-5xl mf">All Products</h1> */}
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
