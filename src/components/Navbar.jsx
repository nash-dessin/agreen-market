import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Vendors', path: '/vendors' },
  { label: 'In Season', path: '/in-season' },
  { label: 'About', path: '/about' },
  { label: 'Your Cart', path: '/cart' },
];

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.brandWrap}>
        <span style={styles.brandMark}>A</span>
        <span style={styles.brandName}>AgriMarket</span>
      </div>

      <div style={styles.linksWrap}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {}),
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#14532d',
    color: '#f0fdf4',
    padding: '14px 32px',
    boxShadow: '0 2px 10px rgba(20, 83, 45, 0.15)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  brandWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  brandMark: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#facc15',
    color: '#14532d',
    fontWeight: 800,
  },
  brandName: {
    fontSize: '1.2rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
  },
  linksWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    flexWrap: 'wrap',
  },
  link: {
    color: '#ecfdf5',
    textDecoration: 'none',
    fontWeight: 600,
    padding: '8px 12px',
    borderRadius: '999px',
    transition: 'all 0.2s ease',
  },
  activeLink: {
    background: '#f0fdf4',
    color: '#14532d',
  },
};

export default Navbar;
