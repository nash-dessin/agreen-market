import React from "react";

export default function Hero() {
  return (
    <section className="section hero" aria-labelledby="hero-title">
      <div className="hero-left">
        <div className="section-title">
          <div>
            <div className="kicker">Grown here, sold here.</div>
            <h1 id="hero-title" className="hero-headline">Fresh produce, straight from local farmers.</h1>
            <p className="subtle">Seasonal, thoughtfully-grown produce and handcrafted goods from our region.</p>
            <div style={{ marginTop: 16 }}>
              <a href="#featured-products" className="filter-btn">Browse Products</a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18 }} className="hero-meta">
          <div className="stat-tile">Saturdays • 8am — 1pm</div>
          <div className="p--muted">Riverside Park · Free entry · Family-friendly</div>
        </div>
      </div>

      <aside>
        <div className="collage">
          <img alt="collage of some produce and stalls" src="src\assets\home-collage.png" />
        </div>
      </aside>
    </section>
  );
}
