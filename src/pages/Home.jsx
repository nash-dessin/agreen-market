import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturedVendors from "../components/FeaturedVendors";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />

      <FeaturedProducts />

      <FeaturedVendors />

      <Footer />
    </div>
  );
}
