import React, { useMemo, useState } from "react";
import VendorCard from "./VendorsCard";
const SAMPLE_VENDORS = [
  {
    id: 1,
    name: "Wanjiku's Kitchen Garden",
    category: "produce",
    location: "Karen, Nairobi",
    img: "src\\assets\\wanjikus-kitchen-garden.jpg",
    items: [
      { name: "Sukuma wiki", price: "KSh 30 / bunch" },
      { name: "Hass avocado", price: "KSh 150 / fruit" },
      { name: "Sweet potatoes", price: "KSh 110 / kg" },
    ],
  },
  {
    id: 2,
    name: "Zawadi Patisserie",
    category: "baked goods",
    location: "Lang'ata",
    img: "src\\assets\\zawadi-patisserie.jpg",
    items: [
      { name: "Wimbi sourdough", price: "KSh 260 / loaf" },
      { name: "Cinnamon buns", price: "KSh 240 / batch" },
      { name: "Whole wheat rolls", price: "KSh 220 / pack" },
    ],
  },
  {
    id: 3,
    name: "Ngong Hills Blooms",
    category: "flowers",
    location: "Ngong",
    img: "src\\assets\\ngong-hills-blooms.jpg",
    items: [
      { name: "King Protea", price: "KSh 420 / stem" },
      { name: "Sunflower bundle", price: "KSh 380 / bunch" },
      { name: "Rose bouquet", price: "KSh 510 / bouquet" },
    ],
  },
  {
    id: 4,
    name: "Mama Akinyi Preserves",
    category: "preserved",
    location: "Mtwapa",
    img: "src\\assets\\mama-akinyi-preserves.jpg",
    items: [
      { name: "Passion fruit jam", price: "KSh 650 / jar" },
      { name: "Citrus marmalade", price: "KSh 520 / jar" },
      { name: "Herb chutney", price: "KSh 470 / jar" },
    ],
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
