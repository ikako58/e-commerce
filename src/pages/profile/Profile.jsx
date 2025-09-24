import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./profile.css";
import { Link } from "react-router-dom"; // ✅ import Link


export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (!user) {
    return <p>Please <a href="/login">log in</a> to view your profile.</p>;
  }

  return (
    <div className="profile-page">
    <h2>Welcome, {user.email}</h2>

    <div className="profile-actions">
      <button onClick={handleLogout}>Log Out</button>
      <Link to="/" className="home-link">
        Go to Home
      </Link>
    </div>
  </div>
  );
}
