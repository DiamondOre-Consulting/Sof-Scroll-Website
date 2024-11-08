import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Allproducts from "./AllProducts";
import ExploreProducts from "./ExploreProducts";

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

  return (
    <div className="w-full max-w-[78rem] p-4 px-10 mx-auto pt-28 md:px-20 ">
      <div className="grid items-start grid-cols-1 mt-4 md:grid-cols-2 md:gap-10">
        <img
          src={mainImage}
          alt={product.name}
          className="object-cover w-full rounded-sm shadow-sm h-96"
        />

        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold mf">{product.name}</h1>
          <p className="mt-2 text-gray-700">{product.description}</p>

          <div className="space-y-1 ">
            <p>
              <strong>Quality:</strong> {product.quality}
            </p>
            <p>
              <strong>Ply:</strong> {product.ply} | <strong>GSM:</strong> {product.gsm} |  <strong>Weight:</strong> {product.weight}

            </p>
            <p>
              <strong>Pulls:</strong> {product.pulls}
            </p>

            <p>
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

          <div className="grid grid-cols-2 gap-4">
            {isInCart ? (
              <>
                <button
                  onClick={removeFromCart}
                  className="px-6 py-4 mt-6 text-white transition bg-red-500 rounded-sm hover:bg-red-700"
                >
                  Remove from Cart
                </button>
              </>
            ) : (
              <button
                onClick={() => addToCart(quantity)}
                className="px-6 py-4 mt-6 text-white transition rounded-sm bg-dark hover:bg-green-700"
              >
                Add to Cart
              </button>
            )}
            <Link to={'/cart'} className="flex items-center justify-center px-6 py-2 mt-6 text-center text-white transition bg-black rounded-sm hover:bg-gray-800">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-center text-gray-700">
          {product.fullDesc}
        </p>
      </div>

      <div>
        <ExploreProducts cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default ProductDetails;
