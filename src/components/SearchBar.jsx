import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="🔍 Search for produce..."
        aria-label="Search for produce"
        style={{
          flex: 1,
          padding: '0.75rem 1rem',
          border: '1px solid #d1d5db',
          borderRadius: '0.5rem',
          fontSize: '1rem',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0.75rem 1rem',
          border: 'none',
          borderRadius: '0.5rem',
          backgroundColor: '#16a34a',
          color: '#fff',
          fontWeight: '600',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </form>
  );
}
