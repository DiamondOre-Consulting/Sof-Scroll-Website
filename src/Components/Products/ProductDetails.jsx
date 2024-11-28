import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Allproducts from "./AllProducts";
import ExploreProducts from "./ExploreProducts";
import BreadCrumbs from "../BreadCrumbs";
import PropTypes from "prop-types";
import { FaPlayCircle } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import RelatedProducts from "./RelatedProducts";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ProductDetails = ({ cart, setCart }) => {
  const { itemCode } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0); // Initialize quantity state
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    setQuantity(quantity - 1);
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
      if (prevQuantity >= 1) {
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

  const buyButton = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      addToCart(1);
      navigate("/cart");
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "All Products", href: "/all-products" },
    { label: product.name },
  ];

  const ProductPreviews = ({ previews, videoUrl }) => {
    const [index, setIndex] = useState(0); // For image preview
    const [isVideoPreview, setIsVideoPreview] = useState(false); // Toggle between image and video preview
    console.log(previews);
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
              <video
                playsInline
                autoPlay
                loop
                className="w-full max-w-full mx-auto h-[50vw] lg:h-[22rem] lg:max-w-[30rem] object-cover rounded-md"
              >
                <source
                  src={previews[previews.length - 1].previewUrl}
                  type="video/mp4"
                />
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
    <div className="overflow-hidden overflow-x-hidden">
      <BreadCrumbs headText={product.name} items={breadcrumbItems} />

      <div className="w-full  select-none max-w-[80rem] p-4 pt-1 px-4 sm:px-10 mx-auto  md:px-20 lg:px-6">
        <div className="grid items-start grid-cols-1 gap-6 mt-4 lg:grid-cols-2 md:gap-0">
          <div data-aos="zoom-in" className="sticky top-0 w-full">
            <ProductPreviews
              previews={product.previews}
              videoUrl={
                product.previews[product.previews.length - 1].previewUrl
              }
            />
          </div>

          <div className="flex flex-col w-full mt-4 overflow-hidden">
            <h1 className="text-3xl font-[600] mf">{product.name}</h1>
            {/* <p  className="mt-2 font-semibold text-gray-600">{product?.particulars}</p> */}
            {/* <p  className="font-semibold ">{product?.quality}</p> */}

            <p className="pb-3 text-gray-700 mb-2 mt-2">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-y-2">
              <>
                <p className="font-bold">Brand</p>
                <p>Sof SScrrol</p>
              </>

              {product?.quality && (
                <>
                  <p className="font-bold">Special Feature</p>
                  <p>{product.quality}</p>
                </>
              )}

              {product?.material && (
                <>
                  <p className="font-bold">Material</p>
                  <p>{product.material}</p>
                </>
              )}

              {product?.SheetCount && (
                <>
                  <p className="font-bold">Sheet Count</p>
                  <p>{product.SheetCount}</p>
                </>
              )}

              {product?.ply && (
                <>
                  <p className="font-bold">Ply Rating</p>
                  <p>{product.ply}</p>
                </>
              )}

              {product?.recommendation && (
                <>
                  <p className="font-bold">Recommended Uses</p>
                  <p>{product.recommendation}</p>
                </>
              )}

              {product?.pulls && (
                <>
                  <p className="font-bold">Pulls</p>
                  <p>{product.pulls}</p>
                </>
              )}

              {product?.dimensions && (
                <>
                  <p className="font-bold">Dimension</p>
                  <p>{product.dimensions}</p>
                </>
              )}

              {product?.weight && (
                <>
                  <p className="font-bold">Weight</p>
                  <p>{product.weight}</p>
                </>
              )}

              {product?.Packaging && (
                <>
                  <p className="font-bold">Packaging</p>
                  <p>{product.Packaging}</p>
                </>
              )}
            </div>

            <hr className="mt-2"></hr>

            <div className="px-2 my-4">
              <p className="mb-1 text-xl font-bold">About this Item</p>
              {product?.fullDesc && Array.isArray(product.fullDesc) && (
                <ul className="text-black font-[400] list-disc space-y-1 text-[0.9rem] pl-5">
                  {product.fullDesc.map((dis, index) => (
                    <li key={index} className="tracking-wide">
                      {dis}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div
              className="flex items-center justify-start gap-4 mt-6"
              data-aos-offset="10"
            >
              <div className="min-w-[11rem] actions" data-aos-offset="10">
                {quantity < 1 ? (
                  <button
                    onClick={increaseQuantity}
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between font-semibold text-white bg-blue-700 rounded-md">
                    <div
                      onClick={
                        quantity === 1 ? removeFromCart : decreaseQuantity
                      }
                      className="p-3 px-5 cursor-pointer"
                    >
                      <FaMinus />
                    </div>
                    <span className="text-[1.2rem]">{quantity}</span>
                    <div
                      onClick={increaseQuantity}
                      className="p-3 px-5 cursor-pointer"
                    >
                      <FaPlus />
                    </div>
                  </div>
                )}
              </div>
              <div
                data-aos-offset="10"
                onClick={() => buyButton()}
                className="w-full px-4 py-2 text-center text-white rounded bg-dark cursor-pointer hover:bg-[#1d8883]"
              >
                Quote me
              </div>
            </div>
          </div>
        </div>
        {/* <div className="my-8" >
          <p className="text-center text-gray-700 ">
            {product.fullDesc}
          </p>
        </div> */}
      </div>

      <div>
        <RelatedProducts
          cart={cart}
          setCart={setCart}
          category={product.category}
          itemCode={product.itemCode}
        />
      </div>

      <div className="w-full p-4 pb-10 bg-slate-200" data-aos="fade-down">
        <h2 className="mb-6 font-bold text-center mf text-[2.7rem]">
          Product Features
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div
            className="flex flex-col items-center justify-center gap-1"
            data-aos-duration="1800"
          >
            <img
              className="object-cover rounded-full size-24 sm:size-28 md:size-32"
              src="https://img.freepik.com/free-photo/healthy-beautiful-manicure-with-cotton-pads_23-2148766541.jpg?semt=ais_hybrid"
              alt=""
            />
            <h1 className="text-[0.9rem] font-semibold">Soft Tissue</h1>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-1"
            data-aos-duration="1400"
          >
            <img
              className="object-cover rounded-full size-24 sm:size-28 md:size-32"
              src="https://img.freepik.com/free-photo/top-view-hand-book_23-2147624852.jpg?semt=ais_hybrid"
              alt=""
            />
            <h1 className="text-[0.9rem] font-semibold">Soft Comforty</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <img
              className="object-cover rounded-full size-24 sm:size-28 md:size-32"
              src="https://img.freepik.com/free-photo/eco-friendly-recycling-concept_23-2148737656.jpg?semt=ais_hybrid"
              alt=""
            />
            <h1 className="text-[0.9rem] font-semibold">Eco Friendly</h1>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-1"
            data-aos-duration="1400"
          >
            <img
              className="object-cover rounded-full size-24 sm:size-28 md:size-32"
              src="https://img.freepik.com/free-photo/napkin-wooden-table_1339-5587.jpg?ga=GA1.1.1044272893.1732183300&semt=ais_hybrid"
              alt=""
            />
            <h1 className="text-[0.9rem] font-semibold">Quick Dry</h1>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-1"
            data-aos-duration="1800"
          >
            <img
              className="object-cover rounded-full size-24 sm:size-28 md:size-32"
              src="https://img.freepik.com/free-vector/toilet-tissue-roll-element-vector_53876-169051.jpg?ga=GA1.1.1044272893.1732183300&semt=ais_hybrid"
              alt=""
            />
            <h1 className="text-[0.9rem] font-semibold">Disposable</h1>
          </div>
        </div>
      </div>

      <div>
        <ExploreProducts cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default ProductDetails;
