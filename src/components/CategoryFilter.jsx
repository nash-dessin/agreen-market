const categories = ["All", "Fruits", "Vegetables", "Preserved Goods", "Florals"];

export default function CategoryFilter({ selectedCategory = "All", onCategoryChange }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", margin: "1rem 0" }}>
      {categories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange && onCategoryChange(category)}
            style={{
              border: "1px solid #d1d5db",
              background: isActive ? "#2e7d32" : "#ffffff",
              color: isActive ? "#ffffff" : "#1f2937",
              padding: "0.65rem 1rem",
              borderRadius: "9999px",
              cursor: "pointer",
              fontSize: "0.95rem",
              fontWeight: 600,
              transition: "all 0.2s ease-in-out",
              boxShadow: isActive ? "0 4px 12px rgba(46, 125, 50, 0.2)" : "none",
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
