// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Task from "./pages/Task/Task";
import Completed from "./pages/Completed/Completed";
import Submit from "./pages/Submit/Submit";
import LandingPage from "./pages/Landing-Page/LandingPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Review from "./pages/Review/Review";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="landing" element={<LandingPage />} />

        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="task" element={<Task />} />
          <Route path="completed" element={<Completed />} />
          <Route path="submit" element={<Submit />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
