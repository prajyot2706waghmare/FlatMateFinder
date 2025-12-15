import express from "express";
import bcrypt from "bcryptjs";
import Admin from "../models/admin.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

// Profile route
router.get("/profile", authenticateToken, async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select('-password');
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    res.json(admin);
  } catch (err) {
    console.error("Profile Error:", err);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

// Update profile route
router.put("/profile", authenticateToken, async (req, res) => {
  try {
    const { name, email } = req.body;
    const admin = await Admin.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true }
    ).select('-password');
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    res.json(admin);
  } catch (err) {
    console.error("Update Profile Error:", err);
    res.status(500).json({ error: "Failed to update profile" });
  }
});

// Register route
router.post("/register", async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const { name, email, password } = req.body;
    console.log(name, email, password);
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check for existing user
    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const admin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    await admin.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "Admin registered successfully",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).json({ error: "Registration failed" });
  }
});

export default router;