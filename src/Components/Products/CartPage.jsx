import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const CartPage = ({ cart, setCart }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, [setCart]);

  const updateCartInLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCartInLocalStorage(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCartInLocalStorage(updatedCart);
    }
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCartInLocalStorage(updatedCart);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrder = (e) => {
    e.preventDefault();

    // Create flex-wrapped HTML for each cart item
    const orderDetails = `
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${cart
              .map(
                (item) => `
                    <div style="flex: 1 1 150px; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; width: 150px; text-align: center;">
                        <img src="${item.imageUrl}" alt="${item.name}" style="width: 100%; height: auto; object-fit: cover;" />
                        <p><strong>Product:</strong> ${item.name}</p>
                        <p><strong>Quantity:</strong> ${item.quantity}</p>
                    </div>`
              )
              .join("")}
        </div>`;

    // Prepare order data for EmailJS
    const orderData = {
      to_name: "Owner", // Replace with actual owner's name if needed
      from_name: userInfo.name,
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
      address: userInfo.address,
      orderDetails, // HTML for cart items
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_uwuijxf", // Your EmailJS service ID
        "template_je04x6n", // Your EmailJS template ID
        orderData,
        "iz6s-w2-bkXxSr9fL" // Your EmailJS user ID
      )
      .then((response) => {
        console.log("Order sent!", response);
        alert("Order placed successfully!");
        clearCart(); // Clear cart after order placement
      })
      .catch((error) => console.error("Order sending error:", error));
  };



  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="container mx-auto pt-28">
      <h2 className="text-5xl text-center mf mt-6 mb-10">Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li
            key={index}
            className="grid grid-cols-4  mb-1 border items-center pr-2 md:pr-6"
          >
            <img
              src={item?.imageUrl}
              alt={item?.name}
              className="w-20  h-24 md:w-40 md:h-28 object-cover"
            />
            <p className="text-xs md:text-lg max-w-20 md:max-w-52 text-center mx-auto  ">{item.name}</p>
            <div className="flex items-center mx-auto mt-6">
              <button
                onClick={() => decreaseQuantity(index)}
                className="px-2 md:px-4 py-1 md:py-2 border border-black rounded-sm"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="mx-2 md:mx-4 textxs md:text-lg">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(index)}
                className="px-2 md:px-4 py-1 md:py-2 border border-black rounded-sm"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 font-bold ml-10 md:ml-60"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>

      <div className="md:max-w-md mt-4 px-4  md:px-0 ">
        <div className="grid grid-cols-2 gap-4 text-white">
          <Link to={"/all-products"} className="py-4 text-center bg-dark px-2">
            Continue Shopping
          </Link>
          <button onClick={clearCart} className="py-4 text-center bg-dark px-2">
            Clear Cart
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 mt-10">
        <div className="border border-1 md:block hidden"></div>
        <div>
          <form onSubmit={handleOrder} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="border py-2 px-1"
                value={userInfo.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
            />
            <textarea
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 rounded"
            >
              Submit Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
