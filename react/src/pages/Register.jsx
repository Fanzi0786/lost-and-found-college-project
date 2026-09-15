import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      studentId,
      password,
    };

    localStorage.setItem("campusUser", JSON.stringify(user));

    alert("Registration successful! Please login.");

    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <div className="auth-logo">IU</div>

        <p className="university-name">INVERTIS UNIVERSITY</p>

        <h1>Create Account</h1>

        <p className="auth-subtitle">Join the Campus Lost & Found Portal</p>

        <form onSubmit={handleRegister}>
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your university email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Student ID</label>

          <input
            type="text"
            placeholder="Enter your student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="primary-btn">
            Create Account
          </button>
        </form>

        <p className="auth-bottom">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
