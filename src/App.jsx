import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/Product";
import VendorsPage from "./pages/Vendors";
import AboutPage from "./pages/About";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import AuthLogin from "./pages/AuthLogin";
import AuthSignUp from "./pages/AuthSignUp";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-shell">
          <Navbar />
          <main className="main-shell">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/vendors" element={<VendorsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<AuthLogin />} />
              <Route path="/signup" element={<AuthSignUp />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
