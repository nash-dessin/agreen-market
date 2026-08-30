import { useState } from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <div className="product-footer">
        <span>${product.price}</span>
        <button type="button">Add</button>
      </div>
    </div>
  );
}

export default function Product({ products = defaultProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const specialty = ['All', 'Vegetables', 'Fruits', 'Floral', 'Preserved Goods'];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="product-page">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search products..."
        className="search-input"
      />

      <div className="category-filters">
        {specialty.map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
