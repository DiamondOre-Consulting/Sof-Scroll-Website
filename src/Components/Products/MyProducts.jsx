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
      <div className="pb-24">
        {/* products bg */}

        {/* <h1 className="text-5xl text-center mf">All Products</h1> */}
        <div className="grid items-center justify-center grid-cols-1 gap-6 px-6 mx-auto max-w-[80rem] mt-20 w-fit sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

          {Allproducts.map((product, index) => {
            const isInCart = cart.find((item) => item.itemCode === product.itemCode);

            return (
              <div key={index}>
                <div className=" max-w-[24rem] w-full  h-full flex flex-col  backdrop-blur border  overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-sm   border-gray-200 hover:border-dark">
                  <div className="relative ">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-[20rem] object-top w-full object-cover transition-opacity duration-300 hover:opacity-90"
                    />
                    {/* <div className="absolute px-2 py-1 text-xs font-medium text-white bg-black rounded top-2 left-2 bg-opacity-60">
                      New Arrival
                    </div> */}
                  </div>
                  <div className="flex flex-col px-4 pb-3 mt-2 space-y">
                    <h1 className="text-[1.15rem]  text-wrap font-semibold text-gray-800 truncate transition-colors duration-300 hover:text-dark">
                      {product.name}
                    </h1>
                    {/* <p className="text-sm text-gray-600 truncate">
                      {product.description}
                    </p> */}
                       {product?.quality && (
                    <p className="text-xs italic text-gray-700">
                      Quality: <span className='text-gray-500'>{product.quality}</span>
                    </p>
     )}
                  </div>
                  <Link
                    to={`/product/${product.itemCode}`}
                    className="w-[93%] p-2 mx-auto mb-4  text-center text-white transition-transform duration-300 rounded-md bg-dark hover:scale-105 hover:bg-opacity-90"
                  >
                    View Product
                  </Link>
                </div>
              </div>


            );
          })}
        </div>
      </div> 
    </>
  );
};

export default MyProducts;
