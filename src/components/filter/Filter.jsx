import "./filter.css";

const Filter = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <div className="filters">
      <h3>Filter by Category</h3>
      {categories.map((category) => (
        <label key={category} className="filter-option">
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => onCategoryChange(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default Filter;
