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
    <div className="w-full mx-auto p-4 pt-28 px-10 md:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-start mt-4">
        <img
          src={mainImage}
          alt={product.name}
          className="w-full h-96 object-cover rounded-sm shadow-sm"
        />

        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold mt-6 mf">{product.name}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>

          <div className="mt-4 space-y-2">
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
              <strong>GSM:</strong> {product.gsm}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight}
            </p>

            <p>
              <strong>Set Of Packets:</strong> {product.setOfPackets}
            </p>
          </div>

          <div className="flex items-center mt-6">
            <div className="border border-1 border-black">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 border border-black border-t-0 border-b-0 border-l-0 border-1 rounded-sm"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="mx-4 text-lg">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 border border-black border-t-0 border-b-0 border-r-0 border-1 rounded-sm"
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
                  className="mt-6 px-6 py-4 bg-red-500 text-white rounded-sm hover:bg-red-700 transition"
                >
                  Remove from Cart
                </button>
              </>
            ) : (
              <button
                onClick={() => addToCart(quantity)}
                className="mt-6 px-6 py-4 bg-dark text-white rounded-sm hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            )}
            <Link to={'/cart'} className="mt-6 px-6 py-2 bg-black text-white rounded-sm hover:bg-blue-700 transition text-center flex justify-center items-center">
              Buy Now
            </Link>
          </div>
        </div>
      </div>


      <div>
        <ExploreProducts cart={cart} setCart={setCart}/>
      </div>
    </div>
  );
};

export default ProductDetails;
