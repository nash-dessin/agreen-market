import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Vendors', path: '/vendors' },
  { label: 'About', path: '/about' },
  { label: 'Your Cart', path: '/cart' },
];

function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="site-nav">
      <NavLink to="/" className="nav-brand" end>
        <span className="brand-mark">A</span>
        <span className="brand-name">AgriMarket</span>
      </NavLink>

      <div className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
          >
            {item.path === '/cart' ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span>{item.label}</span>
                <span
                  aria-hidden
                  style={{
                    minWidth: 20,
                    height: 20,
                    padding: '0 6px',
                    borderRadius: 10,
                    background: '#4d7c0f',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {itemCount}
                </span>
              </span>
            ) : (
              item.label
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );

}

export default Navbar;
