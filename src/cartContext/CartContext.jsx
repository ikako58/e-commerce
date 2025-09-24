import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState(null); // feedback message

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        setMessage(`${product.name} quantity updated in cart`);
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      setMessage(`${product.name} added to cart`);
      return [...prev, { ...product, quantity: 1 }];
    });

    // Clear message after 2.5 seconds
    setTimeout(() => setMessage(null), 2500);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setMessage("Item removed from cart");
    setTimeout(() => setMessage(null), 2500);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, message }}>
      {children}
    </CartContext.Provider>
  );
};
