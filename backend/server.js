// server.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { GoogleGenerativeAI } from "@google/generative-ai";
import chatRoute from "./routes/chat.js"
import propertyCalcRoutes from "./routes/propertyCalc.js";
import connectDB from "./config/database.js";
import userAuthRoutes from "./routes/userAuth.js";
import flatRoutes from "./routes/flats.js";
import flatmateRoutes from "./routes/flatmate.js";
import roomShareRoutes from "./routes/roomshare.js";
import adminAuthRoutes from "./routes/adminAuth.js"
import { saveOTP, verifyOTP } from "./utils/otpStore.js";
import { transporter } from "./utils/mailer.js";
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


const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// Send OTP
app.post("/api/send-otp", async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();
  console.log(otp);
  console.log(email);

  saveOTP(email, otp);

  await transporter.sendMail({
    from: `"Auth System" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Your Email Verification OTP",
    text: `Your OTP is ${otp}. It expires in 5 minutes.`
  });

  res.json({ success: true });
});

// Verify OTP
app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  console.log(email, otp, "it is for verify otp");

  if (!verifyOTP(email, otp)) {
    return res.status(400).json({ success: false });
  }
  console.log("OTP verified successfully");
  res.json({ success: true });
});

// app.listen(process.env.PORT || 5000, () =>
//   console.log(`Server running on port ${process.env.PORT || 5000}`)
// );

// ✅ Your Existing Routes
app.use("/uploads", express.static("uploads"));
app.use("/userauth", userAuthRoutes);
app.use("/flats", flatRoutes);
app.use("/flatmates", flatmateRoutes);
app.use("/roomshare", roomShareRoutes);
app.use("/property-calc", propertyCalcRoutes);
app.use("/admin", adminAuthRoutes);
app.use("/chat", chatRoute);
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

