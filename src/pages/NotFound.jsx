import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '0.5rem' }}>Page Not Found</h2>
      <p style={{ marginBottom: '1rem' }}>
        The page you are looking for does not exist.
      </p>
      <a href="/" style={{ color: '#2e7d32', fontWeight: 'bold' }}>
        Go back home
      </a>
    </div>
  );
};

export default NotFound;
