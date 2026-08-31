import ProductCard from "./ProductCard";

import sukumaWikiImg from "../assets/sukuma-wiki.jpg";
import wimbiSourdoughImg from "../assets/wimbi-sourdough.jpg";
import kingProteaImg from "../assets/king-protea.jpg";
import passionFruitJamImg from "../assets/passion-fruit-jam.jpg";

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Sukuma wiki",
    vendor: "Wanjiku's Kitchen Garden",
    price: 30,
    unit: "bunch",
    img: sukumaWikiImg
  },
  {
    id: 2,
    title: "Wimbi sourdough",
    vendor: "Zawadi Patisserie",
    price: 260,
    unit: "loaf",
    img: wimbiSourdoughImg
  },
  {
    id: 3,
    title: "King Protea",
    vendor: "Ngong Hills Blooms",
    price: 420,
    unit: "stem",
    img: kingProteaImg
  },
  {
    id: 4,
    title: "Passion fruit jam",
    vendor: "Mama Akinyi Preserves",
    price: 650,
    unit: "jar",
    img: passionFruitJamImg
  },
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
