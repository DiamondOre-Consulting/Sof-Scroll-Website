import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrder = (e) => {
    e.preventDefault();

    const orderDetails = {
      ...userInfo,
      products: cart.map((item) => `${item.name} - ${item.quantity}`),
    };

    emailjs
      .send("your_service_id", "your_template_id", orderDetails, "your_user_id")
      .then((response) => {
        console.log("Order sent!", response);
        alert("Order placed successfully!");
      })
      .catch((error) => console.error("Order sending error:", error));
  };

  return (
    <div className="container mx-auto pt-28">
      <h2 className="text-5xl text-center mf mt-6 mb-10">Your Cart</h2>
      <ul  >
        {cart.map((item, index) => (
          <li
            key={index}
            className="flex justify-between mb-1 border boorder-1 items-center justify-center pr-6 "
          >
            <img
              src={item?.imageUrl}
              alt={item?.imageUrl}
              className="w-40  h-28 object-cover"
            />
            <p> {item.name}</p>
            <p> Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>

      <div className="max-w-md mt-4">
        <div className="grid grid-cols-2 gap-4 text-white">
          <p className="py-4 text-center bg-dark px-2">Continue Shopping</p>
          <p className="py-4 text-center bg-dark px-2">Clear Cart</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 px-4 mt-10">
        <div className="border border-1"></div>

        <div>
          <form onSubmit={handleOrder} className="flex flex-col gap-4   ">

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
