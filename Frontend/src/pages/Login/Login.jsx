// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission (page reload)

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        credentials: "include", // To include cookies (like session cookies) if needed
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Login successful!", data);
        // After a successful login, navigate to the dashboard route.
        navigate("/dashboard");
      } else {
        console.error("Login failed: ", data.error || data.message);
        alert(data.error || data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login!");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
        <div className="login-switch">
          <p>
            Not a user? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
