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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    rawMaterial: "",
    ply: "",
    packaging: "",
    quantity: 1
  });

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
  }, [itemCode, cart]); // Depend on cart to update quantity if product is added/


  const addToCart = () => {
    if (
      !selectedOptions.rawMaterial ||
      !selectedOptions.ply ||
      !selectedOptions.packaging ||
      !selectedOptions.quantity
    ) {
      alert("Please select all options before adding to the cart!");
      return;
    }

    const updatedCart = cart?.map((cartItem) => {
      // Check if the product with the same itemCode already exists in the cart
      if (cartItem.itemCode === product.itemCode) {
        return {
          ...cartItem,
          options: [...cartItem.options, selectedOptions], // Push another option
        };
      }

      setSelectedOptions({
        rawMaterial: "",
        ply: "",
        packaging: "",
        quantity: 1
      })

      return cartItem;
    });

    // Check if the product is new and not already in the cart
    const isProductInCart = cart.some(
      (cartItem) => cartItem.itemCode === product.itemCode
    );

    if (!isProductInCart) {
      updatedCart.push({ ...product, options: [selectedOptions] }); // Add as a new product with the first option
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setIsModalOpen(false); // Close modal after adding to cart
  };

  const handleOptionChange = (field, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [field]: value,
    }));
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  const updateCartInLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
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
            className="w-full max-w-full mx-auto h-[50vw] lg:h-[22rem] lg:max-w-[30rem] object-cover rounded-md"
          />
        </div>

        <ul className="flex items-center justify-center gap-3 pt-2">
          {previews.map((preview, i) => (
            <li
              className="flex items-center justify-center w-24 h-24 p-1 overflow-hidden border border-gray-200 rounded-md cursor-pointer dark:border-slate-700"
              key={i}
              onClick={() => setIndex(i)}
            >
              <img src={preview.thumbUrl} alt="" className="object-cover w-full h-full rounded-md" />
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



            <div className="flex items-center justify-start gap-4 mt-6">
              <div className="actions">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
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
      {isModalOpen && (
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
      )}
    </>
  );
};

export default ProductDetails;
