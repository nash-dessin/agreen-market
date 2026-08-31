import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="newsletter" className="site-footer" aria-label="Site footer">
      <div className="footer-row">
        <div className="footer-brand">
          <strong>AgriMarket</strong>
          <p className="footer-note">Weekly notes on seasonal produce, makers, and market news.</p>
        </div>

        <div className="footer-links">
          <Link to="/not-found" className="footer-link">Newsletter</Link>
          <Link to="/not-found" className="footer-link">Vendor application</Link>
          <Link to="/not-found" className="footer-link">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
