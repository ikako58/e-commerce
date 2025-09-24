import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import "./navbar.css";
import SearchInput from "../searchInput/SearchInput";

const Navbar = ({ pages, products, searchTerm, setSearchTerm }) => {
  return (
    <div className="navigation">
      {/* Left side links */}
      <ul className="nav-links">
        {pages.map((page, index) => (
          <li key={index}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>

      {/* Center search */}
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        products={products}
      />

      {/* Right side icons */}
      <div className="nav-icons">
        <Link to="/cart" className="icon">
          <FaShoppingCart />
        </Link>
        <Link to="/profile" className="icon">
          <FaUserCircle />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
