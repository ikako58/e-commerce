import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../cartContext/CartContext";
import "./cart.css";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.priceCents * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/" className="back-home-btn">
            ← Back to Home
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>💲{item.priceCents / 100}</p>
                </div>

                {/* Quantity controls */}
                <div className="cart-item-qty">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                {/* Remove */}
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h3>Total: 💲{(total / 100).toFixed(2)}</h3>
            <button>Proceed to Checkout</button>
            <br />
            <Link to="/" className="back-home-btn">
              ← Back to Home
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
