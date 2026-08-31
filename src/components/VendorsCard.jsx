import React, { useState } from "react";

export default function VendorCard({ vendor = {} }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={open ? "vendor-card is-open" : "vendor-card"}
      tabIndex={0}
      onClick={() => setOpen((s) => !s)}
      onKeyDown={(e) => e.key === "Enter" && setOpen((s) => !s)}
      aria-expanded={open}
    >
      <div className="vendor-media">
        <img alt={vendor.name} src={vendor.img} />
      </div>

      <div className="vendor-head">
        <div>
          <h3 className="vendor-name">{vendor.name}</h3>
          <p className="vendor-category">{vendor.category}</p>
          <p className="vendor-location">{vendor.location}</p>
        </div>

        <button
          type="button"
          className="details-toggle"
          onClick={(event) => {
            event.stopPropagation();
            setOpen((s) => !s);
          }}
          aria-expanded={open}
          aria-label={open ? `Hide details for ${vendor.name}` : `Show details for ${vendor.name}`}
        >
          {open ? "− Close" : "+ Details"}
        </button>
      </div>

      {open && vendor.items && (
        <div className="vendor-details">
          <ul>
            {vendor.items.map((item, index) => (
              <li key={`${item.name}-${index}`}>
                <span>{item.name}</span>
                <span className="vendor-item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
