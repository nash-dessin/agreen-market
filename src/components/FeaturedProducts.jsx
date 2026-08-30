import React from "react";
import ProductCard from "./ProductCard";

const SAMPLE_PRODUCTS = [
  { id: 1, title: "Heirloom Tomatoes", vendor: "Root & Field", price: "KES150/kg", img: "src\\assets\\tomatoes.jpg" },
  { id: 2, title: "Sourdough Loaf", vendor: "Hearth Bakehouse", price: "KES220", img: "src\\assets\\sourdough.jpg" },
  { id: 3, title: "Farm Bouquet", vendor: "Petal & Stem", price: "KES450", img: "src\\assets\\rose-bouquet.jpg" },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="section" aria-labelledby="featured-products-title">
      <div className="section-title">
        <div>
          <h2 id="featured-products-title" className="h1">Featured Products</h2>
          <div className="subtle">Hand-picked items from our vendors</div>
        </div>
      </div>

      <div style={{ marginTop: 12 }} className="vendor-grid">
        {SAMPLE_PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
