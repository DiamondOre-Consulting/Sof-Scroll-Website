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

  const productVideo = product?.videoUrl;

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

  const ProductPreviews = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [videoActive, setVideoActive] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    console.log(images);
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full space-x-2 top-10">
          {videoActive ? (
            <video
              src={productVideo}
              playsInline
              autoPlay
              muted
              loop
              className="w-full max-w-full mx-auto h-[50vw] lg:h-[24rem] lg:max-w-[36rem] object-cover rounded-md"
            ></video>
          ) : (
            <div
              className="relative overflow-hidden w-full h-[50vw] lg:h-[24rem]"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={(e) => {
                const { left, top, width, height } =
                  e.target.getBoundingClientRect();
                const x = ((e.clientX - left) / width) * 100;
                const y = ((e.clientY - top) / height) * 100;
                setMousePosition({ x, y });
              }}
            >
              <img
                src={images[selectedImage].previewUrl}
                alt={`Preview ${selectedImage + 1}`}
                className={` w-full mx-auto h-[50vw] lg:h-[24rem] lg:w-[34rem] object-cover rounded-md transition-transform duration-200 ${
                  isZoomed ? "scale-[2]" : "scale-100"
                }`}
                style={{
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }}
              />
            </div>
          )}
        </div>
        <div className="flex space-x-2 top-10">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedImage(index);
                setVideoActive(false);
              }}
              className={`w-20 h-20  ${
                selectedImage === index
                  ? "border-2 rounded border-blue-500"
                  : ""
              }`}
            >
              <img
                src={image.previewUrl}
                alt={`Thumbnail ${index + 1}`}
                className="rounded"
              />
            </button>
          ))}
          {productVideo && (
            <div
              className="relative"
              onClick={() => {
                setVideoActive(true);
                setSelectedImage(null);
              }}
            >
              <video
                src={productVideo}
                controls={false}
                className={`w-20 h-20  ${
                  videoActive ? "border-2 rounded border-blue-500" : ""
                }`}
              ></video>
              <FaPlayCircle
                className="absolute text-gray-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                size={40}
              />
            </div>
          )}
        </div>
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
          <div data-aos="zoom-in" className="top-0 w-full ">
            <ProductPreviews images={product.previews} />
          </div>

          <div className="flex flex-col w-full mt-4 md:ml-8 overflow-hidden">
            <h1 className="text-3xl font-[600] mf">{product.name}</h1>
            {/* <p  className="mt-2 font-semibold text-gray-600">{product?.particulars}</p> */}
            {/* <p  className="font-semibold ">{product?.quality}</p> */}

            <p className="pb-3 mt-2 mb-2 text-gray-700">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-y-2">
              <>
                <p className="font-bold">Brand</p>
                <p>{product?.brand}</p>
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
                  {product?.mkweight && (
                <>
                  <p className="font-bold">Weight</p>
                  <p>{product.mkweight} g</p>
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
              {product?.Proteins && (
                <>
                  <p className="font-bold">Proteins</p>
                  <p>{product.Proteins}</p>
                </>
              )}

              {product?.Carbohydrates && (
                <>
                  <p className="font-bold">Carbohydrates</p>
                  <p>{product.Carbohydrates}</p>
                </>
              )}

              {product?.TotalFats && (
                <>
                  <p className="font-bold">Total Fats</p>
                  <p>{product.TotalFats}</p>
                </>
              )}

              {product?.SaturatedFats && (
                <>
                  <p className="font-bold">Saturated Fats</p>
                  <p>{product.SaturatedFats}</p>
                </>
              )}

              {product?.MonosaturatedFats && (
                <>
                  <p className="font-bold">Monosaturated Fats</p>
                  <p>{product.MonosaturatedFats}</p>
                </>
              )}

              {product?.PolyunsaturatedFats && (
                <>
                  <p className="font-bold">Polyunsaturated Fats</p>
                  <p>{product.PolyunsaturatedFats}</p>
                </>
              )}

              {product?.TransFats && (
                <>
                  <p className="font-bold">Trans Fats</p>
                  <p>{product.TransFats}</p>
                </>
              )}

              {product?.Cholesterol && (
                <>
                  <p className="font-bold">Cholesterol</p>
                  <p>{product.Cholesterol}</p>
                </>
              )}

              {product?.Sugar && (
                <>
                  <p className="font-bold">Sugar</p>
                  <p>{product.Sugar}</p>
                </>
              )}

              {product?.Iron && (
                <>
                  <p className="font-bold">Iron</p>
                  <p>{product.Iron}</p>
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


      {!(itemCode && itemCode.startsWith('Mk')) && (
        <div className="w-full p-4 pb-10 bg-slate-200 mt-10" data-aos="fade-down">
          <h2 className="mb-6 font-bold text-center mf text-[2.7rem]">
            Product Features
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div
              className="flex flex-col items-center justify-center gap-1"
              data-aos-duration="1800"
            >
              <img
                className="object-cover rounded-full size-24 sm:size-28 md:size-60"
                src="https://img.freepik.com/premium-vector/realistic-toilete-paper-paper-towels-with-feathers_80590-7437.jpg?w=740"
                alt=""
              />
              <h1 className="text-[0.9rem] font-semibold">Soft Tissue</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <img
                className="object-cover rounded-full size-24 sm:size-28 md:size-60"
                src="https://img.freepik.com/free-photo/eco-friendly-recycling-concept_23-2148737656.jpg?semt=ais_hybrid"
                alt=""
              />
              <h1 className="text-[0.9rem] font-semibold">Eco Friendly</h1>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-1"
              data-aos-duration="1800"
            >
              <img
                className="object-cover rounded-full size-24 sm:size-28 md:size-60"
                src="https://media.istockphoto.com/id/1263872609/vector/hand-throwing-away-tissue-into-a-trash-bin-coronavirus-prevention.jpg?s=612x612&w=0&k=20&c=VgqIF7fhivLTBuSCVntvFlc_cUfG0_4SClJVHJeEeeQ="
                alt=""
              />
              <h1 className="text-[0.9rem] font-semibold">Disposable</h1>
            </div>
          </div>
        </div>
      )}

      <div>
        <ExploreProducts cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default ProductDetails;
