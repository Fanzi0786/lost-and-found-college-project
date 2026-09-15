import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("campusUser"));

    if (!savedUser) {
      alert("No account found. Please register first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("campusLoggedIn", "true");

      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <div className="auth-logo">IU</div>

        <p className="university-name">INVERTIS UNIVERSITY</p>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">Login to Campus Lost & Found</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your university email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="primary-btn">
            Login
          </button>
        </form>

        <p className="auth-bottom">
          Don't have an account?
          <Link to="/register"> Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
