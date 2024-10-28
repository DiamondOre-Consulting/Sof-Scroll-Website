import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHome from "./Pages/HomeMain/MainHome";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutusPage from "./Pages/AboutusPage";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path='/about-us' element={<AboutusPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
