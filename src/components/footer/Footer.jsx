import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left side - brand */}
        <div className="footer-brand">
          <h2>E-Commerce</h2>
          <p>Shop smart. Shop easy.</p>
        </div>

        {/* Center links */}
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>

        {/* Right side - contact */}
        <div className="footer-contact">
          <p>📧 support@ecommerce.com</p>
          <p>📞 +1 (234) 567-890</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}
