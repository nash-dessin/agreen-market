import React, { useMemo, useState } from 'react';
import mockVendors from '../data & services/mockVendorData.json';
import wanjikuImg from '../assets/wanjikus-kitchen-garden.jpg';
import riftImg from '../assets/rift-valley-grains.jpg';
import ngongImg from '../assets/ngong-hills-blooms.jpg';
import mamaImg from '../assets/mama-akinyi-preserves.jpg';
import kiambuImg from '../assets/kiambu-valley-farm.jpg';
import zawadiImg from '../assets/zawadi-patisserie.jpg';

const imageMap = {
  'wanjikus-kitchen-garden.jpg': wanjikuImg,
  'rift-valley-grains.jpg': riftImg,
  'ngong-hills-blooms.jpg': ngongImg,
  'mama-akinyi-preserves.jpg': mamaImg,
  'kiambu-valley-farm.jpg': kiambuImg,
  'zawadi-patisserie.jpg': zawadiImg,
};

const vendors = mockVendors.map((v) => {
  const file = v.image.split('\\').pop().split('/').pop();
  return {
    id: v.id,
    name: v.name,
    category: v.speciality || v.category || 'Other',
    location: v.location,
    description: v.description,
    img: imageMap[file] || '/src/assets/vendor-placeholder.svg',
    items: v.items || [],
  };
});

const categoryList = ['All', ...Array.from(new Set(vendors.map((v) => v.category)))];

export default function Vendors() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedIds, setExpandedIds] = useState([]);

  function toggleDetails(id) {
    setExpandedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  const visibleVendors = useMemo(() => {
    if (selectedCategory === 'All') return vendors;
    return vendors.filter((vendor) => vendor.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div style={{ padding: '32px 20px 48px', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '8px', color: '#2b2b2b', textAlign: 'left' }}>Vendor Directory</h2>
      <p style={{ margin: '0 0 20px', color: '#5b615d' }}>Filter by category and tap a vendor to see what’s on their stall today.</p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '22px' }}>
        {categoryList.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            style={{
              border: '1px solid rgba(46, 27, 20, 0.12)',
              borderRadius: '999px',
              background: selectedCategory === category ? '#c45a3c' : '#fff',
              borderColor: selectedCategory === category ? '#c45a3c' : undefined,
              color: selectedCategory === category ? '#fff' : '#2e1b14',
              padding: '8px 12px',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        {visibleVendors.map((vendor) => (
          <article key={vendor.id} className="product-card" aria-label={vendor.name}>
            <div className="product-media">
              <img alt={vendor.name} src={vendor.img} />
            </div>

            <div className="product-info">
              <div>
                <h3 className="product-name">{vendor.name}</h3>
                <p className="product-meta">{vendor.location}</p>
              </div>

              <div className="product-price">
                <button
                  type="button"
                  className="add-btn"
                  onClick={() => toggleDetails(vendor.id)}
                >
                  {expandedIds.includes(vendor.id) ? '− Close' : '+ Details'}
                </button>
              </div>
            </div>

            {expandedIds.includes(vendor.id) && vendor.items && vendor.items.length > 0 && (
              <div className="vendor-details" style={{ padding: '12px 16px', borderTop: '1px solid rgba(46, 27, 20, 0.08)' }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {vendor.items.map((item, idx) => (
                    <li key={`${vendor.id}-${idx}`} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
                      <span>{item.name}</span>
                      <span style={{ fontFamily: 'DM Mono, monospace' }}>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
