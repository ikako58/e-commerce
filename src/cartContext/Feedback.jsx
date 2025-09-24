import React from "react";
import { useCart } from "./CartContext";
import "./feedback.css";

const Feedback = () => {
  const { message } = useCart();

  if (!message) return null;

  return <div className="feedback-toast">{message}</div>;
};

export default Feedback;
