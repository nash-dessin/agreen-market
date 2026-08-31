const categories = ["All", "Produce", "Bakery", "Flowers", "Preserved"];

export default function CategoryFilter({ selectedCategory = "All", onCategoryChange }) {
  return (
    <div className="filter-bar">
      {categories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            className={isActive ? "filter-button is-active" : "filter-button"}
            onClick={() => onCategoryChange && onCategoryChange(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
