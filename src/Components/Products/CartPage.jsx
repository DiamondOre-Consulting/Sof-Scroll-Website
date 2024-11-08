import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs";
import { MdDelete } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";

const CartPage = ({ cart, setCart }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loadingToastId, setLoadingToastId] = useState(null);
  const [loading, setLoading] = useState(false);

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

  console.log(cart)


  const handleOrder = (e) => {
    e.preventDefault();

    if (!userInfo.name || !userInfo.email || !userInfo.phone || !userInfo.address) {
      return toast.error("All fields are required")
    }

    const toastId = toast.loading('Sending message...');
    setLoadingToastId(toastId);


    // Create flex-wrapped HTML for each cart item
    const orderDetails = `
        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px;">
            ${cart
        .map(
          (item) => `
                    <div style="flex: 1 1 150px; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; width: 150px; text-align: center;">
                        <img src="${item.imageUrl}" alt="${item.name}" style="width: 100%; height: auto; object-fit: cover;" />
                        <p><strong>Item code:</strong> ${item.itemCode}</p>
                        <p><strong>Product:</strong> ${item.name}</p>
                        <p><strong>Quantity:</strong> ${item.quantity} | <strong>Weight:</strong> ${item.weight}</p>
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
        toast.update(toastId, {
          render: 'Email sent successfully!',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
        });
        toast.success("Order placed successfully!");
        clearCart(); // Clear cart after order placement
      })
      .catch((error) => console.error("Order sending error:", error));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Your Cart' },
  ];

  return (
    <>
      <BreadCrumbs headText={"Your Cart"} items={breadcrumbItems} />

      <div className="container sm:px-10 px-4 max-w-[77rem] mx-auto pt-28">
        {/* <h2 className="mt-6 mb-10 text-5xl text-center mf">Your Cart</h2> */}
        <ul>
          {cart.map((item, index) => (
            <li
              key={index}
              className="relative grid items-center grid-cols-3 pr-6 mb-1 border rounded shadow-lg md:pr-6"
            >
              <img
                src={item?.imageUrl}
                alt={item?.name}
                className="object-cover h-24 w-28 md:w-40 md:h-28"
              />
              <p className="mx-auto text-[1.05rem] text-center md:text-lg  max-w-52 ">
                {item.name}
              </p>
              <div className="flex items-center mx-auto">
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="px-2 py-1 border border-black rounded-sm md:px-4 md:py-2"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="mx-2 text-lg md:mx-4">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQuantity(index)}
                  className="px-2 py-1 border border-black rounded-sm md:px-4 md:py-2"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(index)}
                className="absolute top-0 right-0 p-[0.4rem] ml-10 font-bold text-red-500 shadow-md bg-gray-200 text-[1.5rem] md:ml-60"
              >
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>

        {cart.length === 0 ?
          <div className="flex flex-col items-center h-[50vh] justify-center gap-4 py-6">
            <h2 className="text-[1.4rem] font-semibold">😞 OOPS! Your cart is empty</h2>
            <Link to={"/all-products"} className="px-5 py-3 font-semibold tracking-wide text-center text-white bg-green-700 rounded hover:bg-dark">
              Continue Shopping
            </Link>
          </div> :
          <div className="flex flex-col items-end justify-center gap-2 pt-4 font-semibold text-white sm:flex-row">
            <button onClick={clearCart} className="px-2 py-3 text-center bg-red-600 rounded w-full sm:max-w-[18rem] hover:bg-red-700">
              Clear Cart
            </button>
            <Link to={"/all-products"} className="px-2 py-3 text-center bg-green-700 rounded w-full sm:max-w-[18rem] hover:bg-dark">
              Continue Shopping
            </Link>

          </div>}

        {cart.length !== 0 &&
          <div className=" px-4 mt-10 mx-auto max-w-[40rem]">
            <div>
              <form onSubmit={handleOrder} noValidate className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="text-[0.95rem] px-1 text-gray-600 font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"

                    value={userInfo.name}
                    onChange={handleChange}
                    placeholder="Enter Name..."
                    required
                  />
                </div>

                <div className="flex flex-col ">
                  <label className="text-[0.95rem] px-1 text-gray-600 font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[0.95rem] px-1 text-gray-600 font-semibold">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"
                    placeholder="Phone"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[0.95rem] px-1 text-gray-600 font-semibold">Address</label>
                  <textarea
                    name="address"
                    value={userInfo.address}
                    onChange={handleChange}
                    placeholder="Address"
                    rows={2}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-dark"
                    required
                  />
                </div>

                <button
                  type='submit'
                  className="relative flex items-center w-full px-6 py-[0.6rem] overflow-hidden font-medium text-center transition-all rounded-md bg-[#476e2a] group"
                >
                  <span
                    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rounded bg-dark group-hover:-mr-4 group-hover:-mt-4"
                  >
                    <span
                      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                  </span>
                  <span
                    className="absolute bottom-0 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out rotate-180 rounded bg-dark group-hover:-ml-4 group-hover:-mb-4"
                  >
                    <span
                      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                    ></span>
                  </span>
                  <span
                    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full rounded-md bg-dark group-hover:translate-x-0"
                  ></span>
                  <span
                    className="relative flex w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                  > {loading ? 'Sending...' : <span className='flex items-center justify-center w-full gap-2'>Send Message <IoMdSend /></span>}
                  </span>
                </button>
              </form>
              <ToastContainer />

            </div>
          </div>}
      </div>
    </>
  );
};

export default CartPage;
