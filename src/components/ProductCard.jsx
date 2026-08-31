import React from "react";
import { useCart } from "../context/CartContext";


export default function ProductCard({ product = {} }) {
  const { addItem } = useCart();
  const farmName = product.farm || product.vendor || "Local farm";
  const productName = product.name || product.title || "Product";

  function parsePrice(val) {
    if (typeof val === 'number' && !Number.isNaN(val)) return val;
    if (typeof val === 'string') {

      const cleaned = val.replace(/,/g, '');
      const m = cleaned.match(/[0-9]+(?:\.[0-9]+)?/);
      if (m) return parseFloat(m[0]);
    }
    return NaN;
  }

  const parsedPrice = parsePrice(product.price);
  const priceText = Number.isFinite(parsedPrice)
    ? `KSH ${parsedPrice.toFixed(2)}${product.unit ? ' / ' + product.unit : ''}`
    : (product.price ? String(product.price) : 'Price not available');

  function handleAdd() {

    const itemPrice = Number.isFinite(parsedPrice) ? parsedPrice : 0;
    const item = {
      id: product.id || product._id || product.sku || productName,
      name: productName,
      price: itemPrice,
      vendor: farmName,
      img: product.img || product.image || '',
    };

    addItem(item, 1);
  }

  return (
    <article className="vendor-card" style={{ cursor: "default" }} aria-label={productName}>
      <div className="vendor-media">
        <img alt={productName} src={product.img || product.image} style={{ width: "100%", height: 180, objectFit: "cover" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
        <div>
          <h3 className="vendor-name" style={{ margin: 0 }}>{productName}</h3>
          <div className="vendor-category" style={{ marginTop: 4 }}>{farmName}</div>
        </div>
        <div className="vendor-price" style={{ fontWeight: 700 }}>{priceText}</div>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        style={{
          width: "100%",
          marginTop: 12,
          padding: "10px 12px",
          border: "none",
          borderRadius: 6,
          background: "#2d6a4f",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Add to cart
      </button>
    </article>
  );
}
