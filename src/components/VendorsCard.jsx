import React, { useState } from "react";

export default function VendorCard({ vendor = {} }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="vendor-card" tabIndex={0} onClick={() => setOpen((s) => !s)} onKeyDown={(e) => e.key === "Enter" && setOpen(s => !s)} aria-expanded={open}>
      <div className="vendor-media">
        <img alt={vendor.name} src={vendor.img} />
      </div>
      <div className="vendor-title">
        <div>
          <h3 className="vendor-name">{vendor.name}</h3>
          <div className="vendor-category">{vendor.category}</div>
        </div>
        <div className="vendor-price">{vendor.items?.[0]?.price ?? ""}</div>
      </div>

      {open && vendor.items && (
        <div className="vendor-expanded">
          <ul>
            {vendor.items.map((it, i) => (
              <li key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span>{it.name}</span>
                <span className="vendor-price">{it.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
