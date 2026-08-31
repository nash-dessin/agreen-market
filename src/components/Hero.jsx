import React from "react";
import { Link } from "react-router-dom";
import marketCollage from "../assets/home-collage.png";

export default function Hero() {
  return (
    <section className="section hero-section" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-title">Grown here, sold here.</h1>
          <p className="hero-subtitle">
            Seasonal produce, bakery favourites and floral arrangements from forty-two vendors.
            Open rain or shine from seven in the morning until the last avocado finds a home.
          </p>

          <div className="hero-actions">
            <Link to="/vendors" className="filter-btn">Meet the vendors</Link>
            <Link to="/products" className="secondary-btn">What’s in season</Link>
          </div>

        </div>

        <aside className="hero-visual" aria-label="Market collage preview">
          <div className="collage-grid">
            <div className="collage-panel tall">
              <img alt="Fresh produce in the market" src={marketCollage} />
            </div>
          </div>

        </aside>
      </div>
    </section>
  );
}
