import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainHome from "./Pages/HomeMain/MainHome";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutusPage from "./Pages/AboutusPage";
import MyProducts from "./Components/Products/MyProducts";
import CartPage from "./Components/Products/CartPage";
import ProductDetails from "./Components/Products/ProductDetails";
import ContactUsPage from "./Pages/ContactUsPage";
import { MdWhatsapp } from "react-icons/md";
import ProductPage from "./Pages/ProductsPage";
import ProductCategory from "./Components/Products/ProductCategory";
import ChatBot from "./Components/ChatBot";

function App() {
  // Cart state and useEffect to save/load from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<MainHome cart={cart} setCart={setCart} />} />
        <Route path="/about-us" element={<AboutusPage />} />
        <Route
          path="/all-products"
          element={<MyProducts cart={cart} setCart={setCart} />}
        />
        <Route
          path="/product/:itemCode"
          element={<ProductDetails cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route
          path="/products/category/:category"
          element={<ProductCategory cart={cart} setCart={setCart} />}
        />
      </Routes>
      <div className="z-[1000000000] fixed bottom-[1.5rem] right-4 flex flex-col items-center justify-center gap-2">

        <ChatBot />
        <Link
          target="_blank"
          className="p-[0.65rem] bg-[#02b72c] hover:bg-white  shadow-sm shadow-red cursor-pointer hover:text-[#107829] text-white duration-200 flex items-center justify-center rounded-full  text-[1.8rem]"
          to="https://wa.me/9980516449?text=Hello%2C%20I'm%20interested%20in%20 SOF%20SSCRROL's%20products.%20Could%20you%20please%20share%20some%20details%3F"
        >
          <MdWhatsapp className="" />
        </Link>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
