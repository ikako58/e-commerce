import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirm) {
    setError("Passwords do not match");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created!");
    navigate("/profile"); // ✅ send user to profile
  } catch (error) {
    setError(error.message);
  }
};

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleRegister}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
      </form>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
