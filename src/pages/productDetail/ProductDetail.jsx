import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../cartContext/CartContext"; // ✅ use your context
import "./productDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // ✅ get addToCart from context

  useEffect(() => {
    fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setProduct(found);
      })
      .catch((err) => console.error("Error loading product:", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="detail-image" />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p className="price">💲 {product.priceCents / 100}</p>
        <p>⭐ {product.rating.stars} ({product.rating.count} reviews)</p>
        <p className="desc">{product.description}</p>

        {/* ✅ Add to cart button */}
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
