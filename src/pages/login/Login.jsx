import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth"; // ✅ import added

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in successfully!");
    navigate("/profile"); // ✅ redirect after login
  } catch (error) {
    setError("Invalid email or password");
  }
};

  return (
    <div className="login-page">
      <h2>Log In</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
        {error && <p className="error" style={{color:'red'}}>{error}</p>}
      </form>

      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
