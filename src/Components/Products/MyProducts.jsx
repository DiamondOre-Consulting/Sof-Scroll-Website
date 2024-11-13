import React, { useEffect } from 'react';
import Allproducts from './AllProducts';
import { Link } from 'react-router-dom';
import productsbg from '../../assets/productsbg.jpg'
import BreadCrumbs from '../BreadCrumbs';

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



  // for starting page from the top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'All Products' },
  ];

  return (
    <>
      <BreadCrumbs headText={"All Products"} items={breadcrumbItems} />
      <div className="pt-20 md:pt-24 md:py-24">
        {/* products bg */}


        {/* <h1 className="text-5xl text-center mf">All Products</h1> */}
        <div className="grid items-center justify-center grid-cols-1 gap-6 px-6 mx-auto mt-20 w-fit sm:grid-cols-2 lg:grid-cols-3">

          {Allproducts.map((product, index) => {
            const isInCart = cart.find((item) => item.itemCode === product.itemCode);

            return (
              <Link to={`/product/${product.itemCode}`} key={index}>
                <div className="max-w-[22rem] min-w-[18rem] bg-white border-2 rounded shadow border-dark hover:border-dark hover:border-2">
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
    </>
  );
};

export default MyProducts;
