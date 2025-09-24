import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import Button from "../button/Button";
import Filter from "../filter/Filter";
import { useCart } from "../../cartContext/CartContext";

const Card = () => {
  const [data, setData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Fetch products
  useEffect(() => {
    fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Unique categories
  const categories = [...new Set(data.map((item) => item.category))];

  // Handle category toggle
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filter products
  const filteredProducts =
    selectedCategories.length === 0
      ? data
      : data.filter((item) => selectedCategories.includes(item.category));

  const goToDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid">
      {/* Filters at the top */}
      <Filter
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />

      {/* Product grid below */}
      <div className="products-grid">
        {filteredProducts.map((item) => (
          <div key={item.id} className="card-container">
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <div className="extra-info">
              <p>⭐ {item.rating.stars}</p>
              <p>💲 {item.priceCents / 100}</p>
            </div>

            {/* Buttons */}
            <div className="card-actions">
              <Button text={"View Details"} onclick={() => goToDetails(item.id)} />
              <Button text={"Add to Cart"} onclick={() => addToCart({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.priceCents / 100,
              })} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
