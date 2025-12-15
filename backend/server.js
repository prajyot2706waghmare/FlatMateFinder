// server.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { GoogleGenerativeAI } from "@google/generative-ai"; 

import propertyCalcRoutes from "./routes/propertyCalc.js";
import connectDB from "./config/database.js";
import userAuthRoutes from "./routes/userAuth.js";
import flatRoutes from "./routes/flats.js";
import flatmateRoutes from "./routes/flatmate.js";
import roomShareRoutes from "./routes/roomshare.js";
import adminAuthRoutes from "./routes/adminAuth.js"
dotenv.config(); // ✅ Load env variables

// ✅ Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Multer setup for temporary file storage
const storage = multer.diskStorage({});
const upload = multer({ storage });

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173" })); // your frontend origin
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ✅ Your Existing Routes
app.use("/uploads", express.static("uploads"));
app.use("/userauth", userAuthRoutes);
app.use("/flats", flatRoutes);
app.use("/flatmates", flatmateRoutes);
app.use("/roomshare", roomShareRoutes);
app.use("/property-calc", propertyCalcRoutes);
app.use("/admin",adminAuthRoutes);
// ✅ Root Test Route
app.get("/", (req, res) => {
  res.send("✅ Backend running successfully with Gemini Flash 2.0 integration!");
});


// ✅ Connect MongoDB and Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });

