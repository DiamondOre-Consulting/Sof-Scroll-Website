import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs";
import { MdDelete } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6";

const CartPage = ({ cart, setCart }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loadingToastId, setLoadingToastId] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

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

  console.log(cart);

  const handleOrder = (e) => {
    e.preventDefault();
    if (
      !userInfo.name ||
      !userInfo.email ||
      !userInfo.phone ||
      !userInfo.address
    ) {
      return toast.error("All fields are required");
    }

    console.log(cart);

    const toastId = toast.loading("Submitting order...");
    setLoadingToastId(toastId);

    // Create flex-wrapped HTML for each cart item
    const orderDetails = `
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
   
    <tr>
      <td colspan="2" style="padding-top: 10px; text-align: center;">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; padding: 10px;">
          ${cart
            ?.map(
              (item) => `
            <div style="border: 1px solid #ddd; padding: 10px; text-align: center;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding-bottom: 10px;">
                    <img src="${item?.imageUrl}" alt="${
                item?.name
              }" style="width: 100%; height: auto; object-fit: cover; max-width: 150px;" />
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 14px; line-height: 1.5;">
                    <p><strong>Item code:</strong> ${item?.itemCode}</p>
                    <p>${item?.name}</p>
                    <p><strong>Quantity:</strong> ${item?.quantity} | 
                    <strong>Weight:</strong> ${item?.categoryHeading.replace(
                      "Gram",
                      "gm"
                    )}  
                  
                  </td>
                </tr>
              </table>
            </div>
          `
            )
            .join("")}
        </div>
      </td>
    </tr>
  </table>
`;

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
        "service_cjs69us", // Your EmailJS service ID
        "template_nai32c3", // Your EmailJS template ID
        orderData,
        "bV5Ar2-E2KVthub0u" // Your EmailJS user ID
      )
      .then((response) => {
        toast.update(toastId, {
          render: "Order Placed successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        console.log("Order sent!", response);
        setSuccess(true);

        clearCart(); // Clear cart after order placement
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to place order!");
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Your Cart" },
  ];

  console.log("carttt", cart);

  return (
    <div className="">
      <BreadCrumbs headText={"Your Cart"} items={breadcrumbItems} />

      {success ? (
        <div className="flex items-start justify-center h-[80vh] pt-24">
          <div className="flex flex-col items-center justify-center p-10 pb-16 bg-gray-200 rounded-lg">
            <FaCheck className="text-white bg-dark text-[3.6rem] mb-2 border-2 border-dark rounded-full p-2" />
            <h2 className="font-semibold text-[1.5rem]">
              😊 Order Placed Successfully
            </h2>
            <p>We will contact you soon</p>
            <div className="mt-6 space-x-2 font-semibold text-white">
              <Link
                to={"/"}
                className="p-2 px-3 bg-gray-800 rounded hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                to={"/all-products"}
                className="p-2 px-3 text-white duration-300 rounded bg-dark hover:bg-green-700"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mb-40 sm:px-10 gap-4 px-2 lg:flex max-w-[80rem] mx-auto pt-8">
          {/* <h2 className="mt-6 mb-10 text-5xl text-center mf">Your Cart</h2> */}
          {cart.length !== 0 && (
            <div className="border border-gray-300 h-fit mx-auto bg-slate-50 lg:sticky top-20  rounded-md  max-w-[40rem] w-full">
              <div className="p-4 rounded-md border-[0.3rem] ">
                <form
                  onSubmit={handleOrder}
                  noValidate
                  className="flex flex-col gap-3 m-2 "
                >
                  <div className="flex flex-col">
                    <label className="text-[0.95rem] px-1 text-gray-600 font-semibold ">
                      Name{" "}
                      <span className="text-red-500 text-[1.3rem] relative top-[0.2rem] right-[0.2rem]">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full p-2 border rounded focus:outline-none border-dark"
                      value={userInfo.name}
                      onChange={handleChange}
                      placeholder="Enter Name..."
                      required
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label className="text-[0.95rem] px-1 text-gray-600 font-semibold">
                      Email{" "}
                      <span className="text-red-500 text-[1.3rem] relative top-[0.2rem] right-[0.2rem]">
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="w-full p-2 border rounded focus:outline-none border-dark"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[0.95rem] px-1 text-gray-600 font-semibold">
                      Phone{" "}
                      <span className="text-red-500 text-[1.3rem] relative top-[0.2rem] right-[0.2rem]">
                        *
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:outline-none border-dark"
                      placeholder="Phone"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[0.95rem] px-1 text-gray-600 font-semibold">
                      Address{" "}
                      <span className="text-red-500 text-[1.3rem] relative top-[0.2rem] right-[0.2rem]">
                        *
                      </span>
                    </label>
                    <textarea
                      name="address"
                      value={userInfo.address}
                      onChange={handleChange}
                      placeholder="Address"
                      rows={4}
                      className="w-full p-2 border rounded resize-none focus:outline-none border-dark"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
          <div className="relative z-[1000000]">
            <ToastContainer className={"z-[10000] relative"} />
          </div>
          {cart.length === 0 ? (
            <div className="flex flex-col w-full items-center h-[50vh] justify-center gap-4 py-6">
              <h2 className="text-[1.4rem] font-semibold">
                😞 OOPS! Your cart is empty
              </h2>
              <Link
                to={"/all-products"}
                className="px-5 py-3 font-semibold tracking-wide text-center text-white bg-green-700 rounded hover:bg-dark"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="bottom-0 flex flex-wrap items-center justify-between w-full gap-4 p-1 mt-4 border rounded-md shadow-md h-fit lg:mt-0  border-[#d2ceb2] max-w-[40rem] lg:max-w-[35rem] mx-auto">
              <div className="flex flex-wrap items-center justify-center w-full bg-white rounded lg:items-start lg:gap-4 lg:flex-col">
                <ul className="mb-4 space-y-6">
                  {cart?.map((item, index) => (
                    <div
                      className="relative p-4 py-1 pt-3 space-y-2 overflow-hidden border rounded-md bg-gray-50"
                      key={item?.itemCode}
                    >
                      <div className="relative flex items-center gap-2 sm:flex-row">
                        <div className="relative sm:w-[25%] w-full max-w-[25%] md:w-[20%] lg:w-[20%]">
                          <img
                            className="object-cover rounded-lg "
                            src={item?.previews[0]?.previewUrl}
                            alt={item?.name}
                          />
                          <div className="absolute top-[-0.5rem] border border-gray-400 -left-[0.5rem] flex items-center justify-center rounded-full bg-gray-50 font-semibold size-6 text-[0.9rem]  p-1">
                            {item?.quantity}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="mr-6 font-normal text-gray-800 sm:font-semibold line-clamp-2 text-md">
                            {item?.name}
                          </p>
                          {item?.mkweight && (
                            <p>
                              Total Weight:{" "}
                              {item?.categoryHeading.replace("Gram", "gm")}
                              {/* {Number(item?.mkweight || 0) *
                                Number(item?.quantity || 1)}{" "}
                              g */}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="relative flex flex-wrap items-center justify-between gap-2 p-3 py-1 bg-white border rounded-md shadow-sm">
                        <button
                          onClick={() => removeItem(index)}
                          className="absolute top-0 z-10 right-0 p-[0.5rem] ml-10 font-bold text-red-500 shadow-md bg-gray-200 text-[1.5rem] md:ml-60"
                        >
                          <MdDelete />
                        </button>
                        <p className="flex items-center gap-2 font-medium text-gray-700">
                          {" "}
                          <div className="flex items-center overflow-hidden border border-gray-400 rounded shadow">
                            <button
                              onClick={() => decreaseQuantity(index)}
                              className="text-[1rem] bg-red-500 text-white size-8 flex items-center justify-center"
                              disabled={item.quantity <= 1}
                            >
                              <FaMinus />
                            </button>
                            <span className="min-w-[3rem] px-2 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => increaseQuantity(index)}
                              className="text-[1rem] bg-green-500 text-white flex items-center justify-center   size-8"
                            >
                              <FaPlus />
                            </button>
                          </div>{" "}
                        </p>
                      </div>
                    </div>
                  ))}
                </ul>
                <button
                  onClick={handleOrder}
                  className="w-full p-2 m-1 mt-2 font-semibold text-white bg-blue-500 rounded cursor-pointer sm:mt-1 "
                >
                  Quote me!
                </button>
              </div>
              <div className="flex items-center justify-center w-full gap-2 mt-4 font-semibold text-white sm:flex-row lg:flex-col">
                <button
                  onClick={clearCart}
                  className=" p-2 font-semibold text-center text-white bg-red-500 rounded w-[12rem] sm:w-full lg:w-full hover:bg-red-600"
                >
                  Clear Cart
                </button>
                <Link
                  to={"/all-products"}
                  className="w-full p-2 font-semibold text-center text-white bg-green-600 rounded hover:bg-dark"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
