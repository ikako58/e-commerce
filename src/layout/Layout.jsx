import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer"; // ✅ new footer
import Feedback from "../cartContext/Feedback";
import { useState, useEffect } from "react";

export default function Layout() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  // ✅ Fetch products once for search suggestions
  useEffect(() => {
    fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="layout">
      {/* Sticky Navbar */}
      <Navbar
        pages={pages}
        products={products}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Page content */}
      <main className="page-content">
        <Outlet context={{ searchTerm, products }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating feedback */}
      <Feedback />
    </div>
  );
}
