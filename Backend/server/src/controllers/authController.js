const bcrypt = require('bcrypt');
const Student = require("../models/studentSchema");
const Teacher = require('../models/teacherSchema');
const jwt = require("jsonwebtoken");
require("dotenv").config();
// Sign up function
// Sign up function
exports.signup = async (req, res) => {
  const { username, password, role, department } = req.body;
  if (!username || !password || !role || !department) {
    return res.json({
      message: "All fields are required" 
    });
  }
  try {
    const existingStudent = await Student.findOne({ username });
    const existingTeacher = await Teacher.findOne({ username });

    if (existingStudent || existingTeacher) {
      return res.status(400).json({
        success: false,
        error: "Username already exists! Please choose a different username.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === "Student") {
      const newStudent = new Student({
        username,
        password: hashedPassword,
        role,
        department,
      });
      await newStudent.save();
    } else if (role === "Teacher") {
      const newTeacher = new Teacher({
        username,
        password: hashedPassword,
        role,
      });
      await newTeacher.save();
    }

    res.status(201).json({
      success: true,
      message: "Signup successful! You can now log in.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error during sign-up: " + error.message,
    });
  }
};

// Login function
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await Student.findOne({ username });
    if (!user) {
      user = await Teacher.findOne({ username });
    } 

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Await bcrypt comparison since it is asynchronous
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });

    // Set the cookie with the token
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    // Clear the password from the user object before sending it to the client
    user.password = undefined;

    res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      user,
      message: "Logged in successfully",
    });
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Logout function
exports.logout = (req, res) => {
  // Clear the cookie instead of using session
  res.clearCookie("token");

  res.status(200).json({
    success: true,
    message: "Logout successful!",
  });
};