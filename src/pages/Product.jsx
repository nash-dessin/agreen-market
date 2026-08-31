import { useState } from "react";
import ProductCard from "../components/ProductCard";
import mockProducts from '../data & services/mockProductData.json';
import sukumaWikiImg from "../assets/sukuma-wiki.jpg";
import managuImg from "../assets/managu.jpg";
import ndumaImg from "../assets/nduma.jpg";
import terereImg from "../assets/terere.jpg";
import wimbiSourdoughImg from "../assets/wimbi-sourdough.jpg";
import mkateWaSiniaImg from "../assets/mkate-wa-sinia.jpg";
import passionFruitJamImg from "../assets/passion-fruit-jam.jpg";
import hassAvocadoImg from "../assets/hass-avocado.jpg";
import kingProteaImg from "../assets/king-protea.jpg";
import tomatoesImg from "../assets/tomatoes.jpg";
import cabbageImg from "../assets/cabbage2.jpg";
import herbChutneyImg from "../assets/herb-chutney.jpg";
import mangoJamImg from "../assets/mango-jam.jpg";
import orangeMarmaladeImg from "../assets/orange-marmalade.jpg";
import sweetBananasImg from "../assets/sweet-bananas.jpg";
import sunflowerBundleImg from "../assets/sunflower-bundle.jpg";
import roseBouquetImg from "../assets/rose-bouquet.jpg";
import mixedFlowersImg from "../assets/mixed-flowers.jpg";
import wholeWheatRollsImg from "../assets/whole-wheat-rolls.jpg";

const imageMap = {
  "sukuma-wiki.jpg": sukumaWikiImg,
  "managu.jpg": managuImg,
  "nduma.jpg": ndumaImg,
  "terere.jpg": terereImg,
  "wimbi-sourdough.jpg": wimbiSourdoughImg,
  "mkate-wa-sinia.jpg": mkateWaSiniaImg,
  "passion-fruit-jam.jpg": passionFruitJamImg,
  "hass-avocado.jpg": hassAvocadoImg,
  "king-protea.jpg": kingProteaImg,
  "tomatoes.jpg": tomatoesImg,
  "cabbage2.jpg": cabbageImg,
  "herb-chutney.jpg": herbChutneyImg,
  "mango-jam.jpg": mangoJamImg,
  "orange-marmalade.jpg": orangeMarmaladeImg,
  "sweet-bananas.jpg": sweetBananasImg,
  "sunflower-bundle.jpg": sunflowerBundleImg,
  "rose-bouquet.jpg": roseBouquetImg,
  "mixed-flowers.jpg": mixedFlowersImg,
  "whole-wheat-rolls.jpg": wholeWheatRollsImg,
};
const getDefaultProducts = () =>
  mockProducts.map((product) => {
    const file = product.image.split("\\").pop().split("/").pop();

    return {
      ...product,
      image: imageMap[file],
    };
  });

const defaultProducts= getDefaultProducts();

export default function Product({ products = defaultProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Produce', 'Flowers', 'Bakery', 'Preserved goods'];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-page" style={{ padding: '20px 0 40px' }}>
      <div className="in-season" style={{ marginBottom: 24 }}>
        <div className="in-season-list" style={{ flex: 1 }}>
          <h3>What's in Season?</h3>
        </div>

        <div className="quote" style={{ flex: 0.9, background: '#8AA58D', color: '#1f2c1f', borderRadius: 12, padding: 16, fontStyle: 'italic' }}>
          “We only list what is fresh, fair, and in the best condition from local growers.”
          <div style={{ marginTop: 10, fontWeight: 700, fontStyle: 'normal' }}>— Eva, Market Manager</div>
        </div>
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search products..."
        className="search-input"
        style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(46,27,20,0.12)', marginBottom: 16 }}
      />

      <div className="category-filters" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
            style={{
              background: selectedCategory === category ? '#c45a3c' : 'transparent',
              color: selectedCategory === category ? '#fff' : '#2e1b14',
              border: '1px solid rgba(46,27,20,0.12)',
              borderRadius: 999,
              padding: '8px 12px',
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
