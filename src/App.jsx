import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHome from "./Pages/HomeMain/MainHome";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutusPage from "./Pages/AboutusPage";
import MyProducts from "./Components/Products/MyProducts";
import CartPage from "./Components/Products/CartPage";
import ProductDetails from "./Components/Products/ProductDetails";
import ContactUsPage from "./Pages/ContactUsPage";

function App() {
  // Cart state and useEffect to save/load from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<MainHome cart={cart} setCart={setCart} />} />
        <Route path='/about-us' element={<AboutusPage />} />
        <Route path="/all-products" element={<MyProducts cart={cart} setCart={setCart} />} />
        <Route path="/product/:itemCode" element={<ProductDetails cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/contact-us" element={<ContactUsPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
