import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
        // Handle successful login (e.g., redirect to dashboard, etc.)
        console.log("Login successful!", data);
        // You could redirect or update state here to indicate the user is logged in.
      } else {
        // Handle login failure (e.g., invalid credentials)
        console.error("Login failed: ", data.error);
        alert(data.error); // Display the error message to the user
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
