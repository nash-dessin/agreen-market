import { products } from '../data/products';

const categories = ['Organic Produce', 'Flowers', 'Baked Goods', 'Preserved Goods'];

export default function ProductGrid({ farm, filter = 'all' }) {
  const farmProducts = products.filter((product) => product.farm === farm);

  const visibleProducts =
    filter === 'all'
      ? farmProducts
      : farmProducts.filter((product) => product.category === filter);

  return (
    <div className="product-grid">
      <div className="product-grid__header">
        <h2>{farm}'s Catalogue</h2>
        <div className="product-grid__filters" aria-label="Product filters">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => {}}>
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? 'active' : ''}
              onClick={() => {}}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid__list">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card__image">{product.image || '🌾'}</div>
              <div className="product-card__content">
                <span className="product-card__category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-card__meta">
                  <span>{product.price}</span>
                  <span>{product.unit}</span>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p>No products available for this selection.</p>
        )}
      </div>
    </div>
  );
}
import { products } from '../data/products';

const categories = ['Organic Produce', 'Flowers', 'Baked Goods', 'Preserved Goods'];

export default function ProductGrid({ farm, filter = 'all' }) {
  const farmProducts = products.filter((product) => product.farm === farm);

  const visibleProducts =
    filter === 'all'
      ? farmProducts
      : farmProducts.filter((product) => product.category === filter);

  return (
    <div className="product-grid">
      <div className="product-grid__header">
        <h2>{farm}'s Catalogue</h2>
        <div className="product-grid__filters" aria-label="Product filters">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => {}}>
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? 'active' : ''}
              onClick={() => {}}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid__list">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card__image">{product.image || '🌾'}</div>
              <div className="product-card__content">
                <span className="product-card__category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-card__meta">
                  <span>{product.price}</span>
                  <span>{product.unit}</span>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p>No products available for this selection.</p>
        )}
      </div>
    </div>
  );
}
