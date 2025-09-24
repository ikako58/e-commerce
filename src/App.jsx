import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/grid/Grid";
import ProductDetail from "./pages/productDetail/ProductDetail";
import About from "./pages/about/About";
import Profile from "./pages/profile/Profile";
import { AuthProvider } from "./authContext/AuthContext";
import { CartProvider } from "./cartContext/CartContext";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} /> {/* Home */}
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="about" element={<About />} />
            </Route>

            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
