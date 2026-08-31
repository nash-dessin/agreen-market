import { useState } from "react";
import ProductCard from "../components/ProductCard";
import mockProducts from '../data & services/mockProductData.json';

const getDefaultProducts = () =>
  mockProducts.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    unit: product.unit,
    image: product.image,
    vendor: product.vendor,
    available: product.available,
    description: product.description,
  }));

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
