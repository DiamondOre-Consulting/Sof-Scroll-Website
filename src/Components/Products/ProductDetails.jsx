import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Allproducts from "./AllProducts";
import ExploreProducts from "./ExploreProducts";
import BreadCrumbs from "../BreadCrumbs";
import PropTypes from "prop-types";

const productI = {
  previews: [
    {
      previewUrl:
        "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2.png",
      thumbUrl:
        "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-1.png",
    },
    {
      previewUrl:
        "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
      thumbUrl:
        "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-2.png",
    },
    {
      previewUrl:
        "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
      thumbUrl:
        "https://cdn.easyfrontend.com/pictures/ecommerce/headphone2-3.png",
    },
  ],

};

const ProductDetails = ({ cart, setCart }) => {
  const { itemCode } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  useEffect(() => {
    const foundProduct = Allproducts.find((prod) => prod.itemCode === itemCode);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.imageUrl); // Set initial main image

      // Check if product is in cart and set quantity
      const cartItem = cart.find((item) => item.itemCode === itemCode);
      if (cartItem) {
        setQuantity(cartItem.quantity);
      }
    }
  }, [itemCode, cart]); // Depend on cart to update quantity if product is added/removed

  const updateCartInLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (newQuantity) => {
    const existingItem = cart.find((item) => item.itemCode === itemCode);
    if (existingItem) {
      // Update quantity if already in cart
      const updatedCart = cart.map((item) =>
        item.itemCode === itemCode ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
      updateCartInLocalStorage(updatedCart); // Update local storage
    } else {
      // Add new item to cart
      const updatedCart = [...cart, { ...product, quantity: newQuantity }];
      setCart(updatedCart);
      updateCartInLocalStorage(updatedCart); // Update local storage
    }
  };

  const removeFromCart = () => {
    const updatedCart = cart.filter((item) => item.itemCode !== itemCode);
    setCart(updatedCart);
    updateCartInLocalStorage(updatedCart); // Update local storage
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      addToCart(newQuantity); // Auto update cart when increasing
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        addToCart(newQuantity); // Auto update cart when decreasing
        return newQuantity;
      }
      return prevQuantity; // Prevent going below 1
    });
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  const isInCart = cart.some((item) => item.itemCode === itemCode);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'All Products', href: '/all-products' },
    { label: product.name },
  ];

  const ProductPreviews = ({ previews }) => {
    const [index, setIndex] = useState(0);

    return (
      <div className=" bg-gray-50 dark:bg-slate-800 rounded-xl lg:mr-6">
        <div className="text-center md:p-6">
          <img
            src={previews[index].previewUrl}
            alt=""
            className="w-full max-w-full mx-auto lg:h-[22rem] lg:max-w-[30rem] object-cover h-auto"
          />
        </div>

        <ul className="flex items-center justify-center gap-3">
          {previews.map((preview, i) => (
            <li
              className="flex items-center justify-center w-24 h-24 p-1 border border-gray-200 rounded-md cursor-pointer dark:border-slate-700"
              key={i}
              onClick={() => setIndex(i)}
            >
              <img src={preview.thumbUrl} alt="" className="h-auto max-w-full" />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  ProductPreviews.propTypes = {
    previews: PropTypes.array.isRequired,
  };

  return (
    <>
      {/* <BreadCrumbs headText={product.name} items={breadcrumbItems} /> */}

      <div className="w-full max-w-[80rem] p-4 px-4 sm:px-10 mx-auto pt-6 md:px-20 lg:px-6">
        <div className="grid items-center grid-cols-1 mt-4 lg:grid-cols-2 md:gap-10">
          <div className="w-full">
            <ProductPreviews previews={product.previews} />
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold mf">{product.name}</h1>
            <p className="mt-2 text-gray-700">{product.description}</p>

            <div className="space-y-1 ">
              <p>
                <strong>Quality:</strong> {product.quality}
              </p>
              <p>
                <strong>Ply:</strong> {product.ply}

              </p>
              <p>
                <strong>Pulls:</strong> {product.pulls}
              </p>

              <p>
                <strong>Weight:</strong> {product.weight}
              </p>
              <p>
                <strong>GSM:</strong> {product.gsm}
              </p>

              <p>
                <strong>Set Of Packets:</strong> {product.setOfPackets}
              </p>
            </div>

            <div className="flex items-center mt-6">
              <div className="border border-black border-1">
                <button
                  onClick={decreaseQuantity}
                  className="px-4 py-2 border border-t-0 border-b-0 border-l-0 border-black rounded-sm border-1"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="mx-4 text-lg">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-4 py-2 border border-t-0 border-b-0 border-r-0 border-black rounded-sm border-1"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4 mt-6">
              {isInCart ? (
                <>
                  <button
                    onClick={removeFromCart}
                    className="px-4 py-[0.62rem] text-white transition bg-red-500 rounded hover:bg-red-700"
                  >
                    Remove from Cart
                  </button>
                </>
              ) : (
                <button
                  onClick={() => addToCart(quantity)}
                  className="px-8 py-[0.62rem] text-white transition rounded-sm bg-dark hover:bg-green-700"
                >
                  Add to Cart
                </button>
              )}
              <Link to={'/cart'} className="Btn-Buy">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className="my-8">
          <p className="text-center text-gray-700">
            {product.fullDesc}
          </p>
        </div>


      </div>
      <div className="w-full p-4 pb-10 bg-slate-200">
        <h2 className="mb-6 font-bold text-center mf text-[2.7rem]">Product Features</h2>
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center">
            <img className="object-cover rounded-full size-20" src="https://img.freepik.com/free-photo/healthy-beautiful-manicure-with-cotton-pads_23-2148766541.jpg?semt=ais_hybrid" alt="" />
            <h1 className="text-[0.9rem] font-semibold">Soft Tissue</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="object-cover rounded-full size-20" src="https://img.freepik.com/free-photo/top-view-hand-book_23-2147624852.jpg?semt=ais_hybrid" alt="" />
            <h1 className="text-[0.9rem] font-semibold">Soft Comforty</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="object-cover rounded-full size-20" src="https://img.freepik.com/free-photo/eco-friendly-recycling-concept_23-2148737656.jpg?semt=ais_hybrid" alt="" />
            <h1 className="text-[0.9rem] font-semibold">Eco Friendly</h1>

          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="object-cover rounded-full size-20" src="https://img.freepik.com/free-photo/napkin-wooden-table_1339-5587.jpg?ga=GA1.1.1044272893.1732183300&semt=ais_hybrid" alt="" />
            <h1 className="text-[0.9rem] font-semibold">Quick Dry</h1>

          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="object-cover rounded-full size-20" src="https://img.freepik.com/free-vector/toilet-tissue-roll-element-vector_53876-169051.jpg?ga=GA1.1.1044272893.1732183300&semt=ais_hybrid" alt="" />
            <h1 className="text-[0.9rem] font-semibold">Disposable</h1>

          </div>


        </div>
      </div>

      <div>
        <ExploreProducts cart={cart} setCart={setCart} />
      </div>
    </>
  );
};

export default ProductDetails;
