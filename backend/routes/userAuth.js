import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.js"; // make sure path is correct
import jwt from "jsonwebtoken";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();
const storage = multer.diskStorage({});
const upload = multer({ storage });

  router.post("/register", upload.single("profileImage"), async (req, res) => {
    console.log(req.body)
    try {
      const { name, email, password, gender } = req.body;
      if (!name || !email || !password || !gender) {
        return res.status(400).json({ error: "All fields are required" });
      }

      if (!req.file) {
        return res.status(400).json({ error: "Profile image is required" });
      }

      // Check for existing user
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // ✅ Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // ✅ Upload image to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "user_profiles",
      });

      // ✅ Create and save user
      const user = new User({
        name,
        email,
        password: hashedPassword, // ✅ store hashed password
        gender,
        profileImage: uploadResult.secure_url,
        cloudinaryId: uploadResult.public_id,
      });

      await user.save();

      // ✅ Generate JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(201).json({
        message: "✅ User registered successfully",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          gender: user.gender,
          profileImage: user.profileImage,
        },
      });
    } catch (err) {
      console.error("❌ Registration Error:", err);
      res.status(500).json({ error: "Registration failed" });
    }
  });

router.get("/", async (req, res) => {
  // res.send("Flat route works!");
   const user = await User.find();
  //  console.log(user)
   res.json(user)
});

// Login
router.post("/login", async (req, res) => {
  console.log("Login attempt:", req.body);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid email or password" });
console.log("JWT Secret:", process.env.JWT_SECRET);

    const token = jwt.sign({ id: user._id, email: user.email,profileImage: user.profileImage }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({
      message: "✅ Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, gender: user.gender,profileImage: user.profileImage },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
