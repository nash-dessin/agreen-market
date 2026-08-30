import React from "react";
import VendorCard from "./VendorsCard";

const SAMPLE_VENDORS = [
  {
    id: 1,
    name: "Green Valley Farm",
    specialty: "produce",
    img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=900&q=80&auto=format&fit=crop",
    items: [{ name: "Heirloom Tomatoes", price: "KES150/kg" }],
  },
  {
    id: 3,
    name: "Nakuru Bakehouse",
    specialty: "bakery",
    img: "https://images.unsplash.com/photo-1541497411911-ec8fddfafb0b?w=900&q=80&auto=format&fit=crop",
    items: [{ name: "Sourdough Loaf", price: "KES220" }],
  },
];

export default function FeaturedVendors() {
  return (
    <section id="featured-vendors" className="section" aria-labelledby="featured-vendors-title">
      <div className="section-title">
        <div>
          <h2 id="featured-vendors-title" className="h1">Featured Vendors</h2>
          <div className="subtle">Meet a few of the makers at market</div>
        </div>
      </div>

      <div style={{ marginTop: 12 }} className="vendor-grid">
        {SAMPLE_VENDORS.map((v) => (
          <VendorCard key={v.id} vendor={v} />
        ))}
      </div>
    </section>
  );
}
