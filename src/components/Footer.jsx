import React from "react";

export default function Footer() {
  return (
    <footer id="newsletter" className="section footer" aria-label="site footer">
      <div>
        <strong>Newsletter</strong>
        <div className="subtle">Sign up for weekly notes on vendors and seasonal picks.</div>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <a href="#" className="filter-btn">Vendor Application</a>
        <a href="#" className="filter-btn">Contact</a>
      </div>
    </footer>
  );
}
