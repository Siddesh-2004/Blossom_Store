import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Features from "./components/FeaturesList";
import Help from "./pages/Help";
import FlowerFreshness from "./pages/FlowerFreshness";
import Birthday from "./pages/Birthday";
import Anniversary from "./pages/Anniversary";
import Wedding from "./pages/Wedding";
import BigGestures from "./pages/BigGestures";
import GiftsForMen from "./pages/GiftsForMen";
import Congratulations from "./pages/Congratulations";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="px-4 sm:px-[0vw] md:px-[7vw] lg:px-[0vw]">
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Features />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/FlowerFreshness" element={<FlowerFreshness />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/help" element={<Help />} />
        <Route path="/Occasions" element={<Collection />} />
        <Route path="/Birthday" element={<Birthday />} />
        <Route path="/Aniversary" element={<Anniversary />} />
        <Route path="/Wedding" element={<Wedding />} />
        <Route path="/BigGestures" element={<BigGestures />} />
        <Route path="/GiftsForMen" element={<GiftsForMen />} />
        <Route path="/Congratulations" element={<Congratulations />} />
        <Route path="/myOrders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
