import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Allproducts from "./AllProducts";
import ExploreProducts from "./ExploreProducts";
import BreadCrumbs from "../BreadCrumbs";
import PropTypes from "prop-types";
import { FaPlayCircle } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const ProductPreviews = ({ previews, videoUrl }) => {
    const [index, setIndex] = useState(0); // For image preview
    const [isVideoPreview, setIsVideoPreview] = useState(false); // Toggle between image and video preview
    console.log(previews)
    const handlePreviewClick = (i) => {
      setIndex(i); // Change image preview when a thumbnail is clicked
      setIsVideoPreview(false); // Reset to image if clicked on image thumbnail
    };

    const handleVideoPreviewClick = () => {
      setIsVideoPreview(true); // Show the video preview
    };

    return (
      <div className="bg-gray-50 dark:bg-slate-800 rounded-xl lg:mr-6">
        <div className="text-center md:p-6 md:pb-2">
          {/* Display Image or Video */}
          {isVideoPreview ? (
            <div className="w-full max-w-full mx-auto h-[50vw] lg:h-[22rem] lg:max-w-[30rem] object-cover rounded-md">
              <video playsInline autoPlay loop className="w-full max-w-full mx-auto h-[50vw] lg:h-[22rem] lg:max-w-[30rem] object-cover rounded-md">
                <source src={previews[previews.length - 1].previewUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <img
              src={previews[index].previewUrl}
              alt=""
              className="w-full max-w-full mx-auto h-[50vw] lg:h-[22rem] lg:max-w-[30rem] object-cover rounded-md"
            />
          )}
        </div>

        {/* Thumbnails for Image and Video */}
        <ul className="flex items-center justify-center gap-3 pt-2 md:px-8 lg:px-11 md:pt-0">
          {previews.slice(0, previews.length - 1).map((preview, i) => (
            <li
              key={i}
              className="flex items-center justify-center w-full h-20 p-1 overflow-hidden border border-gray-200 rounded-md cursor-pointer sm:h-24 dark:border-slate-700"
              onClick={() => handlePreviewClick(i)}
            >
              <img
                src={preview.thumbUrl}
                alt=""
                className="object-cover w-full h-full rounded-md"
              />
            </li>
          ))}

          {/* Video Thumbnail */}
          {videoUrl && (
            <li
              className="relative flex items-center justify-center w-full h-20 p-1 overflow-hidden border border-gray-200 rounded-md cursor-pointer sm:h-24 dark:border-slate-700"
              onClick={handleVideoPreviewClick}
            >
              <video
                src={previews[previews.length - 1].previewUrl} // You can use any video icon here
                alt="Video Preview"
                className="object-cover w-full h-full rounded-md"
              />
              <FaPlayCircle className="absolute text-[2.5rem] text-[#575757]" />
            </li>
          )}
        </ul>
      </div>
    );
  };

  ProductPreviews.propTypes = {
    previews: PropTypes.array.isRequired,
    videoUrl: PropTypes.string, // Video URL for preview
  };

  return (
    <>
      <BreadCrumbs headText={product.name} items={breadcrumbItems} />

      <div className="w-full max-w-[80rem] p-4 pt-1 px-4 sm:px-10 mx-auto  md:px-20 lg:px-6">
        <div className="grid items-start grid-cols-1 gap-6 mt-4 lg:grid-cols-2 md:gap-0">
          <div className="w-full">
            <ProductPreviews previews={product.previews} videoUrl={product.previews[product.previews.length - 1].previewUrl} />
          </div>

          <div className="flex flex-col w-full">
            <h1 className="text-3xl font-[600] mf">{product.name}</h1>
            <p className="mt-2 font-semibold">{product?.quality}</p>
            <p className="py-3 text-gray-700 ">{product.description}</p>

            <div className="flex gap-4 my-2 space-y-1 text-left">
              <p className="mt-[0.15rem] font-medium text-[0.95rem] text-gray-500 ">Dimension  <span className="text-dark font-semibold border-2 ml-4 border-dark p-[0.3rem] text-[0.9rem] ">{product?.dimensions}</span></p>
            </div>

            <div className="flex gap-4 pb-3 my-2 space-y-1 text-left border-b-2">
              <p className="mt-[0.15rem] font-medium text-[0.95rem] text-gray-500">Highlights</p>
              <ul className="text-black font-[400]  text-[0.9rem]">

                <li className="tracking-wide">- Pulls : {product?.pulls}</li>
                <li className="tracking-wide">- Sheets : {product?.SheetCount}</li>
                <li className="tracking-wide">- Weight : {product?.weight}</li>
                <li className="tracking-wide">- Ply : {product?.ply} Ply</li>
              </ul>
            </div>

            <div className="my-2 text-left">
              <p className="font-medium text-green-600">Special price</p>
              <div className="flex items-baseline space-x-2">
                {/* Current price */}
                <span className="text-2xl font-bold text-gray-900">₹289</span>
                {/* Original price */}
                <span className="text-gray-500 line-through">₹799</span>
                {/* Discount percentage */}
                <span className="font-medium text-green-600">63% off</span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4 mt-2">
              <div className="w-full actions">
                <div>
                  <div onClick={decreaseQuantity}>
                    <FaMinus />
                  </div>
                  {quantity}
                  <div onClick={increaseQuantity}>
                    <FaPlus />
                  </div>
                </div>
                <button
                  // onClick={() => setIsModalOpen(true)}
                  className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
              <Link to={'/cart'} className="w-full px-4 py-2 text-center text-white rounded bg-dark hover:bg-[#1d8883]"
              >
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


      </div >
      <div className="w-full p-4 pb-10 bg-slate-200">
        <h2 className="mb-6 font-bold text-center mf text-[2.7rem]">Product Features</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center justify-center gap-1">
            <img className="object-cover rounded-full size-24 sm:size-28 md:size-32" src="https://img.freepik.com/free-photo/healthy-beautiful-manicure-with-cotton-pads_23-2148766541.jpg?semt=ais_hybrid" alt="" />
            <h1 className="text-[0.9rem] font-semibold">Soft Tissue</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img className="object-cover rounded-full size-24 sm:size-28 md:size-32" src="https://img.freepik.com/free-photo/top-view-hand-book_23-2147624852.jpg?semt=ais_hybrid" alt="" />
            <h1 className="text-[0.9rem] font-semibold">Soft Comforty</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img className="object-cover rounded-full size-24 sm:size-28 md:size-32" src="https://img.freepik.com/free-photo/eco-friendly-recycling-concept_23-2148737656.jpg?semt=ais_hybrid" alt="" />
            <h1 className="text-[0.9rem] font-semibold">Eco Friendly</h1>

          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img className="object-cover rounded-full size-24 sm:size-28 md:size-32" src="https://img.freepik.com/free-photo/napkin-wooden-table_1339-5587.jpg?ga=GA1.1.1044272893.1732183300&semt=ais_hybrid" alt="" />
            <h1 className="text-[0.9rem] font-semibold">Quick Dry</h1>

          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img className="object-cover rounded-full size-24 sm:size-28 md:size-32" src="https://img.freepik.com/free-vector/toilet-tissue-roll-element-vector_53876-169051.jpg?ga=GA1.1.1044272893.1732183300&semt=ais_hybrid" alt="" />
            <h1 className="text-[0.9rem] font-semibold">Disposable</h1>

          </div>


        </div>
      </div>

      <div>
        <ExploreProducts cart={cart} setCart={setCart} />
      </div>
      {
        isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 bg-white rounded-lg shadow-lg w-96">
              <h2 className="mb-4 text-xl font-semibold">Select Options</h2>

              <div className="space-y-4">
                {/* Raw Material */}
                <div>
                  <label className="block font-semibold">Raw Material:</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={selectedOptions.rawMaterial}
                    onChange={(e) =>
                      handleOptionChange("rawMaterial", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option value="Virgin">Virgin</option>
                    <option value="Recycle">Recycle</option>
                    <option value="Bamboo">Bamboo</option>
                  </select>
                </div>

                {/* Ply */}
                <div>
                  <label className="block font-semibold">Ply:</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={selectedOptions.ply}
                    onChange={(e) => handleOptionChange("ply", e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="1 Ply">1 Ply</option>
                    <option value="2 Ply">2 Ply</option>
                    <option value="3 Ply">3 Ply</option>
                    <option value="4 Ply">4 Ply</option>
                  </select>
                </div>

                {/* Packaging */}
                <div>
                  <label className="block font-semibold">Packaging:</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={selectedOptions.packaging}
                    onChange={(e) =>
                      handleOptionChange("packaging", e.target.value)
                    }
                  >
                    <option value="">Select</option>
                    <option value="18 rolls (MOQ: 36000 rolls)">
                      18 rolls (MOQ: 36000 rolls)
                    </option>
                    <option value="24 rolls (MOQ: 48000 rolls)">
                      24 rolls (MOQ: 48000 rolls)
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 mt-4">
                <label className="block font-semibold">Quantity </label>
                :
                <input
                  className="w-full p-2 border border-gray-300 rounded outline-none"

                  type="text" value={selectedOptions.quantity} onChange={(e) => handleOptionChange("quantity", e.target.value)} />
              </div>
              <div className="flex justify-end mt-6 space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={addToCart}
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default ProductDetails;
