import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loginStatus = localStorage.getItem("campusLoggedIn");
    const user = JSON.parse(localStorage.getItem("campusUser"));

    if (loginStatus === "true") {
      setLoggedIn(true);

      if (user) {
        setUserName(user.name);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("campusLoggedIn");

    setLoggedIn(false);
    setUserName("");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <div className="navbar-logo">IU</div>

        <div>
          <h2>Invertis University</h2>
          <span>Campus Lost & Found</span>
        </div>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/lost-items">Lost Items</Link>

        <Link to="/found-items">Found Items</Link>

        {loggedIn && (
          <>
            <Link to="/report-lost">Report Lost</Link>

            <Link to="/report-found">Report Found</Link>
          </>
        )}

        {loggedIn ? (
          <div className="user-section">
            <span className="user-name">Hi, {userName}</span>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
